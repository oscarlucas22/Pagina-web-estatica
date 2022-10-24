Paso 1: Obtenga la clave de vinculación

Antes de instalar e implementar el agente, deberá buscar la clave de vinculación para vincular los agentes a su plataforma de gestión de vulnerabilidades, a fin de obtener y analizar los datos de los agentes. En Tenable.io, puede acceder a esta clave seleccionando Settings (Configuración), en el menú desplegable de navegación principal, y haciendo clic en la opción Sensors (Sensores). En la pantalla Sensors (Sensores), haga clic en Add Agent (Agregar agente) en la esquina superior derecha, lo que mostrará la clave de vinculación.

![image](https://www.tenable.com/sites/drupal.dmz.tenablesecurity.com/files/images/blog/Agent%20Linking%20Key.jpg)

Paso 2: Instale los Nessus Agents

Una vez que tenga la clave de vinculación, visite la página de Nessus Agents, a fin de descargar el agente correspondiente para su sistema operativo. Una vez descargados, puede instalarlos de forma rápida y sencilla en su sistema. Los Nessus Agents son compatibles con las principales distribuciones de Linux, Microsoft Windows y Mac OS. Utilice el asistente de instalación para completar el proceso de instalación, o implemente los agentes a través de la interfaz de la línea de comandos (CLI). Además, puede consultar nuestra Guía para implementaciones a gran escala, para ayudarle a implementar un gran número de agentes (más de 10 000) a lo largo de todos los hosts de su organización.

Paso 3: Verifique que los Nessus Agents estén vinculados

Ahora, busque su agente recién instalado y vinculado en Tenable.io. Para verificar su estado, vaya a la pantalla Sensors (Sensores), en Settings (Configuración), y busque su agente en la tabla de Linked Agents (Agentes vinculados). Una vez que el agente muestra que está "Online" (En línea), está listo para configurar su escaneo de agente. Para poder utilizar el agente en futuros escaneos, agréguelo a un grupo de agentes que ya exista o cree uno nuevo.

![image](https://www.tenable.com/sites/drupal.dmz.tenablesecurity.com/files/images/blog/Verify%20Linked%20Agents.jpg)

Paso 4: Configure su escaneo de agente

Para crear un nuevo escaneo basado en agentes en Tenable.io, haga clic en el menú desplegable de navegación principal y seleccione la opción Scans (Escaneos), que está en Tools (Herramientas). En la pantalla Scans (Escaneos), haga clic en el botón Create Scan (Crear escaneo), en la esquina superior derecha, y seleccione la pestaña Agent (Agente), ubicada hacia la parte superior de la pantalla. Aquí puede seleccionar entre diversas plantillas de escaneado preconfiguradas, pero Basic Agent Scan (Escaneo básico de agentes) es un excelente punto de partida para la mayoría de los usuarios. 

Configure el escaneo en función de sus requisitos, incluyendo las opciones que se solo se utilizan con los agentes, como Agent Groups (Grupos de agentes) y Scan Window (Intervalo de escaneo). Consejo profesional: seleccione el intervalo de escaneo en función de qué tan persistente sea la conexión del activo a la red. En el caso de las computadoras portátiles y las estaciones de trabajo remotas, tiene sentido usar intervalos de escaneo más largos (de 12 horas para los escaneos diarios), a fin de dar más tiempo a esos sistemas para que informen los resultados cuando accedan a la red. Además, programe el escaneo para que se ejecute a intervalos regulares. Los usuarios de Tenable.sc pueden optar por sincronizar los resultados de los escaneos de agente con Tenable.sc.

![image](https://www.tenable.com/sites/drupal.dmz.tenablesecurity.com/files/images/blog/Create%20Agent%20Scan.jpg)

Paso 5: Analice los resultados de los escaneos

Ahora, verá que los datos de activos y vulnerabilidades de sus agentes pasan a Tenable.io y se sincronizan con Tenable.sc. Puede profundizar en los datos de los tableros de control, o hacer clic en los escaneos de agente para ver los resultados de agentes específicos. Incluso puede crear tableros de control e informes específicos, analizando la información de los escaneos basados en agentes. 

![image](https://www.tenable.com/sites/drupal.dmz.tenablesecurity.com/files/images/blog/Custom%20Agent%20Dashboards.jpg)