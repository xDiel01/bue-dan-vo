const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    
    if (usuario === "admin" && password === "cashteam,1415") {
        res.json({ exito: true, mensaje: "¡Bienvenido Admin! (Server PRO 24/7)" });
    } else {
        res.json({ exito: false, mensaje: "Clave incorrecta." });
    }
});

// ESTO ES IMPORTANTE: Render nos asigna un puerto automático
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});