Sean bienvenidos a la segunda parte de este tutorial de la arquitetcura hexagonal, 
implementada a una RESTAPI con NodeJS y Typescript.

En este video vamos avanzar con nuestro proyecto y vamos a crear 
nuestro primer modulo que contendra la logica para autenticacion 
de los usuarios. 

Aclaro que en esta parte aun no vamos a trabajar con bases de datos,
si no que el proposito es dejar la estrcutura base con la que se va a segmentar
toda la parte de registro de cuentas e inicio de sesion de usuarios,
para luego enforcarnos en las diferentes opciones disponibles
que nos permitan conectarnos a una base de datos relacional.

Si eres un buen observador te daras cuenta que aplicaremos
la misma separacion de conceptos que como lo hicimos con el Core de la aplicacion.
de forma que nuestro patron debe implementarse en cada pieza de codigo
de nuestro proyecto y esto nos permitira desacoplarnos de las implementaciones de infraestructura.

Tendremos basicamente los siguientes directorios:

adapters:  Donde tendremos las implementaciones de nuestro controladores y repositorios segun el caso

ports:     Aca definimos las interfaces que permiten que el core del modulo pueda interactuar con el 
           mundo exterior, por medio de eventos o solicitudes externas (requets) o internas 
           (eventos generados por el nucleo de la app)

models:    Donde encontraremos las definiciones de tipos de datos que seran utilizado luego
           por las interfaces o puertos.

usecases:  Aca vamos a definir los diferentes casos de uso que vamos a abordar en este modulo de autenticacion,
           es decir registro de usaurio, inicio de sesion, etc.
factories: Aca es donde nuestros controladores toman forma, agregando a cada uno solo aquellas
           piezas que requiere segun su definicion.


Routes:    Este directorio contendra todas las rutas definidas para este modulo.


Bien, con esto ya tenemos las bases de nuestro modulo implementadas
con la Arquitectura Hexagonal, hemos hecho una peticion a la ruta 
de registro de usaurios, la cual se ha procesado correctamente
devolviendonos el Id del usuario, que de momento lo estamos 
estableciendo en el caso de uso, pero lo ideal va ser cuando
tengamos conectado nuestro core con la base de datos, para 
que el repositorio se encargue de devolvernos esta informacion.

En el siguiente video, veremos como desacoplarnos del Framewoek de Express,
para que nuestras rutas no esten acopladas a implementaciones, sino
que podamos cambiar en cualquier momento que sea necesario de framework
o bibliotecas para manejar las peticiones al servidor.

Nos vemos en un siguiente video, saludes!