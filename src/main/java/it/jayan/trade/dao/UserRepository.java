package it.jayan.trade.dao;

import it.jayan.trade.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
//import org.springframework.security.access.prepost.PreAuthorize;


public interface UserRepository extends PagingAndSortingRepository<User ,Long> {

//    User findByUsername(String name);
//
//    @PreAuthorize("hasRole('ROLE_MANAGER')")
//    @Override
//    User save(@Param("user") User user);
//
//    @PreAuthorize("hasRole('ROLE_MANAGER')")
//    @Override
//    void delete(@Param("user") User user);
//
//    @PreAuthorize("hasRole('ROLE_MANAGER')")
//    @Override
//    Iterable<User> findAll();
//
//    @PreAuthorize("hasRole('ROLE_MANAGER')")
//    @Override
//    Iterable<User> findAll(Sort sort);
//
//    @PreAuthorize("hasRole('ROLE_MANAGER')")
//    @Override
//    Page<User> findAll(Pageable pageable);
}
