package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "ciudades", path = "ciudades")
public interface CiudadRepository extends CrudRepository<Ciudad, Long> {
    
}
