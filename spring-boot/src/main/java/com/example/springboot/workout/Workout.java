// package com.example.springboot.workout;

// @Entity
// public class Workout {
// // TODO: change to match the Firebase objects (import classes from Firebase)
// private @Id @GeneratedValue int id;
// private int user;
// private int category;
// private String description;
// private String caption;
// private int votes;

// private Workout() {}

// public Workout(int user, int category, String description, String caption,
// int votes) {
// this.user = user;
// this.category = category;
// this.description = description;
// this.caption = caption;
// this.votes = votes;
// }

// @Override
// public boolean equals(Object o) {
// if (this == o) return true;
// if (o == null || getClass() != o.getClass()) return false;
// Workout workout = (Workout) o;
// return Objects.equals(id, workout.id) &&
// Objects.equals(user, workout.user) &&
// Objects.equals(caption, workout.caption) &&
// Objects.equals(description, workout.description) &&
// Objects.equals(caption, workout.caption) &&
// Objects.equals(votes, workout.votes);
// }

// @Override
// public int hashCode() {
// return Objects.hash(id, user, category, description, caption, votes);
// }

// public int getId() {
// return id;
// }

// public void setId(Long id) {
// this.id = id;
// }

// public int getUser() {
// return user;
// }

// public void setUser(int user) {
// this.user = user;
// }

// public int getCategory() {
// return category;
// }

// public void setCategory(int category) {
// this.category = category;
// }

// public String getDescription() {
// return description;
// }

// public void setDescription(String description) {
// this.description = description;
// }

// public String getCaption() {
// return caption;
// }

// public void setCaption(String caption) {
// this.caption = caption;
// }

// public int getVotes() {
// return votes;
// }

// public void setVotes(int votes) {
// this.votes = votes;
// }

// @Override
// public String toString() {
// return "Workout{" +
// "id=" + id +
// ", user='" + user + '\'' +
// ", category='" + category + '\'' +
// ", description='" + description + '\'' +
// ", caption='" + caption + '\'' +
// ", votes='" + votes + '\'' +
// '}';
// }
// }
