package com.ukeess.task;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:config/error-page-html.properties")
public class UkeessTestTaskApplication {

	public static void main(String[] args) {
		SpringApplication.run(UkeessTestTaskApplication.class, args);
	}
}
