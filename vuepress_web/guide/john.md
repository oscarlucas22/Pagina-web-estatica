# John The Ripper

<font color="#00FF00">**Paso 0**</font> Instalación 

Para instalar John the Ripper ejecutaremos el siguiente comando

    apt install john

![image](../images/john/instalacion.png)

lo primero que deberemos de hacer es comprobar que funciona correctamente en nuestro sistema, para ello lanzaremos el siguiente comando:

    john --test

![image](../images/john/test.png)

<font color="#00FF00">**Paso 1**</font> Crackeo de contraseña de usuario en linux por fuerza bruta

Una vez instalada y testeada la herramienta podemos empezar por un caso real, por ejemplo, cargar directamente el archivo `/etc/shadow` y probar a descifrar contraseñas. Pero, para este caso de ejemplo, vamos a crear un fichero con la clave de un usuario muy simple para hacer de forma rápida esta prueba.

Para realizar la prueba vamos a crear un fichero de texto en el directorio que deseemos e incluiremos en el mismo el siguiente contenido:

   echo user:AZl.zWwxIh15Q > password.txt

![image](../images/john/cat.png)

Ahora ejecutaremos john sobre el fichero que acabamos de crear:

    sudo john password.txt

![image](../images/john/passwd.png)

<font color="#00FF00">**Paso 2**</font> Crackeo de contraseña de usuario en linux por ataque de diccionario

Crearemos un diccionario para realizar el ataque, en nuestro caso hemos hecho un diccionario muy simple que incluye el siguiente contenido:

    cat diccionario.list

![image](../images/john/diccionario.png)

Ahora ejecutaremos john de nuevo con la opción --wordlist para indicarle que utilice el diccionario que acabamos de crear, quedando el comando de la siguiente forma:

    john --wordlist=diccionario.lst password.txt 

Y al igual que en el anterior caso, pasado un tiempo nos encontrará la contraseña del fichero que podremos ver con el comando:

    john --show password.txt

![image](../images/john/passwd.png)

Y esto es todo, como hemos visto John es una herramienta muy potente y que puede resultar muy útil en según que casos.
