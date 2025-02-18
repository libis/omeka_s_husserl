<?php
return [
    'block_layouts' => [
        'invokables' => [
            'aboutBlock' => AboutBlock\Site\BlockLayout\AboutBlock::class,
        ],
    ],
    'view_manager' => [
        'template_path_stack' => [
            dirname(__DIR__) . '/view',
        ],
    ]
];
