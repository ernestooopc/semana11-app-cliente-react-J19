package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Persona {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String apellido;
	private String cuidad;

	private Persona() {}

	public Persona(String nombre, String apellido, String cuidad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.cuidad = cuidad;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Persona employee = (Persona) o;
		return Objects.equals(id, employee.id) &&
			Objects.equals(nombre, employee.nombre) &&
			Objects.equals(apellido, employee.apellido) &&
			Objects.equals(cuidad, employee.cuidad);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, apellido, cuidad);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCuidad() {
		return cuidad;
	}

	public void setCuidad(String cuidad) {
		this.cuidad = cuidad;
	}

	@Override
	public String toString() {
		return "Persona" +
			"id=" + id +
			", Nombre='" + nombre + '\'' +
			", Apellido='" + apellido + '\'' +
			", Cuidad='" + cuidad + '\'' +
			'}';
	}
}