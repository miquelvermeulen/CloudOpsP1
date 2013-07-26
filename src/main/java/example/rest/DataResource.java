package example.rest;

import com.google.inject.Inject;

import javax.inject.Singleton;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Singleton
@Produces(MediaType.APPLICATION_JSON)
@Path("/rest/data")
public class DataResource {
    private IDictionaryService dict;

    @Inject
    DataResource(IDictionaryService dict) {
        this.dict = dict;
    }

    @GET
    @Path("/")
    public Data getData() throws Exception {
        return dict.getData();
    }

}
