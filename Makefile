all: install build deploy

.PHONY+=install
install:
	npm ci

.PHONY+=build
build: install
	npm run build

local: build
	npm run dev

# .PHONY+=deploy
# deploy: build
# 	aws s3 sync ./dist s3://etcd-saas-landing-page/ --acl public-read --follow-symlinks --delete