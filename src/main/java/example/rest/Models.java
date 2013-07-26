package example.rest;

import org.codehaus.jackson.annotate.JsonProperty;

import java.io.Serializable;

public class Models implements Serializable {

    @JsonProperty
    public String name;

    @JsonProperty
    public String value;

    @JsonProperty
    public String make;

    @JsonProperty
    public String makeValue;

    public Models() {
    }

    public Models(String make, String makeValue, String name, String value) {
        this.make = make;
        this.makeValue = makeValue;
        this.name = name;
        this.value = value;
    }
}
