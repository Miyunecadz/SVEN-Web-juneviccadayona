#!/bin/bash

# Install composer dependencies && setup app
if [ ! -d "vendor" ]; then
    composer config --global process-timeout 6000
    composer install
    composer dump-autoload
fi

# Generate application key
php artisan key:generate

# Migrate database
php artisan migrate

# Insert seeders data to database
php artisan db:seed

# Generate swagger documentation
php artisan l5-swagger:generate

# Run apache foreground
apachectl -D FOREGROUND
