//package it.jayan.trade;
//
//import it.jayan.trade.dao.UserRepository;
//import it.jayan.trade.model.User;
//import org.omg.IOP.ServiceContextHolder;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//
//
//@Component
//@RepositoryEventHandler(User.class)
//public class SpringDataEventHandler {
//
//    private final UserRepository userRepo;
//
//    @Autowired
//    public SpringDataEventHandler(UserRepository userRepo) {
//
//        this.userRepo = userRepo;
//    }
//
////    public void applyUserInformationSecurityContext(User user){
////
////        String username = SecurityContextHolder.getContext().getAuthentication().getName();
////
////        User user1 = this.userRepo.findByUsername(username);
////        if(user1 == null){
////            User user2 = new User("User1","User1","User1","User1","User1","ROLE_MANAGER");
////        }
////
////    }
//
//}
