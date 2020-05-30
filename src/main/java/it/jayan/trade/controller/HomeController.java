package it.jayan.trade.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String getIndex(){
        return "index";
    }
    @RequestMapping("/components")
    public String getCom(){
        return "index";
    }

    @RequestMapping("/landing-page")
    public String getLanding(){
        return "landingPage";
    }

    @RequestMapping("/profile-page")
    public String getProfile(){
        return "index";
    }

    @RequestMapping("/contact-page")
    public String getContact(){
        return "index";
    }




    @RequestMapping("/home")
    public String getHome(){
        return "home";
    }
}
