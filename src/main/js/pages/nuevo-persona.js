const React = require('react');
const { useState } = require('react');
const { Link} = require('react-router-dom'); // Asegúrate de importar Redirect
const client = require('../client');

const NuevoPersonaPage = () => {
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [cuidad,setCuidad] = useState('');

    const handleSubmit = (evento) => {
        evento.preventDefault();

        const nuevaPersona = {
            nombre: nombre,
            apellido:apellido,
            cuidad:cuidad
        };

        client({
            method: 'POST',
            path: '/api/personas',
            entity: nuevaPersona, // Envía el objeto con todas las propiedades
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/'
        });
}
return(
    <>
        <h1>Nueva Persona</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <br />
                <input type="text" id='nombre' name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label>Apellido</label>
                <br />
                <input type="text" id='apellido' name='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <br />
                <label>Ciudad</label>
                <br />
                <input type="text" id='cuidad' name='cuidad' value={cuidad} onChange={(e) => setCuidad(e.target.value)} />
                <br />
                <input type="submit" value="Nueva Persona" />
            </form>
            <Link to="/">Volver</Link>
    </>
)
}
module.exports = NuevoPersonaPage