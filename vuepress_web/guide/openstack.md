# Práctica: Escenario en OpenStack

Aquí vamos ha hacer la siguiente [practica](https://fp.josedomingo.org/sri2223/4_iaas/practica.html).

### Instalación de las instancias de OpenStack.

---

<font color="#0000FF">**1. Crea una red interna que se llame Red DMZ de tu_usuario, con las siguientes características:**</font>

    openstack network create Red-DMZ-de-olucas
---
    openstack subnet create --network Red-DMZ-de-olucas --subnet-range 172.16.0.0/16 subnet-DMZ --dhcp --dns-nameserver 192.168.202.2 --gateway 172.16.0.1

<font color="#0000FF">**2. Las dos instancias que vamos a crear se van a configurar con cloud-init de la siguiente manera:**</font>

    #cloud-config
    #Actualización de paquetes
    package_update: true
    package_upgrade: true
    #Configuración de hostname
    preserve_hostname: false
    fqdn: alfa.olucas.gonzalonazareno.org
    hostname: alfa
    # Crear usuarios con clave pública ssh
    users:
    - name: profesor
    sudo: ALL=(ALL) NOPASSWD:ALL
    shell: /bin/bash
    passwd: profesor
    ssh_authorized_keys:
        - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCmjoVIoZCx4QFXvljqozXGqxxlSvO7V2aizqyPgMfGqnyl0J9YXo6zrcWYwyWMnMdRdwYZgHqfiiFCUn2QDm6ZuzC4Lcx0K3ZwO2lgL4XaATykVLneHR1ib6RNroFcClN69cxWsdwQW6dpjpiBDXf8m6/qxVP3EHwUTsP8XaOV7WkcCAqfYAMvpWLISqYme6e+6ZGJUIPkDTxavu5JTagDLwY+py1WB53eoDWsG99gmvyit2O1Eo+jRWN+mgRHIxJTrFtLS6o4iWeshPZ6LvCZ/Pum12Oj4B4bjGSHzrKjHZgTwhVJ/LDq3v71/PP4zaI3gVB9ZalemSxqomgbTlnT jose@debian
        - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCfk9mRtOHM3T1KpmGi0KiN2uAM6CDXM3WFcm1wkzKXx7RaLtf9pX+KCuVqHdy/N/9d9wtH7iSmLFX/4gQKQVG00jHiGf3ABufWeIpjmHtT1WaI0+vV47fofEIjDDfSZPlI3p5/c7tefHsIAK6GbQn31yepAcFYy9ZfqAh8H/Y5eLpf3egPZn9Czsvx+lm0I8Q+e/HSayRaiAPUukF57N2nnw7yhPZCHSZJqFbXyK3fVQ/UQVBeNS2ayp0my8X9sIBZnNkcYHFLIWBqJYdnu1ZFhnbu3yy94jmJdmELy3+54hqiwFEfjZAjUYSl8eGPixOfdTgc8ObbHbkHyIrQ91Kz rafa@eco
    - name: oscar
    shell: /bin/bash
    passwd: usuario
    ssh_authorized_keys:
        - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDTcmixc+3Zq1eSaRgb7Kvv5Efy0MZwx7wR6NWdHqi6+oLTPzNxr7IztKo9JvSMWsGzK5xR8mg8V/lPqdYO0GY5vrodpq6UdHojve0g2YaIeex7pcL2G8AEsFbysvUvwCXW4URdu1ZQAOylRPakPi0bIRsbVkRi3TjeeTcUUo/pxwI9VV6SHm94XpwZd/JUvLa8fH5USNTseN/isa4kIgHTxsIrUan2uuIr1BEYgLyrohZrvgVpmv5B/TDupxVo6lSdGQbJFwMp+/Krqrid4kvuBrDKPY5EnYyu5/XNFqRqfhoF4jk4W3Nzb8K/bF+DTelh8kZgouQQJP5RY9v1MRTqS8dq0751rVibD6KouFKBm9gxZ9BnTRFaN8hjZi60z3cyTjEl5bmD7KP5wT0i9E2dvn1xN83j7FM/ryLJ8I2GHIimNgvctQQdWddva0kVNjocteq32OtLOgh52qUzv9gw13WKVbedpoNV1cve/oFK7tH1WwG6nFf64V9Rnh1Inrs= oscar@debian
    chpasswd:
    list: |
        root:root
    expire: False

<font color="#0000FF">**3. Creación de la máquina1 (alfa):**</font>

**Creamos volumen**

    openstack volume create --bootable --size 30 --image "Debian 11 Bullseye" alfa_debian

**Creación maquina Alfa**

    openstack server create --flavor vol.medium --volume alfa_debian --security-group default --key-name oscar_clave --network "red de oscar.lucas" --user-data "cloud-init-alfa.yaml" \alfa

**Le asignamos una Ip flotante.**

    openstack floating ip create ext-net
---
    openstack server add floating ip alfa 172.22...

<font color="#0000FF">**4. Configuración de la máquina1 (alfa):**</font>

**Creamos puerto**

    openstack port create --network Red-DMZ-de-olucas --fixed-ip ip-address=172.16.0.1 port_alfa

**Asociamos puerto**

    openstack server add port alfa port_alfa

**Quitamos grupo de seguridad**

    openstack port list --server alfa
---
    openstack server remove security group alfa default
---
    openstack port set --disable-port-security port_alfa
---
    openstack port set --disable-port-security `identificador id`

**Reglas SNAT en la maquina alfa**

Entramos en la maquina alfa y entramos al siguiente fichero:

	nano /etc/sysctl.conf

Y descomentamos la siguiente linea:

	net.ipv4.ip_forward=1
	
Y guardamos los cambios:

	sysctl -p

Miramos a ver si tenemos instalado iptables.

	apt policy iptables
	
Si no es asi lo instalamos:

	apt install iptables

Ponemos las reglas de iptables:

	nano /etc/network/interfaces.d/50-cloud-init
---
	up iptables -t nat -A POSTROUTING -s 172.16.0.0/16 -o ens3 -j MASQUERADE
	down iptables -t nat -D POSTROUTING -s 172.16.0.0/16 -o ens3 -j MASQUERADE

Guardamos y reseteamos el servicio:

    systemctl restart networking

<font color="#0000FF">**5. Creación de la máquina2 (bravo):**</font>

**Creamos puerto**

    openstack port create --network Red-DMZ-de-olucas --fixed-ip ip-address=172.16.0.200 port_bravo

**Creamos el volumen**

    openstack volume create --bootable --size 30 --image "Rocky Linux 9" bravo_rocky

**Creación maquina Bravo**

    openstack server create --flavor vol.normal --volume bravo_rocky --security-group default --key-name oscar_clave --port "port_bravo" --user-data "cloud-init-bravo.yaml" \bravo

**Quitamos grupo de seguridad**

    openstack port list --server bravo
---
    openstack server remove security group bravo default
---
    openstack port set --disable-port-security port_bravo

### Instalación de los contenedores

---

<font color="#0000FF">**1. Crea en máquina1 (alfa) un linux bridge llamado br-intra y asigna una dirección IP estática 192.168.0.1. Esta será la IP de máquina1 (alfa) conectada a este switch virtual y será la puerta de enlace de los contenedores**</font>

**Instalamos los paquetes necesarios**

    apt install qemu-system libvirt-clients libvirt-daemon-system

**Creamos el fichero br-intra.xml**

    nano br-intra.xml
---
    <network>
      <name>br-intra</name>
      <bridge name='br-intra'/>
      <forward/>
      <ip address='192.168.0.1' netmask='255.255.255.0'>
      </ip>
    </network>

**Creamos la red**

    virsh -c qemu:///system net-define br-intra.xml
---
    virsh -c qemu:///system net-start br-intra
---
    virsh -c qemu:///system net-autostart br-intra

<font color="#0000FF">**2. Instala LXC y crea dos contenedores con la distribución Ubuntu 20.04. Estos contenedores serán la máquina3 (charlie) y la máquina4 (delta).**</font>

**Instalamos lxc**

    apt install lxc

**Creamos el contenedor**

    lxc-create -n charlie -t ubuntu -- -r focal
---
    lxc-create -n delta -t ubuntu -- -r focal

<font color="#0000FF">**3. Configura de forma permanente la regla SNAT para que los contenedores tengan acceso a internet.**</font>


<font color="#0000FF">**4. Conecta los contenedores al bridge br-intra y configúralo de forma estática con las siguientes direcciones: máquina3 (charlie) la 192.168.0.2 y máquina4 (delta) la 192.168.0.3.**</font>


<font color="#0000FF">**5. Para que la red de OpenStack funcione de forma adecuada las imágenes que usamos tienen configurado la mtu (Unidad máxima de transferencia) a 1450 bytes. Tenemos que adecuar los contenedores a este tamaño de trama. Para ello introduce en la configuración de los contenedores la línea: lxc.net.0.mtu = 1450.**</font>


<font color="#0000FF">**6. Configura los contenedores para que se auto inicien al reiniciar la instancia.**</font>


<font color="#0000FF">**7. Los contenedores tendrán características parecidas a las instancias anteriormente:**</font>

