const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {personas: [], ciudades: [] , departamentos:[] };
	  
	}
	componentDidMount() {
	  client({ method: 'GET', path: '/api/personas' }).done((response) => {
		this.setState({personas: response.entity._embedded.personas});
	  });
	  client({ method: 'GET', path: '/api/ciudades' }).done((response) => {
		this.setState({ciudades: response.entity._embedded.ciudades});
	  });

	  client({ method: 'GET', path: '/api/departamentos' }).done((response) => {
		this.setState({departamentos: response.entity._embedded.departamentos});
	  });
	}
	render() {
		return (
			<>
			    <h1>Semana13App</h1>

				<div style={{"width":"100%","display":"flex"}}>

					<div style={{"width":"calc(100%/3"}}>
						<Titulo entidad="Personas" emoji="🧑"/>
		  				<PersonaList personas={this.state.personas} />
				 	 	<Link to="/nuevo-persona">Crear Persona</Link>
						  </div>
					<div style={{"width":"calc(100%/3"}}>
						<Titulo entidad="Ciudades" emoji="🌆"/>	
						<CiudadList ciudades={this.state.ciudades}/>	
						<Link to="/nuevo-ciudad">Crear Ciudad</Link>
						</div>
					<div style={{"width":"calc(100%/3"}}>
						<Titulo entidad="Departamentos" emoji="🌆"/>	
						<DepartamentoList departamentos={this.state.departamentos}/>	
						<Link to="/nuevo-departamento">Crear Departamento</Link>
						</div>
				</div>
							                
			</>
		);
	}
}
const Titulo = (props)=>{
	return (
	<>
	<hr/>
	<h2>{props.emoji} - {props.entidad}</h2>
	<hr/>
	Lista Completa de {props.entidad.toLowerCase()}
	<br/>
	</>
	)
}; //arrow function

class DepartamentoList extends React.Component {
	render() {
	  const departamentos = this.props.departamentos.map((departamento) => (
		<Departamento key={departamento._links.self.href} departamento={departamento} />
	  ));
	  return (
		<table border="1">
		  <tbody>
			<tr>
			  <th>Nombre</th>		
			  <th>Acciones</th>
			</tr>
			{departamentos}
		  </tbody>
		</table>
	  );
	}
  }
  
  class PersonaList extends React.Component {
	render() {
	  const personas = this.props.personas.map((persona) => (
		<Persona key={persona._links.self.href} persona={persona} />
	  ));
	  return (
		<table border="1">
		  <tbody>
			<tr>
			  <th>Nombre</th>
			  <th>Apellido</th>
			  <th>Ciudad</th>
			  <th>Acciones</th>
			</tr>
			{personas}
		  </tbody>
		</table>
	  );
	}
  }
  class CiudadList extends React.Component {
	render() {
	  const ciudades = this.props.ciudades.map((ciudad) => (
		<Ciudad key={ciudad._links.self.href} ciudad={ciudad} />
	  ));
	  return (
		<table border="1">
		  <tbody>
			<tr>
			  <th>Nombre</th>
			  <th>Codigo Postal</th>
			  <th>Region</th>
			  <th>Acciones</th>
			</tr>
			{ciudades}
		  </tbody>
		</table>
	  );
	}
  }
  
  class Persona extends React.Component {
	
	render() {
		const id = this.props.persona._links.self.href.split("/").slice(-1)
	  return (
		<tr>
		  <td>{this.props.persona.nombre}</td>
		  <td>{this.props.persona.apellido}</td>
		  <td>{this.props.persona.cuidad}</td>
		  <td>
			<Link to={"/ver-persona/"+id}>Ver</Link>/
			<Link to={"/editar-persona/"+id}>Editar</Link>
			</td>	
			
		</tr>
		
		
	  );
	}
  }

  class Ciudad extends React.Component {
	render() {
		const id = this.props.ciudad._links.self.href.split("/").slice(-1)
	  return (
		<tr>
			<td>{this.props.ciudad.nombre}</td>
		  	<td>{this.props.ciudad.codigoPostal}</td>
		  	<td>{this.props.ciudad.region}</td>
			<td>
			  <Link to={"/ver-ciudad/"+id}>Ver</Link>/
			</td>
			
		</tr>
	  );
	}
  }

  class Departamento extends React.Component {
	render() {
		const id = this.props.departamento._links.self.href.split("/").slice(-1)
	  return (
		<tr>
			<td>{this.props.departamento.nombre}</td>
			<td>
			  <Link to={"/ver-departamento/"+id}>Ver</Link>/
			</td>
			
		</tr>
	  );
	}
  }

  module.exports = HomePage