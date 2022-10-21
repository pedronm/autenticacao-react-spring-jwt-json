package com.moraesdev.PermissionApiSpring.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class Papeis {
    @JsonProperty("CREATE")
    boolean create = false;
    @JsonProperty("UPDATE")
    boolean update = false;
    @JsonProperty("READ")
    boolean read = false;
    @JsonProperty("DELETE")
    boolean delete = false;
}
