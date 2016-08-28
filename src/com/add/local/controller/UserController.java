package com.add.local.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.add.local.user.UserOperations;


@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserOperations user;
	
	@RequestMapping(value = "/add/{name}/{password}/{email}/{age}", method = RequestMethod.GET, consumes = "application/json", produces = "application/json" )
	public @ResponseBody String addUser(@PathVariable String name,@PathVariable String password,@PathVariable String email,@PathVariable String age) {
		String result="Hello ";		
		user.AddUser();
		return result;
	}
	
}