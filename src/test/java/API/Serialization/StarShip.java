package API;

import API.Pojo.StarShipPojo;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Test;

import java.io.IOException;
import java.net.URISyntaxException;


public class StarShip {
    @Test
    public void Test1() throws URISyntaxException, IOException {
        HttpClient httpClient = HttpClientBuilder.create().build();
        URIBuilder uriBuilder = new URIBuilder();
        //https://swapi.dev/api/starships
        uriBuilder.setScheme("https");
        uriBuilder.setHost("swapi.dev");
        uriBuilder.setPath("api/starships");

        HttpGet httpGet = new HttpGet(uriBuilder.build());
        httpGet.setHeader("Accept" , "application/json");

        HttpResponse response = httpClient.execute(httpGet);

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES , false);
         StarShipPojo deserializedResponse=objectMapper.readValue(response.getEntity().getContent() , StarShipPojo.class);
        System.out.println(deserializedResponse.getCount());
        System.out.println(deserializedResponse.getResults().get(0));

    }
}
