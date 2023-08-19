const React = require('react');
const { useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');
const { Link } = require ('react-router-dom');


const VerDepartamentoPage = ()=> {

    let {id} = useParams();
    const [departamento,setDepartamento] = useState({});


    useEffect(()=>{
        client({
            method:'GET',
            path:'/api/departamentos/'+ id
        }).done(Response=>setDepartamento(Response.entity))
    },[])
    
    
    return(
        <>
        <h1>Ver Departamento</h1>

        <table>
            <tr>
                <th>Nombre</th>
                <td>{departamento.nombre}</td>
            </tr>         
        </table>

        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = VerDepartamentoPage;