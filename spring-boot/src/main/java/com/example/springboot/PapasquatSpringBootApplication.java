package com.example.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PapasquatSpringBootApplication {
	public static void main(String[] args) {
		SpringApplication.run(PapasquatSpringBootApplication.class, args);
		SpringApplication.run(FirebaseInitialize.class, args);
	}

}
