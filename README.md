# 🌍 ¡Hola Mundo! - Aplicación Simple

Una aplicación web simple y limpia para demostrar conceptos básicos de Node.js, Express y frontend interactivo.

---

## ✨ Características

- ✅ Interfaz moderna y responsiva
- ✅ Contador interactivo
- ✅ Saludos personalizados
- ✅ API REST simple
- ✅ Sin base de datos
- ✅ Fácil de entender y modificar

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js 14+ (con npm)

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor en desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3001
```

### Producción

```bash
npm start
```

---

## 📁 Estructura del Proyecto

```
hola-mundo-app/
├── server.js           # Servidor Express
├── package.json        # Dependencias
├── public/
│   ├── index.html      # Página principal
│   ├── styles.css      # Estilos
│   └── script.js       # JavaScript interactivo
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar en Git
```

---

## 📊 API Endpoints

### GET `/`
Página principal HTML

### GET `/api/info`
Obtiene información de la aplicación

**Respuesta:**
```json
{
  "mensaje": "¡Hola Mundo!",
  "timestamp": "2026-04-30T15:00:00.000Z",
  "version": "1.0.0",
  "descripcion": "Aplicación simple de demostración"
}
```

### GET `/api/contador`
Obtiene el valor actual del contador

**Respuesta:**
```json
{
  "contador": 5
}
```

### POST `/api/contador/incrementar`
Incrementa el contador en 1

### POST `/api/contador/decrementar`
Decrementa el contador en 1

### POST `/api/contador/reset`
Reinicia el contador a 0

### POST `/api/saludo`
Envía un saludo personalizado

**Body:**
```json
{
  "nombre": "Juan"
}
```

**Respuesta:**
```json
{
  "saludo": "¡Hola Juan! Bienvenido a nuestra aplicación.",
  "timestamp": "2026-04-30T15:00:00.000Z"
}
```

### GET `/api/features`
Obtiene la lista de características

**Respuesta:**
```json
{
  "features": [
    "Interfaz simple y limpia",
    "Contador interactivo",
    "Saludos personalizados",
    "Información en tiempo real",
    "API REST completa",
    "Responsive design"
  ]
}
```

### GET `/health`
Health check del servidor

---

## 🎨 Personalización

### Cambiar el puerto
```bash
PORT=8000 npm start
```

### Modificar el título
Edita `public/index.html` línea 6:
```html
<title>Tu título aquí</title>
```

### Cambiar colores
Edita `public/styles.css` y busca los colores:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

---

## 🚀 Despliegue en Render.com

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "Hola Mundo App"
git remote add origin https://github.com/tu-usuario/hola-mundo-app.git
git branch -M main
git push -u origin main
```

### 2. Crear servicio en Render

- Ir a https://dashboard.render.com
- Click en "New +" → "Web Service"
- Conectar repositorio de GitHub
- Configurar:
  - **Build Command**: `npm install`
  - **Start Command**: `npm start`
  - **Environment**: Node
  - **Plan**: Free

### 3. Desplegar

- Click en "Create Web Service"
- Esperar a que se complete el build
- ¡Listo! Tu aplicación estará en línea

---

## 🐛 Solución de Problemas

### Puerto 3000 ya está en uso
```bash
PORT=3001 npm start
```

### Error: "Cannot find module 'express'"
```bash
npm install
```

### La página no carga
1. Verifica que el servidor está corriendo
2. Abre http://localhost:3000 en el navegador
3. Revisa la consola del navegador (F12)

---

## 📝 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Desarrollo (con auto-reload)
npm run dev

# Producción
npm start

# Limpiar node_modules
rm -rf node_modules && npm install
```

---

## 🔗 Enlaces Útiles

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Render.com Docs](https://render.com/docs)

---

## 📄 Licencia

MIT

---

## 👨‍💻 Autor

Creado como una aplicación simple de demostración

---

## 💡 Próximos Pasos

Puedes mejorar esta aplicación agregando:

1. **Base de datos** - Usar MongoDB o PostgreSQL
2. **Autenticación** - Login y registro de usuarios
3. **Más páginas** - Crear rutas adicionales
4. **Validación** - Validar datos de entrada
5. **Tests** - Agregar pruebas unitarias
6. **Documentación API** - Usar Swagger/OpenAPI

---

¡Diviértete desarrollando! 🚀
