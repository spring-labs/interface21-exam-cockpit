package io.interface21;

import org.ameba.app.SpringProfiles;
import org.ameba.http.PermitAllCorsConfigurationSource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Bootstrapper.
 */
@SpringBootApplication // the master annotation! Enable the world!
@EnableJpaRepositories // as far we don't need nested repos we don't this here
//@EnableAuthorizationServer
public class ExamCockpitApplication extends WebMvcConfigurerAdapter {

	/**
	 * Permit all from everywhere - on a developers notebook.
	 *
	 * @return The instance
     */
	@Profile({SpringProfiles.DEVELOPMENT_PROFILE, "HEROKU-DEV"})
	public
	@Bean
	FilterRegistrationBean corsFilter() {
		FilterRegistrationBean frb = new FilterRegistrationBean();
		frb.setFilter(new CorsFilter(new PermitAllCorsConfigurationSource()));
		frb.setOrder(0);
		frb.addUrlPatterns("/*");
		return frb;
	}

	/**
	 * Boot up!
	 *
	 * @param args Some args
     */
	public static void main(String[] args) {
		SpringApplication.run(ExamCockpitApplication.class, args);
	}

	/**
	 * {@inheritDoc} <p>This implementation is empty.
	 *
	 * @param registry
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
	}
}
