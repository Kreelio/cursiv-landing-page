all: install build deploy

.PHONY+=install
install:
	npm ci

.PHONY+=build
build: install
	npm run build

.PHONY+=dev
dev: install
	npm start
