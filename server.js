import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API: Obtener información
app.get('/api/info', (req, res) => {
  const info = {
    mensaje: '¡Hola Mundo!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    descripcion: 'Aplicación simple de demostración'
  };
  res.json(info);
});

// API: Contador (en memoria)
let contador = 0;

app.get('/api/contador', (req, res) => {
  res.json({ contador });
});

app.post('/api/contador/incrementar', (req, res) => {
  contador++;
  res.json({ contador, mensaje: 'Contador incrementado' });
});

app.post('/api/contador/decrementar', (req, res) => {
  contador--;
  res.json({ contador, mensaje: 'Contador decrementado' });
});

app.post('/api/contador/reset', (req, res) => {
  contador = 0;
  res.json({ contador, mensaje: 'Contador reiniciado' });
});

// API: Saludos personalizados
app.post('/api/saludo', (req, res) => {
  const { nombre } = req.body;
  
  if (!nombre) {
    return res.status(400).json({ error: 'El nombre es requerido' });
  }
  
  res.json({
    saludo: `¡Hola ${nombre}! Bienvenido a nuestra aplicación.`,
    timestamp: new Date().toISOString()
  });
});

// API: Lista de características
app.get('/api/features', (req, res) => {
  const features = [
    'Interfaz simple y limpia',
    'Contador interactivo',
    'Saludos personalizados',
    'Información en tiempo real',
    'API REST completa',
    'Responsive design'
  ];
  res.json({ features });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📝 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
