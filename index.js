const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px; font-family: Arial, sans-serif;">
            <h1>🚀 Despliegue Automatizado Exitoso</h1>
            <p>Práctica 5 - Plataformas de Software en la Nube</p>
            <p><strong>Estudiante:</strong> César Iván Hernández Arroyo</p>
            <p style="color: green; font-size: 1.2em;">✔ Contenedor Docker corriendo en AWS EC2 mediante GitHub Actions</p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});