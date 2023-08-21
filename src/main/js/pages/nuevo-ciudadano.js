const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoCiudadanoPage = () => {

    let { id } = useParams();

    const [personas, setPersonas] = useState([])
    const [ciudades, setCiudades] = useState([])
    
    const [idPersona, setIdPersona] = useState('')
    const [idCiudad, setIdCiudad] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/ciudadanos',
            entity: {
                departamento: 'http://localhost:8080/api/departamentos/'+id,
                persona: 'http://localhost:8080/api/personas/'+idPersona,
                ciudad: 'http://localhost:8080/api/ciudades/'+idCiudad},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/personas'
        }).done(response=>{
            setPersonas(response.entity._embedded.personas)
        })
        client({
            method: 'GET',
            path: '/api/ciudades'
        }).done(response=>{
            setCiudades(response.entity._embedded.ciudades)
        })

    },[])

    return (
        <>
            <h1>Nuevo Ciudadano</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='persona'>Persona</label>
                <select name="persona" id="persona" onChange={(e)=>{setIdPersona(e.target.value)}}>
                    {personas.map(persona => {	
                        const value = persona._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>{persona.nombre}</option>
                        )
                    })}
                </select><br />
                
                <label>Ciudad</label>
                <select name="ciudad" id="ciudad" onChange={(e)=>{setIdCiudad(e.target.value)}}>
                    {ciudades.map(ciudad => {	
                        const value = ciudad._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>{ciudad.nombre}</option>
                        )
                    })}
                </select><br />

                <input type="submit" value="Nuevo Ciudadano" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoCiudadanoPage;