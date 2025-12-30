# ProyectoFinal – Beauty Bar (React + Vite + Firebase)

Single Page Application (SPA) de e-commerce desarrollada con React, Vite y Firebase Firestore. Implementa listado y detalle de productos, carrito de compras con Context API, navegación con React Router, y flujo de checkout con generación de órdenes en Firestore.

## Tecnologías utilizadas
- React 19
- Vite
- React Router DOM
- Firebase (Firestore)
- SweetAlert2
- Google Drive (hosting de imágenes)


## Instalación y ejecución

### 1. Clonar repositorio
```bash
git clone [URL_DEL_REPO]
cd mi_ecommerce
```

### 2. Configurar variables de entorno
Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

O crea un archivo `.env` en la raíz con tus credenciales de Firebase:
```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

### 5. Build para producción
```bash
npm run build
```

### 6. Desplegar en Netlify
- Conecta tu repositorio a Netlify
- En **Site settings** → **Build & deploy** → **Environment**, agrega las 6 variables de Firebase
- El deploy se hará automáticamente

Accede a http://localhost:5173 (puede variar según Vite).


