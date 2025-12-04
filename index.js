const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    // --- LISTA DE USUARIOS VIP ---
    const usuariosPermitidos = [
        { user: "admin", pass: "diel.1415", nombre: "Admin Supremo" },
        { user: "obed", pass: "papu.12345", nombre: "Obed (Socio)" },
        { user: "user01", pass: "cash2025", nombre: "Vendedor 1" }
    ];

    // Buscamos si coincide con alguno de la lista
    const usuarioEncontrado = usuariosPermitidos.find(u => u.user === usuario && u.pass === password);

    if (usuarioEncontrado) {
        res.json({ 
            exito: true, 
            mensaje: `¡Bienvenido ${usuarioEncontrado.nombre}!` 
        });
    } else {
        res.json({ exito: false, mensaje: "Credenciales incorrectas." });
    }
});

// Configuración del puerto para Render
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
