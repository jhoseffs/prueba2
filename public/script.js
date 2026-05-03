// Cargar información al iniciar
document.addEventListener('DOMContentLoaded', () => {
    cargarInfo();
    cargarContador();
    cargarFeatures();
    actualizarTimestamp();
    setInterval(actualizarTimestamp, 1000);
});

// Cargar información
async function cargarInfo() {
    try {
        const response = await fetch('/api/info');
        const data = await response.json();
        
        const infoDiv = document.getElementById('info');
        infoDiv.innerHTML = `
            <p><strong>Mensaje:</strong> ${data.mensaje}</p>
            <p><strong>Versión:</strong> ${data.version}</p>
            <p><strong>Descripción:</strong> ${data.descripcion}</p>
            <p><strong>Hora del servidor:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
        `;
    } catch (error) {
        console.error('Error al cargar información:', error);
        document.getElementById('info').innerHTML = '<p style="color: red;">Error al cargar información</p>';
    }
}

// Cargar contador
async function cargarContador() {
    try {
        const response = await fetch('/api/contador');
        const data = await response.json();
        document.getElementById('contador-display').textContent = data.contador;
    } catch (error) {
        console.error('Error al cargar contador:', error);
    }
}

// Incrementar contador
async function incrementarContador() {
    try {
        const response = await fetch('/api/contador/incrementar', { method: 'POST' });
        const data = await response.json();
        document.getElementById('contador-display').textContent = data.contador;
        mostrarNotificacion('✅ Contador incrementado');
    } catch (error) {
        console.error('Error:', error);
        mostrarNotificacion('❌ Error al incrementar', 'error');
    }
}

// Decrementar contador
async function decrementarContador() {
    try {
        const response = await fetch('/api/contador/decrementar', { method: 'POST' });
        const data = await response.json();
        document.getElementById('contador-display').textContent = data.contador;
        mostrarNotificacion('✅ Contador decrementado');
    } catch (error) {
        console.error('Error:', error);
        mostrarNotificacion('❌ Error al decrementar', 'error');
    }
}

// Reiniciar contador
async function resetContador() {
    try {
        const response = await fetch('/api/contador/reset', { method: 'POST' });
        const data = await response.json();
        document.getElementById('contador-display').textContent = data.contador;
        mostrarNotificacion('✅ Contador reiniciado');
    } catch (error) {
        console.error('Error:', error);
        mostrarNotificacion('❌ Error al reiniciar', 'error');
    }
}

// Enviar saludo personalizado
async function enviarSaludo() {
    const nombre = document.getElementById('nombre-input').value.trim();
    
    if (!nombre) {
        mostrarNotificacion('❌ Por favor escribe tu nombre', 'error');
        return;
    }
    
    try {
        const response = await fetch('/api/saludo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            const respuestaDiv = document.getElementById('saludo-respuesta');
            respuestaDiv.textContent = data.saludo;
            respuestaDiv.classList.add('success');
            respuestaDiv.classList.remove('error');
            document.getElementById('nombre-input').value = '';
        } else {
            mostrarNotificacion('❌ ' + data.error, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarNotificacion('❌ Error al enviar saludo', 'error');
    }
}

// Cargar características
async function cargarFeatures() {
    try {
        const response = await fetch('/api/features');
        const data = await response.json();
        
        const featuresList = document.getElementById('features-list');
        featuresList.innerHTML = data.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
    } catch (error) {
        console.error('Error al cargar características:', error);
        document.getElementById('features-list').innerHTML = '<li style="color: red;">Error al cargar características</li>';
    }
}

// Actualizar timestamp
function actualizarTimestamp() {
    const now = new Date();
    document.getElementById('timestamp').textContent = now.toLocaleTimeString();
}

// Mostrar notificación
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${tipo === 'success' ? '#48bb78' : '#f56565'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Permitir enviar saludo con Enter
document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombre-input');
    if (nombreInput) {
        nombreInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                enviarSaludo();
            }
        });
    }
});

// Agregar animaciones CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
