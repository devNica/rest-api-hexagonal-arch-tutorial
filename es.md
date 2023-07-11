Bienvenidos a este vídeo tutorial, 
en el que estamos implementando el patron de arquitectura hexagonal 
a una aplicacion de NodejS y Typescript

lo primero que haremos será inicializar un proyecto e 
instalar las dependencias propias como las de desarrollo que vamos a utilizar.

Luego vamos a configurar nuestro proyecto para que pueda utilizar los alias de rutas y que se apliquen las reglas de la guia de estilo de estandar, ademas de agregar nuestros primeras secuencias de comando, para ejecutar la aplicacion y corregir automaticamente los errores de estilo de programacion.

El siguiente paso sera agregar nuestro archivo de configuracion de typescript y agregar al mismo nuestros alias de rutas.

Ahora que estan listas las configuraciones iniciales, necesitamos empezar a crear la estructura de carpetas que respete la separacion de conceptos de la arquitectura hexagonal.

para entender esta segmentación me gustaría darte algunos conceptos

hablemos de los adaptadores:

En la arquitectura hexagonal, los adaptadores se dividen en dos categorías: adaptadores primarios y adaptadores secundarios.

Los adaptadores primarios son los encargados de interactuar con los componentes externos, como las interfaces de usuario o las APIs externas. Estos adaptadores son responsables de recibir las peticiones y enviar las respuestas desde y hacia el núcleo de la aplicación. 

Los adaptadores secundarios, por otro lado, son los encargados de interactuar con los componentes externos que no están directamente relacionados con la interfaz de usuario. Por ejemplo, podrían ser adaptadores para acceder a una base de datos, enviar correos electrónicos o interactuar con servicios externos. Estos adaptadores secundarios proporcionan una interfaz que el núcleo de la aplicación utiliza para interactuar con estos componentes externos.

ahora hablemos de los puertos:

En la arquitectura hexagonal, también conocida como arquitectura de puertos y adaptadores, los puertos se definen como interfaces que permiten la comunicación entre el núcleo de la aplicación y los componentes externos. Estos puertos definen las operaciones que la aplicación necesita realizar sin especificar cómo se implementan. Los adaptadores, por otro lado, son componentes que se encargan de implementar las operaciones definidas por los puertos.


En la arquitectura hexagonal, los puertos se dividen en puertos de entrada (input) y puertos de salida (output) para establecer una clara separación de responsabilidades y lograr una arquitectura más modular y flexible.

Los puertos de entrada (input ports) son interfaces que permiten que los componentes externos envíen solicitudes o eventos al núcleo de la aplicación. Estos puertos definen las operaciones que la aplicación puede recibir y procesar. Por ejemplo, un puerto de entrada podría ser utilizado para recibir peticiones HTTP en una REST API, escuchar eventos en un sistema de mensajería o capturar interacciones de usuario desde la interfaz de usuario.

Por otro lado, los puertos de salida (output ports) son interfaces que permiten que el núcleo de la aplicación envíe información o eventos a los componentes externos. Estos puertos definen las operaciones que la aplicación puede utilizar para enviar datos o notificaciones. Por ejemplo, un puerto de salida podría ser utilizado para enviar respuestas HTTP en una REST API, publicar eventos en un sistema de mensajería o actualizar la interfaz de usuario con nuevos datos.

Esta separación entre puertos de entrada y salida permite que el núcleo de la aplicación esté aislado de los detalles de implementación de los componentes externos. Los puertos definen una abstracción de la funcionalidad que la aplicación necesita y permiten diferentes implementaciones de adaptadores (adapters) para interactuar con esos componentes externos. Esto facilita el reemplazo o la modificación de los adaptadores sin afectar el núcleo de la aplicación, lo que brinda flexibilidad y facilita las pruebas y el mantenimiento del sistema.


Ahora que lo has entendido podemos empezar a organizar nuestro proyecto. (por favor no te saltes la lectura ya que es obligatoria para entender las bases de esta aplicacion)

Hasta esta parte hemos definido el core de la aplicacion y ahora ya podremos concentranos en los siguientes modulos.
Quisiera hacer una breve descripcion de la estructura de carpetas del proyecto.

El directorio "core" contiene todas las configuraciones a nivel de puertos y adaptadores de nuestra app,
permitiendonos interactuar con aplicaciones clientes a traves de las interfaces definidas para las peticiones.
Esta segmentacion nos permite desacoplar nuestra logica de negocios de los frameworks como express, por lo
que en caso de hacer algun cambio a nivel de infraestructura solo modificariamos aquellos adaptadores 
que sean necesarios, manteniendo a salvo nuestra logica principal.

En el directorio de los adaptadores hemos segmentado estas implementaciones, de modo que se puede asimilar de mejor forma
la carga conceptual. De momento solo tenemos adaptadores primarios, porque aun no hemos empezado a realizar ningun tipo de interaccion con bases de datos o servicios de mensajeria. 

El directorio de modelos pertenece a la capa de dominio y es donde se define al nivel mas abstracto nuestra app.
Aca se encapsula la logica de negocio y reglas fundamentales de la aplicacion, manteniendola independiente de los 
detalles de implementacion.

El directorio de puertos que pertenece a la capa de aplicacion, se ha segmentado para poder separar los puertos de entrada y salida, lo cual si ha leido la guia previa, le permitiria entender que los controladores son puertos de entrada a la aplicacion
por medio de las peticiones HTTP y que las respuestas son puertos de salida por medio de la cual se envia informacion desde el nucleo de la aplicacion hacia las apps clientes.

En el siguiente video estaremos aplicando estos mismos conceptos al modulo de autenticacion de usuarios, por lo que espero
que si este video ha sido de su agrado me apoye dando like y compartiendo, para llegar a mas desarrolladores 
que deseen conocer como implementar la Arquitectura Hexagonal en sus proyectos.

Es todo por el momento, saludos!

