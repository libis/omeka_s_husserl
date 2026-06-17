<?php declare(strict_types=1);
/**
 * @copyright Copyright (c) 2009-2011 Roy Rosenzweig Center for History and New Media
 * @copyright Daniel Berthereau, 2014-2026
 * @license http://www.gnu.org/licenses/gpl-3.0.txt
 */
namespace OaiPmhHarvester\OaiPmh\HarvesterMap;

use Omeka\Api\Exception\NotFoundException;
use Omeka\Api\Representation\AbstractRepresentation;

use SimpleXMLElement;

/**
 * Metadata format map for the schema.org format
 */
class SchemaOrg extends AbstractHarvesterMap
{
    const METADATA_PREFIX = 'oai_husserl';
    const NAMESPACE_SCHEMA = 'http://schema.org/';

    /**
     * @var \Omeka\Api\Manager
     */
    protected $api;

    protected function mapRecordSingle(SimpleXMLElement $record, array $resource): array
    {
        $this->api = $this->services->get('Omeka\ApiManager');
        // Process all namespaces to manage various prefixes and unofficial oai
        // schemas.
        foreach ($record->metadata->getNamespaces(true) as $namespace) {
            $metadata = $record
                ->metadata
                ->children('oai_husserl', true)
                ->children('schema', true);
            foreach ($this->getLocalNamesByIdForVocabulary('schema') as $localName) {
                // The first check avoids an xml issue "Node no longer exists".
                // TODO Check if this issue is still present.
                if (strlen((string) $localName) && isset($metadata->$localName)) {
                    $resource["schema:$localName"] = $this->extractValues($metadata, "schema:$localName");
                }
            }
        }

        $args = [];
        //gather all the templates once
        $response = $this->api->search('resource_templates');
        $templates = $response->getContent();
        $templates_array=[];
        foreach ($templates as $template) {
            $templates_array[strtolower($template->label())] = $template->id();
        }
        $args["templates"] = $templates_array;

        //gather all the properties once for id's
        $response = $this->api->search('properties', ['vocabulary_prefix' => 'schema']);
        $properties = $response->getContent();

        $schemaTerms = [];
        foreach ($properties as $property) {
            $schemaTerms[$property->term()] = $property->id();
        }
        $args["schemaTerms"] = $schemaTerms;

        //make media
        if(isset($resource['schema:contentUrl'])) {
            foreach((array) $resource['schema:contentUrl'] as $contentUrl) {
                $url = $contentUrl["@value"].'' ?? null;
                if (!$url) {
                    continue;
                }
                if(str_contains($url, 'representation')) {
                    continue;
                }
                //remove params from url (from_cache etc)
                $url = strtok($url, '?');
                $url = $url . '?size=800,';
                $resource['o:media'][] = [
                    'o:ingester' => 'url',
                    'o:filename' => $url,
                    'o:source' => $url,
                    'ingest_url' => $url
                ];
            }
        }

        //set resource template (names should match)
        if(isset($resource['schema:category'])):
            $label = $resource['schema:category'][0]['@value'] ?? null;
            if(isset($args['templates'][strtolower($label)])):
                $templateId = $args['templates'][strtolower($label)] ?? null;
                if ($templateId) {
                    $resource['o:resource_template'] = ["o:id" => $templateId];
                }                
            endif;
        endif;    

        //create relationship
        //check schema:isPartOf for parent item, search api for parent and add as omeka_resource, replacing original literal
        if(isset($resource['schema:isPartOf'])) {
            $parentLabel = $resource['schema:isPartOf'][0]['@value'] ?? null;
            if ($parentLabel) {
                try {
                    //todo get property id out of data
                    $query = "property[0][joiner]=and&property[0][property]=".$args["schemaTerms"]['schema:identifier']."&property[0][type]=eq&property[0][text]=".$parentLabel;
                    //turn query into array
                    $queryArray = [];
                    parse_str($query, $queryArray);
                    $response = $this->api->search('items', $queryArray);
                    $parentItem = $response->getContent()[0] ?? null;
                    if ($parentItem) {
                        $resource['schema:isPartOf'][0] = [
                            "value_resource_id" => $parentItem->id(),
                            "value_resource_name" => "items",
                            'property_id' => $args["schemaTerms"]['schema:isPartOf'],
                            'type' => 'resource',
                        ];
                    }
                } catch (NotFoundException $e) {
                    // Parent item not found, skip relationship
                }
            }
        }

        if(isset($resource['schema:workExample'])) {
            $propertyId = $args["schemaTerms"]['schema:workExample'];
            foreach($resource['schema:workExample'] as $index => $value) {
                if (!empty($value['@value'])) {
                    $parentLabel = $value['@value'];
                    if ($parentLabel) {
                        try {
                            //todo get property id out of data
                            $query = "property[0][joiner]=and&property[0][property]=".$args["schemaTerms"]['schema:identifier']."&property[0][type]=eq&property[0][text]=".$parentLabel;
                            //turn query into array
                            $queryArray = [];
                            parse_str($query, $queryArray);
                            $response = $this->api->search('items', $queryArray);
                            $parentItem = $response->getContent()[0] ?? null;
                            if ($parentItem) {
                                $resource['schema:workExample'][$index] = [
                                    "value_resource_id" => $parentItem->id(),
                                    "value_resource_name" => "items",
                                    'property_id' => $propertyId,
                                    'type' => 'resource',
                                ];
                            }
                        } catch (NotFoundException $e) {
                            // Parent item not found, skip relationship
                        }
                    }
                }
            }
        }

        return $resource;
    }
}