Kit de emergencia para sitio
Un kit de inicio para sitios web de información de emergencia. (WIP) ( Sitio de demostración )

En caso de emergencia, muchas organizaciones necesitan una forma rápida de publicar información crítica. Los sitios web de CMS existentes a menudo no pueden manejar picos repentinos en el tráfico, y la infraestructura de la red local podría dañarse, dejando a los afectados con conexiones móviles deficientes.

Este proyecto tiene como objetivo permitir que las personas publiquen rápidamente un sitio web simple que pueda soportar grandes cantidades de tráfico y que funcione incluso en condiciones extremas. Se basa en la regla del menor poder , utilizando tecnologías simples para una máxima resiliencia.

Para obtener más información sobre este proyecto, mire la charla en Inclusive Design 24 .

Características
Archivos estáticos generados por Eleventy
Optimizado para la primera conexión de ida y vuelta (> 14 KB)
Estilo básico para la accesibilidad
Una solicitud crítica, CSS en línea
Netlify CMS para la edición de contenido
Soporte sin conexión con el trabajador del servicio
Empezando
Para publicar un sitio web con esta plantilla, hay dos opciones, según su conjunto de habilidades técnicas. Elige cuál te describe mejor:

No soy desarrollador , solo quiero crear un sitio web
Tengo conocimientos básicos de uso npmy la línea de comandos.
Leer los documentos de introducción

Configuración
Es posible personalizar algunas partes del sitio web a través de variables de entorno. Puede configurarlos en su máquina local en un .envarchivo o definirlos a través de la interfaz de administración de Netlify.

Las configuraciones disponibles son:

Nombre	Descripción	Ejemplo	Defecto
META_TITLE	el título de su sitio	Información COVID-19	Sitio de emergencia
META_URL	la URL completa de su sitio	https://www.covid19.org	N / A
META_DESC	una breve descripción de su sitio	Actualizaciones sobre el estado actual de la pandemia.	Un sitio web de información de emergencia.
META_LANG	el código de idioma de 2 letras de su sitio	Delaware	en
META_COLOR	el código hexadecimal del color principal (opcional)	# 1D70B8	# DB0000
META_EMAIL	su correo electrónico de contacto principal (opcional)	contact@covid19.org	N / A
META_TELEPHONE	su número de teléfono de contacto principal (opcional)	+01 23 456 789 00	N / A
Implementación con un clic
La forma más fácil de poner en marcha es bifurcando este repositorio e implementándolo en Netlify.
Puede hacerlo haciendo clic en este botón:

Implementar en Netlify

Desarrollo local
Para ejecutar esto localmente, primero debe instalar Node .
Puede ejecutarlos en la línea de comando en la raíz de su proyecto:

npm start: inicia el servidor de desarrollo
npm run build: genera una construcción de producción
npm run debug: ejecuta once con salida de depuración
Para personalizar el sitio, edítelo src/data/meta.jscon sus datos o configure las variables de entorno correspondientes. Reemplace los archivos de rebajas src/postscon su contenido.
