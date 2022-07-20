.DEFAULT_GOAL := help

# See all the available commands.
.PHONY: help
help: 
	@echo "Commands for use: "
	@echo "-- make up "
	@echo "-- make down"
	@echo "-- make logs-server"
	@echo "-- make logs-client"
	@echo "-- make logs-mysql"
	@echo "-- make restart-server"
	@echo "-- make bash-server"
	@echo "-- make bash-client"
	@echo "-- make mysql-db"
	@echo "-- make rebuild"
	@echo "-- make rebuild-server"


# Run all the containers.
.PHONY: up
up: 
	@docker-compose up -d --build

# Shoot down the containers.
.PHONY: down
down: 
	@docker-compose down --remove-orphans

# Rebuild all containers
.PHONY: rebuild
rebuild: 
	@docker-compose build --no-cache

# Rebuild server container
.PHONY: rebuild-server
rebuild-server: 
	@docker-compose build server --no-cache

# Open the log of the DevKit-Back container.
.PHONY: logs-server
logs-server: 
	@docker logs DevKit-Back -f

# Open the log of the DevKit-Front container.
.PHONY: logs-client
logs-client: 
	@docker logs DevKit-Front -f

# Open the log of the DevKit-DB container.
.PHONY: logs-mysql
logs-mysql: 
	@docker logs DevKit-DB -f

# Restart the DevKit-Back container.
.PHONY: restart-server
restart-server: 
	@docker restart DevKit-Back

# Open a bash terminal in the DevKit-Back container.
.PHONY: bash-server
bash-server: 
	@docker exec -it DevKit-Back bash

# Open a bash terminal in the DevKit-Front container.
.PHONY: bash-client
bash-client: 
	@docker exec -it DevKit-Front bash

# Open a mysql terminal in the DevKit-DB container.
.PHONY: mysql-db
mysql-db: 
	@docker exec -it DevKit-DB mysql -u root -p

