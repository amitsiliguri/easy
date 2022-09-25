<?php
/**
 * Copyright © 2022. All rights reserved.
 * See COPYING.txt for license details.
 *
 * @author    AB & PP <amit.biswas.webdev@gmail.com & priyankapal0995@gmail.com>
 * @copyright 2022
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

declare(strict_types=1);

namespace Easy\Theme;

use Illuminate\Support\ServiceProvider;
use Easy\Theme\Http\Middleware\HandleInertiaRequests;
use Illuminate\Contracts\Http\Kernel;
use Easy\Theme\Console\Commands\InstallTheme;

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
        if ($this->app->runningInConsole()) {
            $this->commands([
                InstallTheme::class
            ]);
            $this->publishes([
                __DIR__.'/../stubs/vue/resources/js' => resource_path('js'),
                __DIR__.'/../stubs/vue/resources/css' => resource_path('css'),
                __DIR__.'/../stubs/vue/resources/views' => resource_path('views'),
                __DIR__.'/../stubs/vue/tailwind.config.js' => base_path('tailwind.config.js')
            ], 'vue-theme');
            $this->publishes([
                __DIR__.'/../stubs/react/resources/js' => resource_path('js'),
                __DIR__.'/../stubs/react/resources/css' => resource_path('css'),
                __DIR__.'/../stubs/react/resources/views' => resource_path('views'),
                __DIR__.'/../stubs/react/tailwind.config.js' => base_path('tailwind.config.js')
            ], 'react-theme');
        }
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
