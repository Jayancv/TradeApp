package it.jayan.trade.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "product")
public class Product {
    private @Id @GeneratedValue long productID;
    private String productName;
    private String description;
    private String imgLink;
    private String count;
    private String avail;
    private @Version
    @JsonIgnore long version;

    public Product(String productName, String description, String imgLink, String count, String avail) {
        this.productName = productName;
        this.description = description;
        this.imgLink = imgLink;
        this.count = count;
        this.avail = avail;
    }

    public long getProductID() {
        return productID;
    }

    public void setProductID(long productID) {
        this.productID = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }

    public String getAvail() {
        return avail;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Product)) return false;
        Product product = (Product) o;
        return getProductID() == product.getProductID() &&
                getVersion() == product.getVersion() &&
                Objects.equals(getProductName(), product.getProductName()) &&
                Objects.equals(getDescription(), product.getDescription()) &&
                Objects.equals(getImgLink(), product.getImgLink()) &&
                Objects.equals(getCount(), product.getCount()) &&
                Objects.equals(getAvail(), product.getAvail());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getProductID(), getProductName(), getDescription(), getImgLink(), getCount(), getAvail(), getVersion());
    }

    public void setAvail(String avail) {
        this.avail = avail;
    }

    public long getVersion() {
        return version;
    }

    public void setVersion(long version) {
        this.version = version;
    }
}
