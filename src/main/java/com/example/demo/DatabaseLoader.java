package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final PersonaRepository repositoryP;

	private final CiudadRepository repositoryC;

	private final CiudadanoRepository repositoryCI;

	private final DepartamentoRepository repositoryD;

	@Autowired
	public DatabaseLoader(PersonaRepository repositoryP, CiudadRepository repositoryC,DepartamentoRepository repositoryD, CiudadanoRepository repositoryCI){
		this.repositoryP = repositoryP;
		this.repositoryC = repositoryC;
		this.repositoryD = repositoryD;
		this.repositoryCI = repositoryCI;

	}


	

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryP.save(new Persona("Frodo", "Baggins", "Lima"));
		this.repositoryP.save(new Persona("Aldo", "Caceres", "Lima"));
		this.repositoryP.save(new Persona("Ernesto", "Caceres", "Lima"));

		this.repositoryC.save(new Ciudad("villa el salvador", "15452","Lima"));
		this.repositoryC.save(new Ciudad("ATE", "15452","Lima"));
		this.repositoryC.save(new Ciudad("VMT", "15452","Lima"));

		Departamento depa = new Departamento("Lima");
		this.repositoryD.save(depa);

		Ciudad ciudad = new Ciudad("Villa el salvdor","15452","Lima");
		this.repositoryC.save(ciudad);

		Persona persona = new Persona("Ernesto", "Caceres", "Lima");
		this.repositoryP.save(persona);





		this.repositoryCI.save(new Ciudadano(depa,persona,ciudad));


	}
}