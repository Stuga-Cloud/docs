---
sidebar_position: 1
id: registry
title: Container Registry
---

## Container Registry
Container Registry is a service that allows you to store and manage your container images for deployment to Stuga Cloud.

## Prérequis
1. Vous devez avoir un projet de créer sur la plateforme Stuga Cloud

## Créer un namesapce
Un namespace est un espace de stockage pour vos images docker, il vous permet de les organiser et de les partager avec vos collaborateurs.

- aller dans le projet de votre choix
- clicker sur le bouton "New Service" si vous n'avez pas de registry dans votre projet
- clicker sur le service Container Registry
![Click Registry](/img/registry/click-registry.png)

### Remplissez le formulaire pour créer votre registry
- le nom de votre registry doit être unique et va permettre de créer l'url de votre registry
- Il peut être public ou privé, si il est privé vous devrez vous authentifier pour pouvoir pull ou push des images
![Create Registry](/img/registry/create-registry.jpeg)

### Une fois créer il vous faudra init votre profil si vous n'avez encore jamais créer de registry
- cliquer sur la tab profile pour vous rendre sur votre profil et initialiser votre mot de passe
![Click Profile](/img/registry/create-profile.jpeg)
- félicitation une fois créer vous pouvez initialiser l'accès au registre

### Initialiser l'accès au registry
- revenez sur dashboard et cliquez sur le registry que vous venez de créer
- cliquez sur le bouton "Access" puis Create It
![Init Access](/img/registry/init-access.jpeg)
- vous pouvez maintenant pull et push des images sur votre registry, des commandes sont là pour vous montrer comment faire
![After Init Access](/img/registry/after-init-access.jpeg)

### Différence avec registre privé
- si vous avez un registre privé vous devrez vous authentifier pour pouvoir pull ou push des images, l'access une fois créer comme au dessus vous permettra de vous authentifier
- vous utiliserez le password créer dans la partie Profile, vous pouvez le modifier à tout moment dans cette même partie profile
![Private Registry Access](/img/registry/access-private-registry.jpeg)


## Push une image sur votre registry
- vous pouvez maintenant vous rendre sur la partie access de votre registry pour voir comment push une image
- une fois les images push elles seront accessible sur le dahsboard de votre registry et vous pourrez les utiliser par exemple pour vos lambdas ou containers
![Dashboard](/img/registry/dashboard.png)
- il vous sera aussi possible de voir des détails de votre registre dans la partie Settings
![Detail registry](/img/registry/registry-details.jpeg)


