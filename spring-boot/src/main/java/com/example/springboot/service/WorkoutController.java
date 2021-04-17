package com.example.springboot.service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.example.springboot.service.FirebaseInitializer;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.FirebaseApp;
import com.google.firebase.internal.FirebaseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.workout.Category;
import com.example.springboot.workout.Workout;

@RestController
@RequestMapping("/api")
public class WorkoutController {

    @Autowired
    private static FirebaseInitializer fbDB;

    

    @RequestMapping("/hello")
    public String sayHi() {
        return "{'Name': 'Dylan'}";
    }

    @GetMapping("/getAllWorkouts")
    public static List<Workout> getAllWorkouts() throws InterruptedException, ExecutionException {
        List<Workout> workoutList = new ArrayList<Workout>();
        CollectionReference workout = fbDB.getFirebase().collection("workouts");
        ApiFuture<QuerySnapshot> snapshot = workout.get();
        for (DocumentSnapshot doc : snapshot.get().getDocuments()) {
            workoutList.add(doc.toObject(Workout.class));
        }
        return workoutList;
    }

    @GetMapping("/getCategories")
    public List<Category> getAllCategories() throws InterruptedException, ExecutionException {
        List<Category> categories = new ArrayList<Category>();
        CollectionReference category = fbDB.getFirebase().collection("categories");
        ApiFuture<QuerySnapshot> snapshot = category.get();
        for (DocumentSnapshot doc : snapshot.get().getDocuments()) {
            categories.add(doc.toObject(Category.class));
        }
        return categories;
    }

    @PostMapping("/createWorkout")
    public String createNewWorkout(@RequestBody Workout workout) throws InterruptedException, ExecutionException {
        CollectionReference workoutCollection = fbDB.getFirebase().collection("workouts");
        ApiFuture<WriteResult> collectionsApiFuture = workoutCollection.document(workout.getCreator())
                .set(workout);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

}