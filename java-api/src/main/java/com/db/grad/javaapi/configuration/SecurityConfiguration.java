package com.db.grad.javaapi.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity

public class SecurityConfiguration extends WebSecurityConfigurerAdapter{

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    protected void configure(HttpSecurity http) throws Exception {
    	http
    	.headers().frameOptions().sameOrigin().and()
        .authorizeRequests()
            .anyRequest().permitAll() // Allow access to all endpoints
        .and()
        .csrf().disable() // Disable CSRF protection
        .httpBasic().disable();
    }
}