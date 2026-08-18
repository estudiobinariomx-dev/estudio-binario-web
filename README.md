# Estudio Binario Mx — Sitio web

Sitio web oficial de **Estudio Binario Mx**, estudio de desarrollo web y soporte digital en Morelia, Michoacán.

Atendido por:
- **Francisco Javier Martínez Oliveros** — Ingeniero en Desarrollo y Gestión de Software
- **Brenda Jazmín Guzmán Domínguez** — Ingeniera en Desarrollo y Gestión de Software

## 🧱 Qué es este proyecto

Landing page de una sola página (`index.html`), hecha en **HTML, CSS y JavaScript puros** — sin frameworks, sin proceso de build, sin dependencias que instalar. Incluye:

- Presentación de servicios organizados por necesidad del cliente (no por tecnología)
- Tabla de precios pública (Básico / Intermedio / A la medida)
- Sección técnica desplegable con el stack y certificaciones
- Preguntas frecuentes
- Contacto directo por WhatsApp y correo

## 📁 Estructura

```
.
├── index.html      # Todo el sitio: HTML + CSS (embebido) + JS (embebido)
└── README.md
```

Al ser un solo archivo autocontenido, no hay carpetas de `src`, `assets` ni `dist` — si el sitio crece (más páginas, formularios con backend, imágenes propias), aquí es buen punto para reestructurar.

## 💻 Cómo verlo en local

No requiere instalación de nada. Dos opciones:

1. **Más simple:** doble clic en `index.html` y se abre en el navegador.
2. **Recomendado** (evita problemas raros de rutas/caché): sirve la carpeta con un servidor local, por ejemplo:
   ```bash
   npx serve .
   ```
   o, si tienes Python instalado:
   ```bash
   python3 -m http.server 8000
   ```
   y abre `http://localhost:8000`.

## ✏️ Cómo editar el contenido

Todo el texto, precios y enlaces de contacto (WhatsApp, correo) están directamente en `index.html`, dentro de sus respectivas secciones (`<section id="...">`). Los estilos están en el bloque `<style>` al inicio del archivo, usando variables CSS (`:root`) para colores y medidas — cambia ahí si quieren ajustar la paleta.

## 🚀 Despliegue

El sitio se despliega en **Vercel**, conectado directamente a este repositorio: cada `push` a `main` publica los cambios automáticamente. No requiere configuración de build (Vercel lo sirve como sitio estático).

Dominio contratado en **Hostinger**, apuntado a Vercel mediante registros DNS (tipo A y CNAME). Los nameservers permanecen en Hostinger para conservar el manejo del dominio y del correo desde ahí.

## 📌 Pendientes / ideas futuras

- [ ] Reemplazar textos de ejemplo por casos reales de clientes
- [ ] Agregar formulario de contacto funcional (alternativa a solo WhatsApp/correo)
- [ ] Sección de casos de éxito / portafolio
- [ ] Configurar correo profesional (`@estudiobinario.mx` o el dominio elegido)

## 🔒 Licencia

Repositorio privado — propiedad de Estudio Binario Mx. No redistribuir sin autorización.
