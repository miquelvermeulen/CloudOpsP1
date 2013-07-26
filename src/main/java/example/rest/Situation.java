package example.rest;

import org.codehaus.jackson.annotate.JsonProperty;

import java.io.Serializable;

public class Situation implements Serializable {

    @JsonProperty
    public String name;

    @JsonProperty
    public String value;

    public Situation() {
    }

    public Situation(String name, String value) {
        this.name = name;
        this.value = value;
    }
}
