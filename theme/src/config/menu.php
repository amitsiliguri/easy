<?php

return [
    'dashboard' => [
        'title' => 'Dashboard',
        'icon' => 'dashboard',
        'sort-order' => 0,
        'children' => []
    ],
    'catalog' => [
        'title' => 'Catalog',
        'icon' => 'catalog',
        'sort-order' => 10,
        'children' => [
            'categories' => [
                'title' => 'Categories',
                'sort-order' => 0,
                'children' => []
            ],
            'products' => [
                'title' => 'Products',
                'sort-order' => 10,
                'children' => []
            ],
            'inventory-source' => [
                'title' => 'Inventory Sources',
                'sort-order' => 20,
                'children' => []
            ],
        ]
    ],
    'customer' => [
        'title' => 'Customer',
        'icon' => 'customer',
        'sort-order' => 20,
        'children' => [
            'all-customer' => [
                'title' => 'All Customers',
                'sort-order' => 0,
                'children' => []
            ],
            'customer-groups' => [
                'title' => 'Customer groups',
                'sort-order' => 10,
                'children' => []
            ]
        ]
    ],
    'sales' => [
        'title' => 'Sales',
        'icon' => 'sales',
        'sort-order' => 30,
        'children' => [
            'orders' => [
                'title' => 'Orders',
                'sort-order' => 0,
                'children' => [
                    'new' => [
                        'title' => 'new',
                        'sort-order' => 10,
                        'children' => []
                    ],
                    'invoice' => [
                        'title' => 'invoice',
                        'sort-order' => 20,
                        'children' => []
                    ],
                    'shipment' => [
                        'title' => 'In Shipment',
                        'sort-order' => 30,
                        'children' => []
                    ],
                    'delivered' => [
                        'title' => 'Delivered',
                        'sort-order' => 40,
                        'children' => []
                    ]
                ]
            ],
            'return' => [
                'title' => 'Return',
                'sort-order' => 10,
                'children' => [
                    'request' => [
                        'title' => 'Request',
                        'sort-order' => 10,
                        'children' => []
                    ],
                    'reject' => [
                        'title' => 'Request rejected',
                        'sort-order' => 20,
                        'children' => []
                    ],
                    'accept' => [
                        'title' => 'Request accepted',
                        'sort-order' => 30,
                        'children' => []
                    ],
                    'refund' => [
                        'title' => 'Returned & Refund',
                        'sort-order' => 40,
                        'children' => []
                    ]
                ]
            ],
            'shipping-area' => [
                'title' => 'Shipping Areas',
                'sort-order' => 20,
                'children' => []
            ]
        ]
    ],
    'marketing' => [
        'title' => 'Marketing',
        'icon' => 'marketing',
        'sort-order' => 40,
        'children' => [
            'coupon' => [
                'title' => 'Coupon',
                'sort-order' => 0,
                'children' => []
            ],
            'category-discount' => [
                'title' => 'Discount on categories',
                'sort-order' => 10,
                'children' => []
            ]
        ]
    ],
];
