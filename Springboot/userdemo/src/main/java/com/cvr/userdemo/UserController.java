package com.cvr.userdemo;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/users")
public class UserController {

	private UserService userService;
	public UserController(UserService userService) {
		this.userService=userService;
	}
	
	@PostMapping()
	@ResponseStatus(HttpStatus.CREATED)
	public void save( @RequestBody User user) {
		userService.save(user);
	}
	
	@GetMapping("/{id}")
	public User find(@PathVariable int id) {
		return userService.find(id).get();
	}
	
	@GetMapping()
	public List<User> findAll(){
		return userService.findAll();
	}
}
