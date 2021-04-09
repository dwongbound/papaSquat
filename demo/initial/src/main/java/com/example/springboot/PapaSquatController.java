package com.example.springboot;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
public class PapaSquatController {

	@RequestMapping("/")
	public String index() {
		return "PapaSquat Workout Tracker";
	}


}
