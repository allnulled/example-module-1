# Minimal-CMS Core ModuleSet

## 1. Introduction

This project is the set of the **core modules** of the Minimal-CMS.

It provides the basic *set of modules* that the Minimal-CMS needs to work as expected.

This includes the next modules (listed in order of executing, as the `order.json` file indicates):

- **`cms.preparation.create-app`**: 

Instantiates the initial application.

- **`cms.preparation.dispatch-templates`**: 

Adds the `dispatchTemplate` method to the response object.

- **`cms.preparation.http-statuses`**: 

Adds all the HTTP statuses as methods to the response object.

- **`cms.preparation.log-requests`**: 

Adds a simple middleware that logs the requests in the console.

- **`cms.routing.cdn`**: 

Adds a (static) route (at /cdn) for the CDN resources to the application.

- **`cms.routing.chat`**: 

Adds a websocket-based route (at /chats) for the chats of the application.

- **`cms.routing.events`**: 

Adds a websocket-based route (at /events) for the events of the application.

- **`cms.routing.website`**: 

Executes all the applications.

- **`cms.routing.exception`**: 

Redirects the exceptions from the application.

- **`cms.deployment.deploy-server`**: 

Deploys the application as a service.

- **`cms.deployment.log-deployment-statistics`**: 

Shows by console the statistics of the deployment.

---

## 2. Installation
