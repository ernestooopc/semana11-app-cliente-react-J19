const React = require('react');
const ReactDOM = require('react-dom');

const client = require('./client');
const NuevoCiudadPage = require('./pages/nuevo-ciudad');
const HomePage = require("./pages/home");
const { createBrowserRouter, RouterProvider } = require('react-router-dom');
const NuevoPersonaPage = require('./pages/nuevo-persona')
const VerPersonaPage = require('./pages/ver-persona');
const VerCiudadPage = require('./pages/ver-ciudad');
const EditarPersonaPage = require("./pages/editar-persona");
const VerDepartamentoPage = require("./pages/ver-departamento");

const router = createBrowserRouter([
	{path:'/', element:<HomePage/>},
	{path:'/nuevo-ciudad', element: <NuevoCiudadPage/>},
	{path:'/ver-persona/:id', element: <VerPersonaPage/>},
	{path:'/nuevo-persona', element:<NuevoPersonaPage/>},
	{path:'/ver-ciudad/:id', element:<VerCiudadPage/>},
	{path:'/editar-persona/:id', element:<EditarPersonaPage/>},
	{path:'/ver-departamento/:id', element: <VerDepartamentoPage/>}
])


  ReactDOM.render(
  				<React.StrictMode>
					<RouterProvider router={router}/>
  				</React.StrictMode>, document.getElementById('react'));
