package com.moraesdev.PermissionApiSpring .repository;

import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.moraesdev.PermissionApiSpring .model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findById(long id);
    
    @Cacheable("usuarios")
    List<Usuario> findAll();
    
}
