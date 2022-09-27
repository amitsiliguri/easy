<?php
/**
 * Copyright © 2022. All rights reserved.
 * See COPYING.txt for license details.
 *
 * @author    AB & PP <amit.biswas.webdev@gmail.com & priyankapal0995@gmail.com>
 * @copyright 2022
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

 
namespace Easy\Theme\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

/**
 * @package Easy\Theme
 * @HandleInertiaRequests
 */
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param Request $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param Request $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'flash' => [
                'success' => function () use ($request) {
                    return $request->session()->get('success');
                },
                'error' => function () use ($request) {
                    return $request->session()->get('error');
                },
                'warning' => function () use ($request) {
                    return $request->session()->get('warning');
                },
                'info' => function () use ($request) {
                    return $request->session()->get('warning');
                }
            ],
            // 'menu' => config('menu'),
            'theme' => 'danger',
            'dark' => true
        ]);
    }
}
