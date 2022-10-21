package com.moraesdev.PermissionApiSpring.model;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@Getter
@Setter
@ToString(includeFieldNames=true)
public class Permissoes {
    @JsonProperty("PERFIS")
    List<String> perfis = new ArrayList<>();
    @JsonProperty("PAGINAS")
    List<Pagina> paginas = new ArrayList<>();
}
