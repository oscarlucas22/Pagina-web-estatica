# MongoDB en Debian 11 Bullseye

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

<font color="#800080">**Paso 7**</font> Verificamos la version

    mongo --eval 'db.runCommand({ connectionStatus: 1 })'

<font color="#800080">**Paso 8**</font> Configurar la seguridad de MongoDB

    sudo nano /etc/mongod.conf
---
    security:
        authorization: enabled

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

<font color="#800080">**Paso 4**</font> Nos conectamos

    mongo --port 27017 --authenticationDatabase "admin" -u "lucas" -p
---

    mongosh -u lucas

¡Gracias!