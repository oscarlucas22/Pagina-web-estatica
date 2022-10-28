# MariaDB en Debian 11 Bullseye

Para conseguir una instalación correcta debemos cumplir los siguientes requisitos:

<input type="checkbox" name="vehicle" value="Bike"> Tener una máquina Debian 11 actualizada

<input type="checkbox" name="vehicle" value="Bike"> Tener un usuario con privilegios de sudo

<input type="checkbox" name="vehicle" value="Bike"> Tener acceso a internet

Antes de comenzar con la instalación actualizaremos nuestra máquina

    sudo apt update && sudo apt upgrade

Una vez completada la actualización del sistema, ejecuta el siguiente comando para instalr los paquetes necesarios

    sudo apt-get install software-properties-common dirmngr gnupg2 -y
---
    sudo apt-get install apt-transport-https wget curl -y

## Instalar MariaDB en Debian 11

Para comenzar con la instalación ejecuta el siguiente comando:

    sudo apt install mariadb-server -y

Para iniciar, detener y reiniciar el servidor de bases de datos MariaDB, utiliza los siguientes comandos:

Iniciar

    sudo systemctl start mariadb

Detener

    sudo systemctl stop mariadb

Reiniciar

    sudo systemctl restart mariadb

Para que MariaDB se inicie automáticamente al arrancar el sistema, ejecuta el siguiente comando:

    sudo systemctl enable mariadb

MariaDB debería estar en marcha en este momento. Puedes comprobar si se esta ejecutando, ejecutando el siguiente comando:

    sudo systemctl status mariadb

Ejemplo de salida:

![image](../images/ABD/1-mariadb.png)

`Ctrl + C` para salir del fichero

Y con esto ya tendriamos instalado MariaDB y para ejecutarlo, ejecutaremos el siguiente comando:

    sudo mysql

## Creación de un nuevo usuario

Los siguientes pasos que vas a ver se ejecutan dentro de MariaDB (cambia el usuario y la contraseña por los tuyos)

    CREATE USER 'lucas' IDENTIFIED BY 'admin';
---
    GRANT ALL ON *.* TO 'lucas'@'localhost' IDENTIFIED BY 'admin' WITH GRANT OPTION;
---
    FLUSH PRIVILEGES;

![image](../images/ABD/2-mariadb.png)

Y una vez ya creado el usuario salimos de MariaDB ejecutando `exit;`
Y para conectarnos a nuestro usuario ejecutaremos el siguiente comando:

    mysql -u lucas -p

¡Gracias!

