.PHONY: down
down: 
	docker-compose down

.PHONY: build
build:
	docker-compose build web

.PHONY: serve
serve: build
	docker-compose run --rm --service-ports web

.PHONY: test
test: build 
	docker-compose run --rm web npm test

.PHONY: storybook
storybook: 
	npm run storybook

