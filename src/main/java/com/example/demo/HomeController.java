package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}
	

	@GetMapping(path = "api/departamentos/{id}/formacion")
	public @ResponseBody List<Map<String, Object>>formacion(@PathVariable Integer id){
		String sql="SELECT ciudadano.id as ID, persona.nombre as PERSONA, ciudad.nombre as CIUDAD FROM ciudadano JOIN persona ON ciudadano.id_persona=persona.id JOIN ciudad ON ciudadano.id_ciudad=ciudad.id WHERE ciudadano.id_departamento = ? ";
		List<Map<String, Object>>queryResult = jbcTemplate.queryForList(sql, id);
		return queryResult;
	}

		
	}

	/**
	 * SELECT ciudadano.id as ID, persona.nombre as PERSONA, ciudad.nombre as CIUDAD FROM ciudadano JOIN persona ON ciudadano.id_persona=persona.id JOIN ciudad ON ciudadano.id_ciudad=ciudad.id WHERE ciudadano.id_departamento = ? 
	 * 
	 * 
	 * 
	 * 
	 * 
	 */