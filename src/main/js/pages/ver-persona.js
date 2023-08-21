const React = require('react');
const { useParams } = require('react-router-dom');
const { useState,useEffect } = require('react');
const client = require('../client');
const { Link } = require ('react-router-dom');


const VerPersonaPage = ()=> {

    let {id} = useParams();
    const [persona,setPersona] = useState({});

    useEffect(()=>{
        client({
            method:'GET',
            path:'/api/personas/'+ id
        }).done(Response=>setPersona(Response.entity))
    },[])
    return(
        <>
        <h1>Ver Persona</h1>

        <table>
            <tr>
                <th>Nombre</th>
                <td>{persona.nombre}</td>
            </tr>
            <tr>
                <th>Apellido</th>
                <td>{persona.apellido}</td>
            </tr>
            <tr>
                <th>Ciudad</th>
                <td>{persona.cuidad}</td>
            </tr>
        </table>

        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerPersonaPage;