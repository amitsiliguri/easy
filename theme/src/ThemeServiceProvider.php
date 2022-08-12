<?php
/**
 * Copyright © 2022. All rights reserved.
 * See COPYING.txt for license details.
 *
 * @author    CGI <info.de@cgi.com>
 * @copyright 2022
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

declare(strict_types=1);

namespace Easy\Theme;

use Illuminate\Support\ServiceProvider;
use Easy\Theme\Http\Middleware\HandleInertiaRequests;
use Illuminate\Contracts\Http\Kernel;

/**
 * @package Easy\Theme
 * @EcommerceServiceProvider
 */
class ThemeServiceProvider extends ServiceProvider
{

    /**
     * @return void
     */
    public function register(): void
    {
       
    }

    /**
     * @return void
     */
    public function boot(): void
    {
        $this->bootInertia();
        // $this->publishes([
        //     __DIR__.'/../stubs/resources/vue/js' => resource_path('js'),
        //     __DIR__.'/../stubs/resources/css' => resource_path('css'),
        //     __DIR__.'/config/menu.php' => config_path('menu.php'),
        // ], 'theme');
    }

    /**
     * @throws BindingResolutionException
     */
    protected function bootInertia(): void
    {
        $kernel = $this->app->make(Kernel::class);
        $kernel->appendMiddlewareToGroup('web', HandleInertiaRequests::class);
        $kernel->appendToMiddlewarePriority(HandleInertiaRequests::class);
    }
}
