package it.jayan.trade.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.UniqueElements;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;


import javax.persistence.*;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Table(name = "tda_user")
public class User {

    //public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    private @Id @GeneratedValue long userId;
    private String username;
    private String firstName;
    private String lastName;

    private @JsonIgnore String password;
    private String email;
    private String role;
    private @Version @JsonIgnore long version;

    public User() {
    }

    public User(String username, String firstName, String lastName, String password, String email, String roles) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.setPassword(password);
        this.email = email;
        this.role = roles;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = (password);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public long getVersion() {
        return version;
    }

    public void setVersion(long version) {
        this.version = version;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", role=" + role +
                ", version=" + version +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return getUserId() == user.getUserId() &&
                getVersion() == user.getVersion() &&
                Objects.equals(getUsername(), user.getUsername()) &&
                Objects.equals(getFirstName(), user.getFirstName()) &&
                Objects.equals(getLastName(), user.getLastName()) &&
                Objects.equals(getPassword(), user.getPassword()) &&
                Objects.equals(getEmail(), user.getEmail()) &&
                Objects.equals(getRole(), user.getRole());
    }

    @Override
    public int hashCode() {

        int result = Objects.hash(getUserId(), getUsername(), getFirstName(), getLastName(), getPassword(), getEmail(), getVersion());
        result = 31 * result + Objects.hashCode(getRole());
        return result;
    }
}
