package com.example.springboot.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.Firestore;

import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;

@Service
public class FirebaseInitializer {
    @PostConstruct
    public void initialize() {
        try {
            FileInputStream serviceAccount = new FileInputStream("./firebaseDB.json");
            System.out.println(serviceAccount);  // TODO: Remove this
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

    public Firestore getFirebase() {
        return FirestoreClient.getFirestore();
    }
}