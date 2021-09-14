all: install build deploy

.PHONY+=install
install:
	@bash -c 'npm ci'

.PHONY+=build
build: install
	@bash -c 'npm run build'

.PHONY+=dev
dev: install
	@bash -c 'npm start'
