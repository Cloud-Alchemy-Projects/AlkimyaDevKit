.DEFAULT_GOAL := help

.PHONY: up
up: 
	@docker-compose up -d --build
.PHONY: down
down: 
	@docker-compose down --remove-orphans
.PHONY: logs-server
logs-server: 
	@docker logs alkimyadevkit-server-1 -f
.PHONY: logs-client
logs-client: 
	@docker logs alkimyadevkit-client-1 -f
.PHONY: logs-mysql
logs-mysql: 
	@docker logs alkimyadevkit-mysql-1 -f

