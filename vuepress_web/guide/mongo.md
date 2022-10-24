# Instalación de MongoDB en Debian 11 Bullseye

Para la instalación de MongoDB, el repositorio oficial de MongoDB está disponible para Debian 11 Bullseye, por lo que podemos usar el mismo.

1. Agregue el repositorio MongoDB en Debian 11

Como sabemos, los paquetes de MongoDB no están disponibles para instalar directamente desde el repositorio base de Debian 11, por lo que debemos agregar el oficial que ofrecen los desarrolladores de esta base de datos NoSQL.

    echo "deb http://repo.mongodb.org/apt/debian bullseye/mongodb-org/5.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

2. Integrar la clave GPG de MongoDB

Para asegurarnos de que los paquetes que recibiremos para instalar esta base de datos en nuestro Linux provengan de una fuente auténtica. Agregue la clave firmada GPG por los desarrolladores del servidor de base de datos.

    curl -sSL https://www.mongodb.org/static/pgp/server-5.0.asc  -o mongoserver.asc

Importamos *mongoserver.asc*

    gpg --no-default-keyring --keyring ./mongo_key_temp.gpg --import ./mongoserver.asc

Exportamos *mongoserver_key.gpg*

    gpg --no-default-keyring --keyring ./mongo_key_temp.gpg --export > ./mongoserver_key.gpg

Movemos *mongoserver_key.gpg* a *trusted.gpg.d*

    sudo mv mongoserver_key.gpg /etc/apt/trusted.gpg.d/

3. Ejecute la actualización del sistema

En su terminal de comando Debian 11 o 10, ejecute el comando de actualización del sistema para asegurarse de que todos los paquetes existentes estén actualizados.

    sudo apt update && sudo apt upgrade

4. Comando para instalar MongoDB en Debian 11 o 10

Eso es todo. Ya hemos configurado lo que necesitamos para instalar “herramientas de base de datos, mongosh, herramientas adicionales, mongos; servidor de base de datos y shell” en nuestro Debian 11 o 10 Linux.

Por lo tanto, simplemente ejecute un comando simple:

    sudo apt install mongodb-org

5. Iniciar y habilitar el servicio MongoDB

Una vez completada la instalación, habilitemos y también iniciemos el servicio del servidor de base de datos, para que no necesitemos ejecutarlo una y otra vez con el arranque del sistema.

    sudo systemctl enable --now mongod

Comprobamos con el comando *systemctl* si esta activo mongod

    sudo systemctl status mongod

![image]

6. Comprueba la versión instalada

Para confirmar qué versión está instalada exactamente en su sistema, ejecute:

    mongod --version

![image]

Para obtener la línea de comando de mongo, simplemente escriba:

    mongo

Desinstalar o Eliminar

Bueno, aquellos que ya no están interesados ​​en MongoDB y no lo necesitan, pueden eliminarlo usando el siguiente comando:

    sudo apt remove mongodb-org

¡Gracias!