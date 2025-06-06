#!/bin/sh

# Check if .env exists in the pet-booking-be directory
if [ ! -f pet-booking-be/.env ]; then
  echo ".env not found. Copying .env.example to .env in pet-booking-be..."
  cp pet-booking-be/.env.example pet-booking-be/.env
else
  echo ".env already exists in pet-booking-be."
fi

# Check if .env exists in the pet-booking-fe directory
if [ ! -f pet-booking-fe/.env ]; then
  echo ".env not found. Copying .env.example to .env in pet-booking-fe..."
  cp pet-booking-fe/.env.example pet-booking-fe/.env
else
  echo ".env already exists in pet-booking-fe."
fi