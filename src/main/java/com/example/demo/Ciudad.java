package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Ciudad {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String codigoPostal;
	private String region;

	private Ciudad() {}

	public Ciudad(String nombre, String codigoPostal, String region) {
		this.nombre = nombre;
		this.codigoPostal = codigoPostal;
		this.region = region;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Ciudad employee = (Ciudad) o;
		return Objects.equals(id, employee.id) &&
			Objects.equals(nombre, employee.nombre) &&
			Objects.equals(codigoPostal, employee.codigoPostal) &&
			Objects.equals(region, employee.region);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, codigoPostal, region);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public String getCodigoPostal() {
		return codigoPostal;
	}

	public void setCodigoPostal(String codigoPostal) {
		this.codigoPostal = codigoPostal;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	

	@Override
	public String toString() {
		return "Ciudad" +
			"id=" + id +
			", Nombre='" + nombre + '\'' +
			", Codigo Postal='" + codigoPostal + '\'' +
			", Región='" + region + '\'' +
			'}';
	}
}