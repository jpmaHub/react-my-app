.PHONY: down
down: 
	docker-compose down

.PHONY: build
build:
	docker-compose build web

.PHONY: serve
serve: down build
	docker-compose up

.PHONY: test
test: down build 
	docker-compose run --rm web npm test

.PHONY: storybook
storybook: 
	docker-compose run --rm -p 9009:9009 web npm run storybook


