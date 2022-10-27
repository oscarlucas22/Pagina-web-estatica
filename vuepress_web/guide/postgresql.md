# PostgreSQL en Debian 11 Bullseye

## Instalación de PostgreSQL en Debian 11 Bullseye

<font color="#800080">**Paso 1**</font> Actualizar el sistema

    sudo apt update && sudo apt upgrade -y

<font color="#800080">**Paso 2**</font> Instalamos postgresql

    sudo apt install -y postgresql*

Esto tradará un poco

<font color="#800080">**Paso 3**</font> Comprobamos el estado del servicio

    systemctl status postgresql

En el caso que no estuviera iniciado lo iniciaremos

    systemctl start postgresql

<font color="#800080">**Paso 4**</font> Instalamos el cliente

    sudo apt install -y postgresql-client

## Creación de usuario

Para crear el usuario ingresaremos primero a postgres:

    sudo -u postgres psql
    
**Crearemos el usuario:**

    CREATE USER lucas PASSWORD 'TU_PASSWORD';

**Asignar permisos de super usuario a un usuario**

    ALTER ROLE lucas WITH SUPERUSER;

**Cambiar la contraseña de un usuario**

    ALTER ROLE lucas WITH PASSWORD 'NUEVO_PASSWORD';

**Crear una base de datos con un usuario específico como propietario**

    CREATE DATABASE lucas_db WITH OWNER lucas;

**Asignar todos los permisos a un usuario a una base de datos existente**

    GRANT ALL PRIVILEGES ON DATABASE lucas_db TO lucas;

## Acceso remoto

<font color="#800080">**Paso 1**</font> Acceso remoto

    sudo nano /etc/postgresql/13/main/postgresql.conf

    #listen_addresses = 'localhost'         # what IP address(es) to listen on;

<font color="#800080">**Paso 2**</font> Activamos contraseñas de red

    sudo nano /etc/postgresql/13/main/pg_hba.conf

Acceso desde red

    host    all             all             all                     md5

<font color="#800080">**Paso 3**</font> Reiniciamos el servicio

    sudo systemctl reload postgresql

<font color="#800080">**Paso 4**</font> Añadimos regla de firewall

    sudo ufw allow postgresql
    
    psql -h debian11.local.lan -U oscar

¡Gracias!