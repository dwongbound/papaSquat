import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;


@Service 
public class FirebaseInitialize {
    @PostConstruct
    public void initialize() {
        try {
            FileInputStream serviceAccount = new FileInputStream("../../../../secrets/firebaseDB.json");
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://papaSquat-test.firebaseio.com/")
                    .build();
            FirebaseApp.initializeApp(options);
            System.out.println("=> Connected to database.");
        } catch (Exception err) {
            System.out.println("=> Error in connecting to DB: " + err);
        }
    }
}