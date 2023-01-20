# Easy_Theme

### Short Description

This package provides moderen and user friendly components to easily start with laravel projects without spending time on creating theme

### Requirements

1. Laravel 9
2. Laravel breeze with inertia vue

### Installation

- create directory called package/easy in root project directory
- clone this git repo inside package/easy directory
- sail composer config repositories.theme'{"type": "path", "url": "./package/easy/theme"}'--file composer.json
- composer require
- Search for a package: easy/theme
- Enter the version constraint to require (or leave blank to use the latest version):
- Search for a package: (press enter without typeing anything)

### Usage

This package can be used as a boilarplate for admin theme

### Uninstall

1. sail composer remove easy/theme
2. clear resources directory
3. re-publish breeze static contents

### Authors

amit.biswas.webdev@gmail.com & priyankapal0995@gmail.com

\*\* use ./vendor/bin/sail insted of using only sail, if you did not created the alias
