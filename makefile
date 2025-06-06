# Grant execute permissions to check_env.sh
fix-permissions:
	chmod +x check_env.sh

# Start the development environment
# - Ensures file permissions are correct
# - Checks required environment variables
# - Builds and runs the development containers in detached mode
up-dev: fix-permissions
	./check_env.sh
	docker-compose -f compose.dev.yml up -d --build

# Stop and remove the development environment containers
down-dev:
	docker-compose -f compose.dev.yml down
