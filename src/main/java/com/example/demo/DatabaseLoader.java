package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final PersonaRepository repositoryP;

	private final CiudadRepository repositoryC;

	@Autowired
	public DatabaseLoader(PersonaRepository repositoryP, CiudadRepository repositoryC){
		this.repositoryP = repositoryP;
		this.repositoryC = repositoryC;
	}


	

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryP.save(new Persona("Frodo", "Baggins", "Lima"));
		this.repositoryP.save(new Persona("Aldo", "Caceres", "Lima"));
		this.repositoryC.save(new Ciudad("villa el salvador", "15452","Lima"));
	}
}