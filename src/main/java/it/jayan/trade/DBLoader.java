package it.jayan.trade;

import it.jayan.trade.dao.UserRepository;
import it.jayan.trade.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.context.SecurityContext;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class DBLoader implements CommandLineRunner {
    private final UserRepository repository;

    @Autowired
    public DBLoader(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {

//        SecurityContextHolder.getContext().setAuthentication(
//                new UsernamePasswordAuthenticationToken("greg", "doesn't matter",
//                        AuthorityUtils.createAuthorityList("ROLE_MANAGER")));
//
//        this.repository.save(new User("jayan", "123", "jayan@321","123", "Vidana","ROLE_MANAGER"));
//        this.repository.save(new User("jcv", "123", "jayan@321","jcv", "Vidana", "ROLE_NONE"));
//        this.repository.save(new User("Jayan2", "jayan", "jayan@321","Jayan1", "Vidana","None"));
//        this.repository.save(new User("Jayan4", "12c3", "jayan@321","Jayan2sz", "Vidana","None"));
//        this.repository.save(new User("Jayan5", "12xx3", "jayan@321","Jayanz2", "Vidana","None"));
//        this.repository.save(new User("Jayan6", "1x23", "jayan@321","Jaysanzz2z", "Vidana","None"));
//        this.repository.save(new User("Jayan7", "12 3", "jayan@321","Jayanxzz2", "Vidana","None"));

//        SecurityContextHolder.clearContext();
    }
}
