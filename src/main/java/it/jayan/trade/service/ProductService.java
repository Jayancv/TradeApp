package it.jayan.trade.service;

import com.sun.istack.NotNull;
import it.jayan.trade.model.Product;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Min;

@Validated
public interface ProductService {

    @NotNull
    Iterable<Product> getAllProducts();

    Product getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);

    Product save(Product product);
}