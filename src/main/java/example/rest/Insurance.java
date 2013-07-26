package example.rest;

import org.codehaus.jackson.annotate.JsonProperty;

import java.io.Serializable;

public class Insurance implements Serializable {

    @JsonProperty
    public String name;

    @JsonProperty
    public String value;

    public Insurance() {
    }

    public Insurance(String name, String value) {
        this.name = name;
        this.value = value;
    }
}
