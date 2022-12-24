# Migrar Centos 8 a Rocky Linux 8

![image](../images/ASO/rocky.png)

Para conseguir este fin se nos ofrece un script llamado **migrate2rocky.sh**. Este script se encargará de cambiar los repositorios del sistemas por los de Rocky Linux. Los paquetes se instalarán y actualizarán, para finalmente cambiar todo el sistema operativo.

<font color="#FFFF00">**Paso 1**</font> Actualizamos el sistema.

    sudo dnf -y upgrade

<font color="#FFFF00">**Paso 2**</font> Reiniciamos.

    sudo reboot 

<font color="#FFFF00">**Paso 3**</font> Actualizar el sistema.

    dnf update

<font color="#FFFF00">**Paso 4**</font> Descargar repositorio.

Una vez hecho esto nos iremos al repositorio donde se encuentra dicho script, en este caso en Github.
Podemos descargar los paquetes del repositorio con programas como wget.

    wget https://github.com/rocky-linux/rocky-tools/archive/refs/heads/main.zip

O bien, si solo deseamos descargar el script:

    wget https://raw.githubusercontent.com/rocky-linux/rocky-tools/main/migrate2rocky/migrate2rocky.sh

<font color="#FFFF00">**Paso 5**</font> Le asignamos permisos de ejecución.

    chmod +x migrate2rocky.sh

<font color="#FFFF00">**Paso 6**</font> Lo ejecutamos.

Con el parámetro **-r** indicamos que siga adelante e instale todo.

    ./migrate2rocky.sh -r

El proceso puede tardar un rato, según la capacidad del equipo y la conexión a Internet.

Después:

    sudo dnf distro-sync -y
---
    sudo reboot

<font color="#FFFF00">**Paso 7**</font> Comprobación.

    cat /etc/os-release

Podemos consultar ficheros como **/etc/os-release** o bien **/etc/redhat-release**, o lanzar el comando **hostnamectl**

    cat /etc/redhat-release
