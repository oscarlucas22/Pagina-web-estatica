# Compilación de un programa en C utilizando un Makefile

Aqui dejo la url de la web de [Debian](https://packages.debian.org/bullseye/imagination) donde se encuentra la compilación del paquete imagination.


<font color="#FFFF00">**Paso 1**</font> Descarga del código fuente

Primero instalaremos dpkg-dev

    sudo apt install dpkg-dev

Despues instalaremos imagination con el comando `apt source`

    apt source imagination

![image](../images/ASO/1-ASO.png)

![image](../images/ASO/2-ASO.png)

<font color="#FFFF00">**Paso 2**</font> Instalación dependencias

Para instalar las dependencias utilizaremos el comando `apt build-dep`

    sudo apt build-dep imagination

<font color="#FFFF00">**Paso 3**</font> Compilación del paquete

Para poder compilar el paquete nos moveremos a la carpeta descomprimida

    cd imagination-3.6/

    ./configure

![image](../images/ASO/3-ASO.png)

![image](../images/ASO/4-ASO.png)

Y despues de esto ejecutaremos el comando `make`

    make

<font color="#FFFF00">**Paso 4**</font> Instalación del paquete

Una vez ya este compilado ejecutaremos:

    sudo make install

Y con esto ya tendriamos instalado el paquete

<font color="#FFFF00">**Paso 5**</font> Desinstalación del paquete

Para poder desinstalar el paquete debemos ejecutar:

    cd imagination-3.6/

    sudo make uninstall

Y con esto ya estaría desinstalado