# Macaf Soluciones Digitales

Landing estática para presentar el chatbot de WhatsApp con IA y otros servicios
digitales de Macaf.

## Estructura del sitio

- `index.html`: Inicio.
- `nosotros.html`: Propósito y forma de trabajo.
- `servicios.html`: Resumen de servicios.
- `chatbots.html`, `automatizacion.html`, `inteligencia-artificial.html`,
  `software-a-medida.html`: Detalle de cada servicio.
- `productos.html`: Producto chatbot actualmente disponible.
- `casos-de-exito.html`: Casos futuros y formulario de retroalimentación.
- `blog.html`: Espacio preparado para artículos.
- `contacto.html`: Formulario que abre WhatsApp con los datos del contacto.

La valoración de `casos-de-exito.html` es solo una interfaz de captura; aún no
se almacena ni se publica. Para convertirla en reseñas reales se debe conectar
a un endpoint protegido del backend o a un proveedor de formularios.

## Formulario de contacto

El formulario de `contacto.html` envía solicitudes a:

```text
POST /public/contact-requests
```

En desarrollo local usa `http://localhost:8000`; fuera de localhost usa el
backend público de Railway configurado en `script.js`.

Antes de publicar la web en Vercel, agrega su origen (sin rutas) a
`CORS_ALLOWED_ORIGINS` del backend en Railway, junto con el origen local. Por
ejemplo:

```text
CORS_ALLOWED_ORIGINS=http://localhost:4200,http://localhost:5500,https://TU-SITIO.vercel.app
```

## Personalización inicial

1. En `script.js`, reemplaza `WHATSAPP_NUMBER` por el número comercial de
   Macaf en formato internacional, sin `+` ni espacios.
2. El enlace **Ingresar** apunta al panel actual:
   `https://chatbot-front-sigma.vercel.app/login`.
   Cuando se configure un dominio propio, actualiza ese enlace a
   `https://panel.macafdigital.com/login` (o al subdominio que decidas).

## Publicar en Vercel

1. Crea un repositorio para la carpeta `macaf-digital`.
2. Importa ese repositorio en Vercel.
3. Vercel detecta que es una página estática: no requiere comandos ni variables
   de entorno.
4. Cuando compres `macafdigital.com`, conecta el dominio raíz a este proyecto.
   El panel Angular puede usar el subdominio `panel.macafdigital.com`.
