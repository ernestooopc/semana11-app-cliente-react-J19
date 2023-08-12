const React = require('react');
const ReactDOM = require('react-dom');

const client = require('./client');

class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {personas: [], ciudades: [] };
	  
	}
	componentDidMount() {
	  client({ method: 'GET', path: '/api/personas' }).done((response) => {
		this.setState({personas: response.entity._embedded.personas});
	  });
	  client({ method: 'GET', path: '/api/ciudades' }).done((response) => {
		this.setState({ciudades: response.entity._embedded.ciudades});
	  });
	}
	render() {
		return (
			<>
				<h2>Lista de Personas</h2>
		  		<PersonaList personas={this.state.personas} />
				<hr/>
				<h2>Lista de Ciudades</h2>
				<CiudadList ciudades={this.state.ciudades}/>		
			</>
		);
	}
}
  
  class PersonaList extends React.Component {
	render() {
	  const personas = this.props.personas.map((persona) => (
		<Persona key={persona._links.self.href} persona={persona} />
	  ));
	  return (
		<table>
		  <tbody>
			<tr>
			  <th>Nombre</th>
			  <th>Apellido</th>
			  <th>Cuidad</th>
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
		<table>
		  <tbody>
			<tr>
			  <th>Nombre</th>
			  <th>Codigo Postal</th>
			  <th>Region</th>
			</tr>
			{ciudades}
		  </tbody>
		</table>
	  );
	}
  }
  
  class Persona extends React.Component {
	render() {
	  return (
		<tr>
		  <td>{this.props.persona.nombre}</td>
		  <td>{this.props.persona.apellido}</td>
		  <td>{this.props.persona.cuidad}</td>
		</tr>
	  );
	}
  }

  class Ciudad extends React.Component {
	render() {
	  return (
		<tr>
			<td>{this.props.ciudad.nombre}</td>
		  	<td>{this.props.ciudad.codigoPostal}</td>
		  	<td>{this.props.ciudad.region}</td>
		</tr>
	  );
	}
  }
  
  ReactDOM.render(<App />, document.getElementById('react'));
