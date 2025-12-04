app.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    const usuariosPermitidos = [
        { user: "admin", pass: "diel.1415", nombre: "Admin Supremo" },
        { user: "obed", pass: "papu.12345", nombre: "Obed (Socio)" },
        { user: "user07", pass: "cash2025", nombre: "Vendedor 01" }
    ];

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
