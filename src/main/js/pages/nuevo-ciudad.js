const React = require('react');
const { useState } = require('react');
const { Link} = require('react-router-dom'); // Asegúrate de importar Redirect
const client = require('../client');

const NuevoCiudadPage = () => {
    const [nombre, setNombre] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [region, setRegion] = useState('');
   

    const handleSubmit = (evento) => {
        evento.preventDefault();
        
        const nuevaCiudad = {
            nombre: nombre,
            codigoPostal: codigoPostal,
            region: region
        };

        client({
            method: 'POST',
            path: '/api/ciudades',
            entity: nuevaCiudad, // Envía el objeto con todas las propiedades
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/'
        });
    }
   

    return (
        <>
            <h1>Nueva Ciudad</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <br />
                <input type="text" id='nombre' name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label>Codigo Postal</label>
                <br />
                <input type="text" id='codigoPostal' name='codigoPostal' value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
                <br />
                <label>Region</label>
                <br />
                <input type="text" id='region' name='region' value={region} onChange={(e) => setRegion(e.target.value)} />
                <br />
                <input type="submit" value="Nueva Ciudad" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoCiudadPage;