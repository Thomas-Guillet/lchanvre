# Ré-initialisation de la BDD avec les fixtures de base
dbreset:
	symfony console do:da:dr --if-exists --force
	symfony console do:da:cr --if-not-exists
	symfony console do:mi:mi -n
	symfony console sylius:install:database -s lchanvre -n

# Installation des assets Symfony / Sylius
external_assets_install:
	symfony console assets:install --symlink
	symfony console sylius:theme:assets:install --symlink
	symfony php -d memory_limit=-1 bin/console ca:cl

# Installation initiale du projet (à faire une fois au git clone)
install:
	symfony composer install --no-scripts
	yarn install
	yarn encore dev
	make dbreset
	make external_assets_install

# Mise à jour du projet (à faire régulièrement)
update:
	symfony composer install --no-scripts
	symfony console do:mi:mi -n
	yarn install
	yarn encore dev
	make external_assets_install
