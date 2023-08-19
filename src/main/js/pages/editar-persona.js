const React = require('react');
const { useState, useEffect } = require('react');
const client = require('../client');
const {Link , useParams} = require("react-router-dom")


const EditarPersonaPage = () =>{

        const[persona, setPersona] = useState({})
        let {id} = useParams();

        useEffect(()=>{
            client({
                method:'GET',
                path:'/api/personas/'+id
            }).done((response)=>setPersona(response.entity))
        }, [])

        const handleSubmit = (evento)=>{
            evento.preventDefault();
            client({
                method:'PATCH',
                path:'/api/personas/'+id,
                entity:persona,
                headers:{'Content-Type': 'application/json'}                
            }).done(()=>window.location = '/')
        }


    return(
        <>
            <h1>Editar Persona</h1>

            <form onSubmit={(handleSubmit)}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={persona.nombre} onChange={(e)=>setPersona({...persona, nombre: e.target.value})}/><br/>
                <label>Apellido</label>
                <input type="text" id="apellido" name="apellido" value={persona.apellido} onChange={(e)=>setPersona({...persona, apellido: e.target.value})}></input><br/>
                <label>Ciudad</label>
                <input type="text"  id="ciudad" name="ciudad" value={persona.cuidad} onChange={(e)=>setPersona({...persona, cuidad: e.target.value})}></input><br/>

                <input type="submit" value="Editar Persona"></input>

            </form>
        </>
    )

}


module.exports = EditarPersonaPage