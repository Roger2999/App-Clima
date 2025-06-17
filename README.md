# Aplicación del Clima

Esta es una aplicación web desarrollada con React y Vite que permite consultar el clima actual de cualquier ciudad utilizando la API de OpenWeatherMap.

## Características

- Búsqueda de clima por nombre de ciudad.
- Visualización de temperatura, sensación térmica, humedad y estado del clima.
- Animación de carga mientras se realiza la consulta.
- Manejo de errores en la búsqueda.

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- CSS

## Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd unknow-project
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## Estructura principal del proyecto

```
unknow-project/
├── public/
├── src/
│   ├── components/
│   │   └── SearchInput/
│   ├── hooks/
│   ├── pages/
│   │   └── Home/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Configuración de la API

La aplicación utiliza la API de OpenWeatherMap. Puedes cambiar la clave API en el archivo `src/pages/Home/Home.jsx`:

```
const API_KEY = "<tu_api_key_aqui>";
```

## Créditos

Desarrollado por Roger.

---

¡Siéntete libre de contribuir o reportar issues!
