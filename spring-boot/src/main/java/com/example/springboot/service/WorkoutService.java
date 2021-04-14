package com.example.springboot.service;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;
import com.example.springboot.workout.Workout;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.WriteResult;
import com.google.api.core.ApiFuture;

@Service
public class WorkoutService {

    
    public String createWorkout(Workout workout) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("workouts").document(workout.getCreator())
                .set(workout);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }
}
