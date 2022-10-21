package com.moraesdev.PermissionApiSpring.model;

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
@ToString(includeFieldNames = true)
public class Pagina {
    @JsonProperty("ENDERECO")
    String endereco;
    @JsonProperty("PAPEIS")
    Papeis papeis;
}
