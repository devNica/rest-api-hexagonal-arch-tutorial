Welcome to this video tutorial, 
in which we are implementing the hexagonal architecture pattern 
to a NodejS and Typescript application

The first thing we will do is initialize a project 
and install our own dependencies such as the development ones that we are going to use.

Then we are going to configure our project so that it can use the path aliases and the rules of the standard style guide are applied, in addition to adding our first scripts, to run the application and automatically correct programming style errors.

The next step will be to add our typescript configuration file and add our route aliases to it.

Now that the initial configurations are ready, we need to start creating the folder structure that respects the separation of concepts of the hexagonal architecture.

To understand this segmentation I would like to give you some concepts

let's talk about adapters:

In the hex architecture, adapters fall into two categories: primary adapters and secondary adapters.

Primary adapters are responsible for interacting with external components, such as user interfaces or external APIs. These adapters are responsible for receiving requests and sending responses to and from the application core.

Secondary adapters, on the other hand, are responsible for interacting with external components that are not directly related to the user interface. For example, they could be adapters for accessing a database, sending emails, or interacting with external services. These child adapters provide an interface that the application core uses to interact with these external components.

Now let's talk about ports:

In the hexagonal architecture, also known as ports and adapters architecture, ports are defined as interfaces that allow communication between the application core and external components. These ports define the operations that the application needs to perform without specifying how they are implemented. Adapters, on the other hand, are components that are responsible for implementing the operations defined by ports.

In the hexagonal architecture, ports are divided into input ports (input) and output ports (output) to establish a clear separation of responsibilities and achieve a more modular and flexible architecture.

Input ports are interfaces that allow external components to send requests or events to the application core. These ports define the operations that the application can receive and process. For example, an input port could be used to receive HTTP requests in a REST API, listen for events in a messaging system, or capture user interactions from the user interface.

On the other hand, output ports are interfaces that allow the application core to send information or events to external components. These ports define the operations that the application can use to send data or notifications. For example, an exit port could be used to send HTTP responses in a REST API, post events to a messaging system, or update the user interface with new data.

This separation between input and output ports allows the core of the application to be isolated from the implementation details of external components. Ports define an abstraction of the functionality that the application needs and allow different adapter implementations to interact with those external components. This makes it easy to replace or modify adapters without affecting the core of the application, providing flexibility and making it easier to test and maintain the system.

Now that you have understood it, we can start organizing our project. (please do not skip reading as it is mandatory to understand the basics of this application)

Until this part we have defined the core of the application and now we can concentrate on the following modules.
I would like to make a brief description of the folder structure of the project.

The "core" directory contains all the configurations at the port and adapter level of our app,
allowing us to interact with client applications through the interfaces defined for the requests.
This segmentation allows us to decouple our business logic from frameworks like express, so
that in case of making any change at the infrastructure level we would only modify those adapters
that are necessary, keeping safe our main logic.

In the adapters directory we have segmented these implementations, so that it can be assimilated in a better way
the conceptual charge. At the moment we only have primary adapters, because we have not yet started to perform any type of interaction with databases or messaging services.

The model directory belongs to the domain layer and is where our app is defined at the most abstract level.
Here the business logic and fundamental rules of the application are encapsulated, keeping it independent of the
implementation details.

The ports directory that belongs to the application layer, has been segmented to be able to separate the input and output ports, which if you have read the previous guide, would allow you to understand that the controllers are input ports to the application.
through HTTP requests and that the responses are output ports through which information is sent from the core of the application to the client apps.

In the next video we will be applying these same concepts to the user authentication module, so I hope
If this video has been to your liking, support me by liking and sharing, to reach more developers
who wish to know how to implement the Hexagonal Architecture in their projects.

That's all for now, see ya!