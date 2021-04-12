package com.example.springboot.workout;

import java.util.List;

// TODO: Everything need a getter and setter to be not public 
public class Workout {
    public String caption;
    public List<String> categories;
    public String desc;
    public List<Vote> users;
    public int vote;
    public String creator;

    // Required no-arg contructor
    public Workout() {}

    public Workout(String caption, String desc) {
        this.caption = caption;
        this.desc = desc;
    }

    public String getCreator() {
        return this.creator;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

}

class Vote {
    public int value;  // Either 1 or -1
    public String user;  // email of user
}