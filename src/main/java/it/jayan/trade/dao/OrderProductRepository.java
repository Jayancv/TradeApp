package it.jayan.trade.dao;

import it.jayan.trade.model.OrderProduct;
import it.jayan.trade.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}