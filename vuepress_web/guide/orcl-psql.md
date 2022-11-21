# Interconexión Servidores

## Oracle - Oracle

## PostgreSQL - PostgreSQL

Aqui vamos a interconectar dos servidores Postgres. Yo tendre dos maquinas las cuales son postgres1(192.168.122.27) y postgres2(192.168.122.53)

<font color="#800080">**Paso 1**</font> Permitir acceso remoto

Para permitir el acceso remoto nos iremos al fichero postgresql.conf

    sudo nano /etc/postgresql/13/main/postgresql.conf

Donde editaremos las linea de `listen_addresses`. Y la dejaremos así:

    listen_addresses = '*'          # what IP address(es) to listen on;

Despues nos iremos al fichero pg_hba.conf

    sudo nano /etc/postgresql/13/main/pg_hba.conf

Y escribiremos al final de este fichero las siguientes lineas:

    host    all     all     0.0.0.0/0       md5
    host    all     all     ::/0    md5

Una vez hecho esto reiniriaremos el servicio postgresql

    sudo systemctl restart postgresql

**Este paso lo haremos en las dos maquinas**

<font color="#800080">**Paso 2**</font> Crearemos las bases de datos y sus respectivas tablas

**postgres1**

Primero entraremos al usuario postgres

    sudo su
---
    su postgres
---
    psql

Una vez dentro crearemos el usuario y la base de datos:

    postgres=# create user maquina1 with password 'root';
---
    postgres=# create database db1;
---
    postgres=# grant all privileges on database db1 to maquina1;
---
    postgres=# \q

Una vez ya creados el usuario y la base de datos entraremos en ella para crear las tablas:

    psql -h localhost -U maquina1 -W -d db1
---
    db1=> create table peliculas (
        NombrePelicula varchar (20),
        Genero varchar (20),
        Director varchar (20),
        AnoEstreno varchar (4),
        constraint PK_1 primary key (NombrePelicula)
    );
---
    db1=> INSERT INTO peliculas VALUES ('Dune','Ciencia-ficcion','Edwards','1984');
    INSERT INTO peliculas VALUES ('Los Idiotas','Drama','Von Trier','1999');
    INSERT INTO peliculas VALUES ('Kramer vs Kramer','Drama','Smith','1978');
    INSERT INTO peliculas VALUES ('Mision Imposible','Ciencia-ficcion','Johnson','1998');
    INSERT INTO peliculas VALUES ('Mi nombre es Joe','Drama','Loach','1995');
    INSERT INTO peliculas VALUES ('Rompiendo las olas','Drama','Von Trier','1997');
    INSERT INTO peliculas VALUES ('Los Otros','Suspense','Amenabar','2001');

![image](../images/orcl-psql/1-psql-psql.png)

**postgres2**

Ahora haremos lo mismo con la otra maquina

    sudo su
---
    su postgres
---
    psql

Una vez dentro crearemos el usuario y la base de datos:

    postgres=# create user maquina2 with password 'root';
---
    postgres=# create database db2;
---
    postgres=# grant all privileges on database db2 to maquina2;
---
    postgres=# \q

Una vez ya creados el usuario y la base de datos entraremos en ella para crear las tablas:

    psql -h localhost -U maquina2 -W -d db2
---
    db1=> create table socios (
        DNI varchar (10),
        Nombre varchar (20),
        Direccion varchar (20),
        constraint PK_2 primary key (DNI)
    );
---
    db1=> INSERT INTO socios VALUES ('111-A','David','Sevilla Este');
    INSERT INTO socios VALUES ('222-B','Mariano','Los Remedios');
    INSERT INTO socios VALUES ('333-C','Raul','Triana');
    INSERT INTO socios VALUES ('444-D','Rocio','La Oliva');
    INSERT INTO socios VALUES ('555-E','Marilo','Triana');
    INSERT INTO socios VALUES ('666-F','Benjamin','Montequinto');
    INSERT INTO socios VALUES ('777-G','Carlos','Los Remedios');
    INSERT INTO socios VALUES ('888-H','Manolo','Montequinto');

![image](../images/orcl-psql/2-psql-psql.png)

<font color="#800080">**Paso 3**</font> Interconexiones

**postgres1**

Primero entraremos en la base de datos para crear la extension del link. Esto lo haremos en el usuario postgres

    psql -d db1
---
    db1=# create extension dblink;
---
    db1=# \q

![image](../images/orcl-psql/3-psql-psql.png)

    psql -h localhost -U maquina1 -W -d db1
---
    db1=> select * from dblink('dbname=db2 host=192.168.122.53 user=maquina2 password=root', 'select * from socios') as socios (dni varchar, nombre varchar, direccion varchar);

![image](../images/orcl-psql/4-psql-psql.png)

**postgres2**

Repitiremos loas pasos pero ahora en la otra maquina

    psql -d db2
---
    db1=# create extension dblink;
---
    db1=# \q

![image](../images/orcl-psql/5-psql-psql.png)

    psql -h localhost -U maquina2 -W -d db2
---
    db2=> select * from dblink('dbname=db1 host=192.168.122.27 user=maquina1 password=root', 'select * from peliculas') as peliculas (nombrepelicula varchar, genero varchar, director varchar, anoestreno varchar);

![image](../images/orcl-psql/6-psql-psql.png)

Como podemos comprobar ya podemos realizar interconexiones entre ambas maquinas.

## Oracle - PostgreSQl

## PostgreSQL - Oracle

<font color="#800080">**Paso 1**</font> Instalamos la paquetería requerida

    sudo apt install libaio1 postgresql-server-dev-all build-essential git

<font color="#800080">**Paso 2**</font> Descargamos los paquetes clientes de Oracle

Accedemos al usuario de postgres y descargamos los paquetes del sitio oficial de Oracle:

    su - postgres
---
    wget https://download.oracle.com/otn_software/linux/instantclient/211000/instantclient-basic-linux.x64-21.1.0.0.0.zip
---
    wget https://download.oracle.com/otn_software/linux/instantclient/211000/instantclient-sdk-linux.x64-21.1.0.0.0.zip
---
    wget https://download.oracle.com/otn_software/linux/instantclient/211000/instantclient-sqlplus-linux.x64-21.1.0.0.0.zip

Descomprimiremos los archivos con unzip:

    unzip instantclient-basic-linux.x64-21.1.0.0.0.zip
---
    unzip instantclient-sqlplus-linux.x64-21.1.0.0.0.zip
---
    unzip instantclient-sdk-linux.x64-21.1.0.0.0.zip

Despues de descomprimir los 3 archivos se nos creará una carpeta llamada `instantclient_21_1`.

<font color="#800080">**Paso 3**</font> Estableceremos las nuevas variables de entorno

    export ORACLE_HOME=/var/lib/postgresql/instantclient_21_1
---
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$ORACLE_HOME
---
    export PATH=$PATH:$ORACLE_HOME

Para comprobar si hemos puesto correctamente las variables utilizaremos el comando wich que nos deberá devolver la ruta.

    cd /var/lib/
---
    which sqlplusç

![image](../images/orcl-psql/1-psql-orcl.png)

Y una vez hecho esto ya nos podremos conectar:

![image]

¡Gracias!