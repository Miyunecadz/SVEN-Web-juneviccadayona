#!/bin/bash

# Install composer dependencies && setup app
if [ ! -d "vendor" ] && [ -f "composer.json" ]; then #&& [ "$APP_ENV" == "production" ]; then
    composer config --global process-timeout 6000
    composer install
    composer dump-autoload


fi

php artisan key:generate
php artisan migrate
php artisan seed

# Run apache foreground
apachectl -D FOREGROUND
