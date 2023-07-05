---
sidebar_position: 1
id: getting-started
title: Getting Started
---

## Project
You have to be part of a project to be able to create containers. If you are not part of a project, you can create one by clicking on the "Create new project" button in the top right corner of the page.
![Create project](/img/containers/create_project_button.jpeg)

# Create a Container service
Once you are part of a project, you can create a container service by clicking on the "New service" button in the top right corner of the page.
![Create service](/img/containers/create_new_service_button.jpeg)

Then select "Containers" in the list of services.
![Create service](/img/containers/create_container_service_in_list.png)

# Create a namespace
A namespace is a way to divide cluster resources between multiple users. You can create a namespace by clicking on the "New namespace" button in the top right corner of the page .
![Create namespace](/img/containers/create_new_namespace_button.jpeg)

OR you'll arrive directly on new namespace form after creating a container service.

![Create namespace](/img/containers/create_namespace_form.png)

If you want to join an existing namespace, you have to ask an namespace admin to add you to the namespace.

The namespace will be used to create a subdomain for your containers. For example, if you create a namespace called "my-namespace", your containers will be available at "my-container.my-namespace.hive.stuga-cloud.tech".
Also, it will create a namespace in the cluster, so each namespace have a unique name (even through multiple projects).

# Create a container
Once you have created a namespace, you can create a container by clicking on the "New container" button in the top right corner of the page.
![Create container](/img/containers/create_container_button.jpeg)

Then you'll arrive on the new container form.

## Name
The container name will be used to create a subdomain for your container. For example, if you create a container called "my-container", it will be available at "my-container.namespace.hive.stuga-cloud.tech".
![Create container](/img/containers/1_create_container_app_name.png)

## Image
The container image is the image that will be used to create your container. You can choose between a public image from docker or a private image from our private container registry.
It should respect the format `namespace/image_name:tag` when using our private container registry.
It should respect the format `repository/image_name:tag` when using a public image from docker.
![Create container](/img/containers/2_create_container_choose_image.png)

## Port
The port is the port that your application will listen to. Generally `SERVER_PORT` or `PORT` environment variable.
It can go from 1 to 65535.
![Create container](/img/containers/3_create_container_choose_port.png)

## Application Type
You can choose between two application types:
- **Single instance**: You can only have one instance of your application running at the same time.
- **Load balanced**: You can have multiple instances of your application running at the same time. You can also choose the number of instances you want to run.
![Create container](/img/containers/4_create_container_app_type.png)

## Container specifications
You can choose the specifications of your container. The specifications are the CPU and RAM allocated to your application. 
![Create container](/img/containers/5_create_container_specs.png)

## Scalability specifications
If you choose the "Load balanced" application type, you can choose the number of instances you want to run.
Also, you can choose between auto scaling or manual scaling. For both cases, you have to enter CPU and RAM thresholds. 
If one of CPU or RAM usage is above the defined threshold, a new instance will be created in auto scaling mode OR you'll have to create a new instance manually in manual scaling mode but we will notify you by email when one of the thresholds is reached.
![Create container](/img/containers/6_create_container_scalability_config.png)

## Environment variables
You can add environment variables to your container. Name respect the following regex: `^[a-zA-Z_][a-zA-Z0-9_]*$`. So it can't start with a number and can only contain letters, numbers and underscores.
![Create container](/img/containers/7_create_container_env_vars.jpeg)

## Secrets
You can add secrets to your container. Secrets are environment variables that are encrypted and can only be decrypted by your container. Name respect the following regex: `^[a-zA-Z_][a-zA-Z0-9_]*$`. So it can't start with a number and can only contain letters, numbers and underscores.
![Create container](/img/containers/8_create_container_secrets.jpeg)

## Admin email
Specify an email address to receive notifications about your container (scaling notifications specifically).
![Create container](/img/containers/9_create_container_admin.png)


# Deploy!
Now that you filled the form, you can click on the "Deploy" button to deploy your container. If you have any errors, you'll be notified by a red banner at the top of the page.

<!-- Warning -->
!! something
will be an advice or warning