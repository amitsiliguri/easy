# easy
Laravel Package for admin 

## How to install

- Install and setup a fresh laravel 9
- Install and make laravel breeze with inertia view functional 
- Create a folder called package in root project directory
- Create a folder called easy inside package
- Add below code to your composer JSON 
    `` "repositories": {
        "theme": {
            "type": "path",
            "url": "./package/easy/theme"
        }
    }``

- Run command
  `` php artisan easy:theme ``

- publish static content
  `` artisan vendor:publish --tag=theme --force ``
- Check in browser
