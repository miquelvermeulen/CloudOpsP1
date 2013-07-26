package example.rest;

import org.codehaus.jackson.annotate.JsonProperty;

import java.io.Serializable;
import java.util.List;

public class Data implements Serializable {

    @JsonProperty
    public String refPrice;

    @JsonProperty
    public List<Insurance> insuranceList;

    @JsonProperty
    public List<Situation> situationList;

    @JsonProperty
    public List<Models> modelsList;

    public Data() {
    }

    public Data(String refPrice,  List<Insurance> insuranceList,  List<Situation> situationList,  List<Models> modelsList) {
        this.refPrice = refPrice;
        this.insuranceList = insuranceList;
        this.situationList = situationList;
        this.modelsList = modelsList;
    }
}
