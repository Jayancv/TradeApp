package it.jayan.trade.dao;

import it.jayan.trade.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}