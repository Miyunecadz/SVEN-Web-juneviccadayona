# Run docker-compose up with the default docker-compose.yml
up-dev: fix-permissions
	./check_env.sh
	docker-compose -f compose.dev.yml up -d --build


# Grant execute permissions to check_env.sh
fix-permissions:
	chmod +x check_env.sh