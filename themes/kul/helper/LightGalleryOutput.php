<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class LightGalleryOutput extends AbstractHelper
{
    public function __invoke($files = null) 
    {
        $view = $this->getView();
        $view->headScript()->prependFile($view->assetUrl('vendor/lightgallery/js/lightgallery.min.js'));
        $view->headScript()->appendFile($view->assetUrl('vendor/lightgallery/js/plugins/thumbnail/lg-thumbnail.js'));
        $view->headScript()->appendFile($view->assetUrl('vendor/lightgallery/js/plugins/zoom/lg-zoom.js'));
        $view->headScript()->appendFile($view->assetUrl('vendor/lightgallery/js/plugins/video/lg-video.js'));
        $view->headScript()->appendFile($view->assetUrl('vendor/lightgallery/js/plugins/hash/lg-hash.js'));
        $view->headScript()->appendFile($view->assetUrl('vendor/lightgallery/js/plugins/rotate/lg-rotate.js'));
        $view->headScript()->appendFile($view->assetUrl('js/lg-itemfiles-config.js'));
        $view->headLink()->prependStylesheet($view->assetUrl('vendor/lightgallery/css/lightgallery.min.css'));
        $escape = $view->plugin('escapeHtml');

        $html = '<ul id="itemfiles" class="media-list">';
        $mediaCaption = 'description';

        foreach ($files as $file) {
            $media = $file['media'];
            $source = ($media->originalUrl()) ? $media->originalUrl() : $media->source(); 
            $mediaCaptionOptions = [
                'none' => '',
                'title' => 'data-sub-html="' . $media->displayTitle() . '"',
                'description' => 'data-sub-html="'. $media->displayDescription() . '"'
            ];
            $mediaCaptionAttribute = ($mediaCaption) ? $mediaCaptionOptions[$mediaCaption] : '';
            $mediaType = $media->mediatype();
            if (strpos($mediaType, 'video') !== false) {
                $videoSrcObject = [
                    'source' => [
                        [
                            'src' => $source, 
                            'type' => $mediaType,
                        ]
                    ], 
                    'attributes' => [
                        'preload' => false, 
                        'playsinline' => true, 
                        'controls' => true,
                    ],
                ];
                if (isset($file['tracks'])) {
                    foreach ($file['tracks'] as $key => $track) {
                        $label = $track->displayTitle();
                        $srclang = ($track->value('Dublin Core, Language')) ? $track->value('dcterms:language') : '';
                        $type = ($track->value('Dublin Core, Type')) ? $track->value('dcterms:type') : 'captions';
                        $videoSrcObject['tracks'][$key]['src'] = $track->originalUrl();
                        $videoSrcObject['tracks'][$key]['label'] = $label;
                        $videoSrcObject['tracks'][$key]['srclang'] = $srclang;
                        $videoSrcObject['tracks'][$key]['kind'] = $type;
                    }
                }
                $videoSrcJson = json_encode($videoSrcObject);
                $html .=  '<li data-video="' . $escape($videoSrcJson) . '" ' . $mediaCaptionAttribute . 'data-thumb="' . $escape($media->thumbnailUrl('medium')) . '" data-download-url="' . $source . '" class="media resource">';
            } else if ($mediaType == 'application/pdf') {
                $html .=  '<li data-sub-html="'. $escape('<a href="'. $source .'"><span class="icon-text"><span class="icon"><i class="fas fa-file-pdf"></i></span><span>Download PDF</span></span></a>').'" data-src="' . $escape($media->thumbnailUrl('large')) . '" '. $mediaCaptionAttribute . 'data-src="' . $escape($media->thumbnailUrl('large')) . '" data-thumb="' . $escape($media->thumbnailUrl('medium')) . '" data-download-url="' . $source . '" class="media resource">';
            } else {
                $html .=  '<li data-src="' . $source . '" ' . $mediaCaptionAttribute . 'data-thumb="' . $escape($media->thumbnailUrl('medium')) . '" data-download-url="' . $source . '" class="media resource">';
            }
            $html .= $media->render();
            $html .= '</li>';
        }
        $html .= '</ul>';

        return $html;
    }
}
