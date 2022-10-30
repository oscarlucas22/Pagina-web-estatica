# MongoDB en Debian 11 Bullseye

![image](../images/ABD/mongodb.png)

## Instalación de MongoDB en Debian 11 Bullseye

<font color="#800080">**Paso 1**</font> Instalar paquetes requeridos

    sudo apt install dirmngr gnupg apt-transport-https software-properties-common ca-certificates curl -y

<font color="#800080">**Paso 2**</font> Importar repositorio de MongoDB

    sudo wget -O- https://www.mongodb.org/static/pgp/server-5.0.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mongodb.gpg

<font color="#800080">**Paso 3**</font> Agregamos el repositorio

    echo 'deb [signed-by=/usr/share/keyrings/mongodb.gpg] http://repo.mongodb.org/apt/debian buster/mongodb-org/5.0 main' | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

<font color="#800080">**Paso 4**</font> Actualizamos

    sudo apt-get update

<font color="#800080">**Paso 5**</font> Instalar MongoDB 5.0

    sudo apt install mongodb-org -y

<font color="#800080">**Paso 6**</font> Activamos el servicio de mongodb

    sudo systemctl enable mongod --now

<font color="#800080">**Paso 7**</font> Verificamos la versión

    mongo --eval 'db.runCommand({ connectionStatus: 1 })'

![image](../images/ABD/1-mongo.png)

<font color="#800080">**Paso 8**</font> Configurar la seguridad de MongoDB

    sudo nano /etc/mongod.conf
---
    security:
        authorization: enabled

![image](../images/ABD/2-mongo.png)

<font color="#800080">**Paso 9**</font> Reiniciamos servicio

    sudo systemctl restart mongod

## Creación de usuario

<font color="#800080">**Paso 1**</font> Crear usuario administrador en MongoDB

    mongo

<font color="#800080">**Paso 2**</font> Nos conectamos como administrador

    use admin

<font color="#800080">**Paso 3**</font> Creamos usuario

    db.createUser(
        {
            user: "lucas", 
            pwd: "admin", 
            roles: [ { role: "root", db: "admin" } ]
        }
    )

![image](../images/ABD/3-mongo.png)

<font color="#800080">**Paso 4**</font> Nos conectamos

    mongo --port 27017 --authenticationDatabase "admin" -u "lucas" -p
o también puedes probar con:

    mongosh -u lucas

## Creación de base de datos

**Iniciar MongoDB**

    mongo

**Crear y si ya esta creada usar base de datos**

    use 'NOMBRE_BD'

**Listar base de datos**

    show dbs

**Verificar la base de datos actual**

    db

**Eliminar base de datos**

Hacerlo dentro de la base de datos

    db.dropDatabase()

**Importar json en MongoDB**

Hacerlo fuera de mongo

    mongoimport --db NAME_BD --collection NAME_YOUR_COLLECTION --file 'ruta del json'

**Eliminar json de la base de datos**

Hacerlo dentro de la base de datos donde este el json

    db.NAME_COLLECTION.drop()

**Mostrar la colección**

    db.NAME_COLLECTION.find().pretty

## Acceso remoto

<font color="#800080">**Paso 1**</font> Editaremos el fichero `mongod.conf`

    sudo /etc/mongod.conf

Ahí editaremos donde pone `bindIp` escribiremos la ip del servidor, asi como se muestra en la imagen:

![image](../images/ABD/4-mongo.png)

<font color="#800080">**Paso 2**</font> Reiniciamos el servicio para que los cambios se guarden

    sudo service mongod restart

<font color="#800080">**Paso 3**</font> Nos iremos a la maquina cliente y nos conectaremos

    mongosh -u nombre-user -p password ip-server

![image](../images/ABD/5-mongo.png)

¡Gracias!