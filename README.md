# Estudio Binario Mx — Sitio web

Sitio web oficial de **Estudio Binario Mx**, estudio de desarrollo web y soporte digital en Morelia, Michoacán.

Atendido por:
- **Francisco Javier Martínez Oliveros** — Ingeniero en Desarrollo y Gestión de Software
- **Brenda Jazmín Guzmán Domínguez** — Ingeniera en Desarrollo y Gestión de Software

## 🧱 Qué es este proyecto

Landing page de una sola página (`index.html`), hecha en **HTML, CSS y JavaScript puros** — sin frameworks, sin proceso de build, sin dependencias que instalar. Incluye:

- Presentación de servicios organizados por necesidad del cliente (no por tecnología)
- Caso de estudio de Mañana Rica (proyecto propio) y lugar para proyectos de clientes
- Garantías por escrito (pago final al aprobar, todo a nombre del cliente, 30 días de garantía, contrato)
- Precios fijos: Arranque / Negocio / Sistema + Plan Tranquilidad mensual + servicios sueltos + precio de fundador
- Preguntas frecuentes
- Sección técnica desplegable al final, con el stack y certificaciones
- Aviso de privacidad y términos del servicio
- Contacto directo por WhatsApp y correo

## 📁 Estructura

```
.
├── index.html             # Página principal
├── aviso-privacidad.html  # Aviso de privacidad
├── terminos.html          # Términos del servicio
├── styles.css             # Estilos (variables de color en :root)
├── script.js              # Animación al hacer scroll y botón "volver arriba"
├── assets/                # Logo, favicon e imágenes de proyectos
└── vercel.json            # Cabeceras de seguridad
```

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

Todo el texto, precios y enlaces de contacto (WhatsApp, correo) están directamente en `index.html`, dentro de sus respectivas secciones (`<section id="...">`). Los estilos están en `styles.css`, usando variables CSS (`:root`) para colores y medidas — cambia ahí si quieren ajustar la paleta.

Si cambian precios, garantías o formas de pago, actualicen también `terminos.html` y el contrato para que digan lo mismo.

## 🚀 Despliegue

El sitio se despliega en **Vercel**, conectado directamente a este repositorio: cada `push` a `main` publica los cambios automáticamente. No requiere configuración de build (Vercel lo sirve como sitio estático).

Dominio contratado en **Hostinger**, apuntado a Vercel mediante registros DNS (tipo A y CNAME). Los nameservers permanecen en Hostinger para conservar el manejo del dominio y del correo desde ahí.

## 📌 Pendientes / ideas futuras

- [ ] Fotos reales de Francisco y Brenda en "Quién te atiende"
- [ ] Testimonios de clientes (bloque comentado en la sección Proyectos)
- [ ] Domicilio completo en el aviso de privacidad
- [ ] Sello "Facturamos" cuando ya se pueda emitir factura
- [ ] Agregar formulario de contacto funcional (alternativa a solo WhatsApp/correo)
- [ ] Configurar correo profesional (`@estudiobinario.mx` o el dominio elegido)

## 🔒 Licencia

Repositorio privado — propiedad de Estudio Binario Mx. No redistribuir sin autorización.
