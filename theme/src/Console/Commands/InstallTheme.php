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

namespace Easy\Theme\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

/**
 * @package Easy\Theme
 * @InstallTheme
 */
class InstallTheme extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'easy:theme {stack=vue : The development stack that should be installed (react,vue)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Publish frontend assets and view files from easy theme to laravel application.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Update the "package.json" file.
     *
     * @param callable $callback
     * @param bool $dev
     * @return void
     */
    protected static function updateNodePackages(callable $callback, bool $dev = true)
    {
        if (!file_exists(base_path('package.json'))) {
            return;
        }
        $configurationKey = $dev ? 'devDependencies' : 'dependencies';
        $packages = json_decode(file_get_contents(base_path('package.json')), true);
        $packages[$configurationKey] = $callback(
            array_key_exists($configurationKey, $packages) ? $packages[$configurationKey] : [],
            $configurationKey
        );
        ksort($packages[$configurationKey]);
        file_put_contents(
            base_path('package.json'),
            json_encode($packages, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . PHP_EOL
        );
    }

    /**
     * @return void
     */
    public function handle()
    {
        try {
            $this->installDependencies();
            $this->info('Project scaffolding installed successfully.');
            $this->comment('Please execute the "npm install && npm run dev" command to build your assets.');
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            $this->info('Something went wrong. Please check log file, fix and try again.');
        }
    }

    /**
     * @return void
     */
    public function installDependencies()
    {
        // NPM Packages...
        // 'chart.js' => '^3.7.1',
        // 'vue-chart-3' => '^3.1.4',
        // '@tinymce/tinymce-vue' => '^4.0.7',
        if ($this->argument('stack') === 'vue') {
            $this->updateNodePackages(function ($packages) {
                return [
                        '@mdi/font' => '^6.5.95',
                        'vuedraggable' => '^4.1.0',
                        'swiper' => '^8.0.7'
                    ] + $packages;
            });
        }
        $this->info('NPM packages gathered.');
    }
}