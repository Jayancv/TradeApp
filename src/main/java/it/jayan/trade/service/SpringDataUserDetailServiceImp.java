//package it.jayan.trade.service;
//
//import it.jayan.trade.dao.UserRepository;
//import it.jayan.trade.model.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//
//@Component
//public class SpringDataUserDetailServiceImp implements UserDetailsService {
//
//    private final UserRepository userRepo ;
//
//    @Autowired
//    public SpringDataUserDetailServiceImp(UserRepository userRepo) {
//        this.userRepo = userRepo;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = this.userRepo.findByUsername(username);
//        return  new org.springframework.security.core.userdetails.User(
//                user.getUsername(),
//                user.getPassword(),
//                AuthorityUtils.createAuthorityList(user.getRole())
//        );
//    }
//}
