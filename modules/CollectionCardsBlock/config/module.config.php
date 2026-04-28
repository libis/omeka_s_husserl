<?php
return [
    'block_layouts' => [
        'invokables' => [
            'collectionCardsBlock' => CollectionCardsBlock\Site\BlockLayout\CollectionCardsBlock::class,
        ],
    ],
    'view_manager' => [
        'template_path_stack' => [
            dirname(__DIR__) . '/view',
        ],
    ]
];
