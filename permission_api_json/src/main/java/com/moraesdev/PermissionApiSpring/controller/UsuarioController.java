package com.moraesdev.PermissionApiSpring .controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.moraesdev.PermissionApiSpring .model.Usuario;
import com.moraesdev.PermissionApiSpring .repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UsuarioController {
    @Autowired
    UsuarioRepository repo;
    Usuario usuario;

    @GetMapping("/usuario/{id}")
    public ResponseEntity<Usuario> getUsuario(@PathVariable("id") long id){
        
        usuario = repo.findById(id);

        if(usuario != null){
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(
        method = RequestMethod.GET,
        value = "/usuarios",
        produces = "application/json"
    )
    @ResponseBody
    public ResponseEntity<String> getUsuarios(){
        List<Usuario> usuarios = repo.findAll();
        //MOCK   
        //String usuariosEmJson = " [{'usuarios': [{'id':1,'nome':'MARCOS PAULO', 'permissoes':{'perfis': ['Advogado'],'paginas': [{'papeis': {'read': true, 'create': false, 'delete': false, 'update': false}, 'endereco': 'projetos/lista-testadores'}]}}, {'id':2,'nome':'JANETE SANTOS','permissoes':{'perfis': ['Advogado'],'paginas': [{'papeis': {'read': true, 'create': false, 'delete': false, 'update': false},'endereco': 'projetos/lista-testadores'}]}} ]";
    
        if(usuarios != null ){
            return new ResponseEntity<>(new Gson().toJson(usuarios), HttpStatus.OK);
        }
        
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        
    }
}
