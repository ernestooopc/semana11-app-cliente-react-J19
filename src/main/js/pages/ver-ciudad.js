const React = require('react');
const { useParams } = require('react-router-dom');
const { useState } = require('react');
const client = require('../client');
const { Link } = require ('react-router-dom');


const VerCiudadPage = () => {

    let {id} = useParams();
    const [ciudad,setCiudad] = useState({});

    client({
        method:'GET',
        path:'/api/ciudades/'+ id
    }).done(Response=>setCiudad(Response.entity))
    return(
        <>
        <h1>Ver Ciudad</h1>

        <table>
            <tr>
                <th>Nombre</th>
                <td>{ciudad.nombre}</td>
            </tr>
            <tr>
                <th>Codigo Postal</th>
                <td>{ciudad.codigoPostal}</td>
            </tr>
            <tr>
                <th>Region</th>
                <td>{ciudad.region}</td>
            </tr>
        </table>

        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerCiudadPage;