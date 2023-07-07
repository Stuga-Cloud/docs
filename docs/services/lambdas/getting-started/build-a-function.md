---
sidebar_position: 1
id: build-a-function
title: Build a function
---

## Prérequis

1. Docker installé sur votre machine


## Créer votre premier lambda en Node.js

### Créer votre projet ou repartez du projet d'exemple


#### Créer votre projet
```bash
mkdir mon-projet-lambda
cd mon-projet-lambda
npm init -y
```

- ensuite changez le type de votre projet dans le package.json vers module
```json
{
  "name": "project-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.4.0"
  }
}

```

#### Partez du starter d'exemple
```bash
git clone git@github.com:Stuga-Cloud/faas-node-starter.git
cd faas-node-starter
cd {in the starter folder that you choosed}
```

### Créer votre fonction
- Il est important de savoir que tous les arguments sont passés sous la forme d'un json stringifié donc il est utile de la parser pour pouvoir l'utiliser.
- Le retour doit contenir un statusCode et un body qui sera retourné à l'utilisateur. Le body sera le corps de la réponse et le statusCode le code de retour de la requête, ici une 200.
- veillez à bien retourné toujours ce format de retour même lors d'erreur il faudra les catch pour en retourner une sous cette forme.
- la fonction doit être exporté dans le fichier index.js

```js
export const handler = async (argsParam) => {
  const args = JSON.parse(argsParam);
  return JSON.stringify({
    statusCode: 200,
    body: {
      message: 'Hello World',
    },
  });
};
```


### Créer votre Dockerfile
- ici il est important tout soit copié dans le dossier /root
- vous pouvez modifier l'entrypoint de votre image ainsi que son CMD mais cela n'est pas conseillé, en effet nous l'utilisons pour lancer votre fonction
- vous devez obligatoirement repartir d'une des image server mis à votre disposition pour créer votre image
```dockerfile
FROM remymach/faas-node-16-server:1.0.0

COPY package*.json ./
RUN npm install
COPY index.js /root/index.js
```

| **Et voila votre fonction est prête à être déployée sur Stuga Cloud ! Ah non mince il va encore falloir build cette image.**

### Ce qu'on a à ce point
- package.json
```json
{
  "name": "my-first-lambda",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
- package-lock.json (généré par le npm i)

- index.js
```js
export const handler = async (argsParam) => {
  const args = JSON.parse(argsParam);
  return JSON.stringify({
    statusCode: 200,
    body: {
      message: 'Hello World',
    },
  });
};
```
- Dockerfile
```dockerfile
FROM remymach/faas-node-16-server:1.0.0

COPY package*.json ./
RUN npm install
COPY index.js /root/index.js
```


## Build your function to a container image
- Remarquez que vous pouvez utiliser notre lambda avec les architectures ARM et amd64 en développement, mais **en production, vous devez construire avec l'architecture amd64.**
- placez vous à la racine de votre fonction
- build your image
    - simple build
    ```bash
    docker build -t my-first-lambda .
    ```
    - complete build
    ```bash
    docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t my-first-lambda .
    ```
- poussez votre image vers un docker hub registry ou stugaCloud registry
```bash
docker tag my-first-lambda:latest registry-machavoine.fr/{namespaceCreated}/my-first-lambda:1.0.0
OR
docker tag my-first-lambda:latest {usernameDockerHub}/my-first-lambda:1.0.0

docker push registry-machavoine.fr/{namespaceCreated}/my-first-lambda:1.0.0
OR
docker push my-first-lambda:latest {usernameDockerHub}/my-first-lambda:1.0.0
```

## Conclusion
- Vous avez maintenant votre première fonction prête à être déployée sur Stuga Cloud et accessible via un registry docker.





