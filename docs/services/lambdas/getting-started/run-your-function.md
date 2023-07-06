---
sidebar_position: 1
id: run-your-function
title: Run your function
---

## Prérequis

1. Avoir au minimun une fonction préalablement build qui respecte les principes la documentation [Build a function](/docs/docs/services/lambdas/getting-started/build-a-function)
2. Cette fonction doit-être disponible sur le registry docker de façon public ou alors dans le registry stugacloud dans le même projet que votre lambda.
3. Avoir un projet de créer sur la plateforme Stuga Cloud

## Init your function

- aller dans le projet de votre choix
![Go project](/img/lambda/click-project.png)

- cliquer sur le bouton "New Service"
![Create Service](/img/lambda/click-service.jpeg)

- cliquer sur le service Lambda
![Create Lambda Service](/img/lambda/click-lambda.png)

- cliquer sur le service Lambda
![Create Lambda Service](/img/lambda/click-lambda.png)

## Remplissez le formulaire pour déployer votre fonction

### Name

| Du name dépendra l'url de votre fonction

![Create Lambda Service](/img/lambda/url-access-lambda.png)

### Image
| Choisissez de quel registry vous voulez pull votre image
- Le registry docker hub et votre image sera par exemple stugacloud/faas-example-simple:1.0.0
- Le registry stugacloud et votre image sera par exemple registry.machavoine.fr/{namesapce}/faas-example-simple:1.0.0
![Fill image](/img/lambda/registry-lambda.jpeg)

### Confidentiality
| Choisissez si vous voulez que votre fonction soit public ou privé, si elle est privé elle ne sera accessible que avec une api key sinon elle sera accessible par tous. A savoir que votre lambda possède un rate limit de 50 requête maximum toutes les 10 secondes.

![Fill image](/img/lambda/lambda-visibility.png)

### Lambda Specification
| Choisissez le cpu alloué à votre lambda, sa ram ainsi que le timeout maximum de votre lambda. Si votre lambda dépasse le timeout elle sera tué et un code 400 sera retourné à l'utilisateur.

![Fill image](/img/lambda/lambda-spec.png)

### Lambda Scalabilité
| Choisissez les seuils minimum ou maximum de votre lambda, si vous choisissez un seuil minimum de 1 alors vous aurez toujours minimum un worker de disponible. Si le max est à 2 alors vous ne pourrez pas avoir plus de 10 workers pour ce lambda en même temps.

![Fill image](/img/lambda/lambda-scala.jpeg)