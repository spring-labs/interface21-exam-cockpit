package io.interface21;

import javax.servlet.Filter;

import org.ameba.app.SpringProfiles;
import org.ameba.http.PermitAllCorsConfigurationSource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * Bootstrapper.
 */
@SpringBootApplication
@EntityScan
@EnableWebMvc
@EnableJpaRepositories
public class ExamCockpitApplication {

	/**
	 * Permit all from everywhere - on a developers notebook.
	 *
	 * @return The instance
     */
	@Profile(SpringProfiles.DEVELOPMENT_PROFILE)
	public
	@Bean
	Filter corsFilter() {
		return new CorsFilter(new PermitAllCorsConfigurationSource());
	}

	/**
	 * Boot up!
	 *
	 * @param args Some args
     */
	public static void main(String[] args) {
		SpringApplication.run(ExamCockpitApplication.class, args);
	}
}
