---
sidebar_position: 1
id: debug-your-function
title: Debug your function
---

## Prérequis

1. Docker installé sur votre machine
2. Preferably a tool like Postman to test your functions (not required)

## Pull your function image
- for the example we are going to take an example image

```bash
docker pull stugacloud/faas-example-network:1.0.0
```

- this image as the code show take 1 parameter in json **"time"**, you can pass time from 1 to 10 and the function will do a request to httpbin.org with the delay you passed in parameter. The max is 10 seconds.
```js
import axios from "axios";

export const handler = async (event) => {
  const time = JSON.parse(event).time;
  await axios.get("https://httpbin.org/delay/" + time);

  return JSON.stringify({
    statusCode: 201,
    body: {
      message: "I wait " + time + " seconds and do a call to httpbin.org",
    },
  });
};
```

## Run your function
```bash
docker run -it --entrypoint /bin/bash  -p 8000:8000 stugacloud/faas-example-network:1.0.0
```

### Activate the http server in the image
```bash
/./usr/local/go/bin/go run /root/go-server/main.go
```


## Test your function

**| As close as possible to the production environment**

- Open Postman or any other tool to test your function

url : http://localhost:8000

method : POST

body : raw
```json
{
    "command": "/root/liserk-entrypoint.sh index.handler",
    "lambda_arg": {
        "time": 2
    }
}
```
- with curl
```bash
curl --location 'http://localhost:8000' \
--header 'Content-Type: application/json' \
--data '{
  "command": "/root/liserk-entrypoint.sh index.handler",
  "lambda_arg": {
    "time": 2
  }
}'
```

- you will see the return of the function in the output parameter and you will see the sysout in the sysout parameter
```json
{
    "output": "{\"statusCode\":200,\"body\":{\"message\":\"I wait 2 seconds and do a call to httpbin.org\"}}",
    "sysout": "/run-index.js /root/index.js handler {\"time\":2}"
}
```