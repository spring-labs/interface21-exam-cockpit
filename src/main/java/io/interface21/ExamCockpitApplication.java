package io.interface21;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EntityScan
@EnableWebMvc
@EnableJpaRepositories
public class ExamCockpitApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamCockpitApplication.class, args);
	}
}
