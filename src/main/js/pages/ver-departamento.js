const React = require('react');
const { useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');
const { Link } = require ('react-router-dom');


const VerDepartamentoPage = ()=> {

    let {id} = useParams();
    const [ciudadanos,setCiudadanos] = useState([]);
    const [departamento,setDepartamento] = useState({});

    useEffect(()=>{
        client({
            method:'GET',
            path:'/api/departamentos/'+ id
        }).done(Response=>setDepartamento(Response.entity))
        client({
            method:"GET",
            path:"/api/departamentos/"+id+"/formacion"
        }).done(Response=>setCiudadanos(Response.entity))
    },[])

    
    return(
        <>
        <h1>Ver Departamento</h1>

        <table border="1">
            <thead>
            <tr>
                <th>Nombre</th>
                
            </tr>       
            </thead>  
            <tbody>
                <tr>
                    <td>{departamento.nombre}</td>
                </tr>
            </tbody>
        </table>

        <h2>Gente</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Persona</th>            
                    <th>Ciudades</th>
                </tr>
            </thead>
            <tbody>
                {ciudadanos.map(ciudadano=>{
                    return(
                    <tr key={ciudadano.ID}>
                        <td>{ciudadano.PERSONA}</td>
                        <td>{ciudadano.CIUDAD}</td>
                    </tr>
                    )                                            
                })}               
            </tbody>
        </table>

        <Link to={`/ver-departamento/${id}/nuevo-ciudadano`}>Nuevo Ciudadano</Link>

        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerDepartamentoPage;