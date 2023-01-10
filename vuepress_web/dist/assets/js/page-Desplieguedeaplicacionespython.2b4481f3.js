(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{471:function(a,e,o){a.exports=o.p+"assets/img/1-1_django.54b76f31.png"},472:function(a,e,o){a.exports=o.p+"assets/img/1-2_django.0179cd24.png"},473:function(a,e,o){a.exports=o.p+"assets/img/1-3_django.dd207a6d.png"},474:function(a,e,o){a.exports=o.p+"assets/img/1-4_django.0970faff.png"},475:function(a,e,o){a.exports=o.p+"assets/img/1-5_django.d3a6f766.png"},476:function(a,e,o){a.exports=o.p+"assets/img/1-6_django.67ae904a.png"},477:function(a,e,o){a.exports=o.p+"assets/img/1-7_django.52b13046.png"},478:function(a,e,o){a.exports=o.p+"assets/img/1-8_django.eccbc47f.png"},479:function(a,e,o){a.exports=o.p+"assets/img/1-9_django.50d8c064.png"},480:function(a,e,o){a.exports=o.p+"assets/img/1-10_django.96e3b1c6.png"},481:function(a,e,o){a.exports=o.p+"assets/img/1-11_django.96dd264f.png"},482:function(a,e,o){a.exports=o.p+"assets/img/1-12_django.d770c9e1.png"},483:function(a,e,o){a.exports=o.p+"assets/img/1-13_django.3bb2a9bb.png"},484:function(a,e,o){a.exports=o.p+"assets/img/1-14_django.7623a970.png"},485:function(a,e,o){a.exports=o.p+"assets/img/1-15_django.4a6047a4.png"},596:function(a,e,o){"use strict";o.r(e);var s=o(1),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"despliegue-de-aplicaciones-python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#despliegue-de-aplicaciones-python"}},[a._v("#")]),a._v(" Despliegue de aplicaciones python")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://fp.josedomingo.org/iaw2223/4_python/practica.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Página del ejercicio."),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"tarea-1-entorno-de-desarrollo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tarea-1-entorno-de-desarrollo"}},[a._v("#")]),a._v(" Tarea 1: Entorno de desarrollo")]),a._v(" "),e("p",[e("font",{attrs:{color:"#FFA500"}},[e("strong",[a._v("Paso 1")])]),a._v(" "),e("a",{attrs:{href:"https://github.com/josedom24/django_tutorial",target:"_blank",rel:"noopener noreferrer"}},[a._v("Clonar el repositorio de GitHub."),e("OutboundLink")],1)],1),a._v(" "),e("p",[a._v("Para la clonación tenemos a nuestra disposición 3 protocolos diferentes de los que podemos hacer uso. En mi caso voy a utilizar el protocolo SSH, ya que tengo introducida mi clave pública en mi cuenta de GitHub. Cuando hayamos obtenido la URI de descarga, se la pasaremos a "),e("code",[a._v("git clone")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("git clone <<URL de descarga>>\n")])])]),e("p",[a._v("Y una vez hecho esto el repositorio de nombre django_tutorial ha sido correctamente clonado en nuestra máquina local y podremos empezar a hacer uso del mismo.")]),a._v(" "),e("p",[e("font",{attrs:{color:"#FFA500"}},[e("strong",[a._v("Paso 2")])]),a._v(" Crear un entorno virtual de Python.")],1),a._v(" "),e("p",[a._v("Instalaremos los paquetes necesarios para que la aplicación funcione. Para la correspondiente creación de un entorno virtual, debemos instalar previamente el paquete necesario (python3-venv), ejecutando para ello el comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sudo apt install python3-venv\n")])])]),e("p",[a._v("Podemos crear este entorno en una carpeta a parte. Ejecutaremos el entorno con el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("python3 -m venv <<Nombre del entorno>>\n")])])]),e("p",[a._v("Una vez creado, tendremos que iniciarlo haciendo uso de source con el binario activate que se encuentra contenido en el directorio bin/:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("source <<Nombre del entorno>>/bin/activate\n")])])]),e("p",[a._v("Y hecho esto nuestro entorno habrá sido habilitado.")]),a._v(" "),e("p",[e("font",{attrs:{color:"#FFA500"}},[e("strong",[a._v("Paso 3")])]),a._v(" Instalar paquetes necesarios para la aplicación.")],1),a._v(" "),e("p",[a._v("Estos paquetes lo entontraremos en el fichero "),e("code",[a._v("requirements.txt")]),a._v(" que se entre los ficheros que hemos clonado del GitHub")]),a._v(" "),e("p",[e("img",{attrs:{src:o(471),alt:"image"}})]),a._v(" "),e("p",[a._v("Nos desplazaremos hacia el con el comando "),e("code",[a._v("cd")]),a._v(" e instalaremos los paquetes que se encuentan en el con el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("pip install -r requirements.txt\n")])])]),e("p",[a._v("Para demostrarlo, vamos a leer el contenido del fichero settings.py existente en el subdirectorio django_tutorial/ previamente mencionado, para así visualizar la sección referente al uso de la base de datos, haciendo para ello uso del comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("cat django_tutorial/settings.py\n")])])]),e("p",[a._v("Dentro del mismo, encontraremos una sección de nombre DATABASES, que por defecto tendrá la siguiente forma:")]),a._v(" "),e("p",[e("img",{attrs:{src:o(472),alt:"image"}})]),a._v(" "),e("p",[a._v("Como se puede apreciar, la base de datos es de tipo sqlite3, un tipo de base de datos muy pequeña, tan pequeña que se encuentra contenida en un fichero, que todavía no se encuentra generado. Para generarlo, tendremos que aplicar las migraciones:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("python3 manage.py migrate\n")])])]),e("p",[e("img",{attrs:{src:o(473),alt:"image"}})]),a._v(" "),e("p",[a._v("Para verificar que el fichero que contiene la base de datos sqlite3 ha sido correctamente generado, listaremos el contenido del directorio:")]),a._v(" "),e("p",[e("img",{attrs:{src:o(474),alt:"image"}})]),a._v(" "),e("p",[a._v("Efectivamente, un fichero de nombre db.sqlite3 ha sido generado, que contendrá todas las tablas necesarias.")]),a._v(" "),e("p",[a._v("La aplicación se encuentra ya instalada en su totalidad, de manera que vamos a proceder a crear un usuario administrador de dicho proyecto, que tendrá privilegios suficientes para acceder a la zona de administración, ejecutando para ello el comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("python3 manage.py createsuperuser\n")])])]),e("p",[e("img",{attrs:{src:o(475),alt:"image"}})]),a._v(" "),e("p",[a._v("Se nos ha solicitado un nombre de usuario para el mismo, un correo electrónico y una contraseña, así que una vez creado, vamos a proceder a arrancar el servidor web ligero que nos proporciona Django:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("python3 manage.py runserver\n")])])]),e("p",[a._v("Y una vez hecho esto ya prodremos acceder al servidor web, poniendo en el navegador "),e("code",[a._v("localhost:8000/admin")]),a._v(" para acceder a la zona de administración.")]),a._v(" "),e("p",[e("img",{attrs:{src:o(476),alt:"image"}})]),a._v(" "),e("p",[a._v("Una vez hayamos accedido a la zona de administración, se nos solicitarán los credenciales del usuario administrador que acabamos de generar, así que tras introducirlos, pulsaremos en "),e("strong",[a._v("Log in")]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:o(477),alt:"image"}})]),a._v(" "),e("p",[a._v("Y como podemos comprobar el acceso a la zona de administración ha funcionado correctamente.")]),a._v(" "),e("p",[a._v("Para comprobar el funcionamiento de esta última aplicación, vamos a añadir dos nuevas preguntas, pulsando para ello en "),e("strong",[a._v("+ Add")]),a._v(" en el apartado "),e("strong",[a._v("Questions")]),a._v(" de la sección "),e("strong",[a._v("polls")])]),a._v(" "),e("p",[a._v("En mi caso, he creado la pregunta “¿Cuál es tu color favorito?” con 4 posibles respuestas, indicando a su vez la fecha y hora de inicio de la encuesta. Cuando hayamos finalizado, pulsaremos en "),e("strong",[a._v("Save and add another")]),a._v(' para así añadir una segunda encuesta de prueba la cual dice "¿Qué marca de portátil prefieres?" con 3 posibles respuestas. Por último, pulsaremos en '),e("strong",[a._v("SAVE")]),a._v(" para añadirla y volver a la zona de administración::")]),a._v(" "),e("p",[e("img",{attrs:{src:o(478),alt:"image"}})]),a._v(" "),e("p",[e("img",{attrs:{src:o(479),alt:"image"}})]),a._v(" "),e("p",[a._v("Como se puede apreciar, las dos preguntas han sido correctamente generadas, así que accederemos tras ello a la ruta "),e("strong",[a._v("/polls")]),a._v(" para así hacer uso de dicha aplicación, en la que se mostrarán las encuestas existentes y nos permitirá votar entre las diferentes posibilidades:")]),a._v(" "),e("p",[e("img",{attrs:{src:o(480),alt:"image"}})]),a._v(" "),e("p",[a._v("Efectivamente, ambas encuestas han sido mostradas, de manera que accederemos a la primera de ellas para verificar que todo funciona como debería:")]),a._v(" "),e("p",[e("img",{attrs:{src:o(481),alt:"image"}})]),a._v(" "),e("p",[a._v("Y haremos uso de la votación:")]),a._v(" "),e("p",[e("img",{attrs:{src:o(482),alt:"image"}})]),a._v(" "),e("p",[a._v("Efectivamente, el voto ha sido correctamente registrado y los resultados actuales, mostrados.")]),a._v(" "),e("p",[a._v("Vamos a comprobar qué ha ocurrido de una forma más interna, volviendo a la terminal y utilizando un cliente sqlite3 que tenía instado con anterioridad, para así hacer uso de la base de datos existente. El comando a ejecutar sería:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("sqlite3 db.sqlite3\n")])])]),e("p",[e("img",{attrs:{src:o(483),alt:"image"}})]),a._v(" "),e("p",[a._v("Una vez dentro del cliente con la correspondiente base de datos abierta, vamos a ejecutar la instrucción necesaria para listar las tablas existentes en la misma:")]),a._v(" "),e("p",[e("img",{attrs:{src:o(484),alt:"image"}})]),a._v(" "),e("p",[a._v("En la salida de la instrucción se han mostrado todas las tablas resultantes de haber aplicado las correspondientes migraciones, siendo "),e("strong",[a._v("polls_question")]),a._v(" aquella en la que se almacenarán las dos preguntas que hemos creado, así como "),e("strong",[a._v("polls_choice")]),a._v(" aquella en la que se almacenarán las posibles respuestas y los votos realizados para cada una de ellas. Vamos a proceder a comprobar el contenido de ambas, ejecutando para ello las instrucciones:")]),a._v(" "),e("p",[e("img",{attrs:{src:o(485),alt:"image"}})]),a._v(" "),e("h2",{attrs:{id:"tarea-2-entorno-de-produccion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tarea-2-entorno-de-produccion"}},[a._v("#")]),a._v(" Tarea 2: Entorno de producción")])])}),[],!1,null,null,null);e.default=n.exports}}]);