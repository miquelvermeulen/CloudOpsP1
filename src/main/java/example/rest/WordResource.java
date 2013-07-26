package example.rest;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.inject.Inject;

@Singleton
@Produces(MediaType.APPLICATION_JSON)
@Path("/rest/data")
public class WordResource {
    private IDictionaryService dict;

    @Inject
    WordResource(IDictionaryService dict) {
        this.dict = dict;
    }

    @GET
    @Path("{word}")
    public Word getWord(@PathParam("word") String w) throws Exception {
        return dict.getWord(w);
    }

    @GET
    @Path("/all")
    public Data getData() throws Exception {

        List<Insurance> insuranceList = new ArrayList();
        insuranceList.add(new Insurance("Third-party insurance","1.3"));
        insuranceList.add(new Insurance("Comprehensive insurance","1.9"));

        List<Situation> situationList = new ArrayList();
        situationList.add(new Situation("I have a 50% bonus for more than 6 years","0.5"));
        situationList.add(new Situation("Drive less than 8000 km per year","0.9"));
        situationList.add(new Situation("I am a teacher","1.2"));
        situationList.add(new Situation("Young driver","2.3"));

        List<Models> modelsList = new ArrayList();
        modelsList.add(new Models("FORD","0.8","Transit Connect","0.7" ));
        modelsList.add(new Models("FORD","0.8","Tourneo","0.8" ));
        modelsList.add(new Models("FORD","0.8","Taunus","0.9" ));
        modelsList.add(new Models("FORD","0.8","Scorpio","1" ));
        modelsList.add(new Models("FORD","0.8","Galaxy","1.1" ));
        modelsList.add(new Models("DATSUN","1","Violet","0.8" ));
        modelsList.add(new Models("DATSUN","1","Sunny","0.9" ));
        modelsList.add(new Models("DATSUN","1","Stanza","1" ));
        modelsList.add(new Models("DATSUN","1","Patrol","1.2" ));
        modelsList.add(new Models("DATSUN","1","Bluebird","1.4" ));
        modelsList.add(new Models("ROVER","1.2","Streetwise","0.9" ));
        modelsList.add(new Models("ROVER","1.2","Freight","1" ));
        modelsList.add(new Models("ROVER","1.2","Estate","1.2" ));
        modelsList.add(new Models("ROVER","1.2","820","1.4" ));
        modelsList.add(new Models("ROVER","1.2","825","1.7" ));

        Data data = new Data("400", insuranceList, situationList, modelsList);
        return data;
    }



    @GET
    @Path("/")
    public List<Word> list() throws Exception {
        return dict.getWords();
    }

    @POST
    @Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    @Path("/")
    public Word getWord(Word w) throws Exception  {
        return dict.addWord(w);
    }
}
