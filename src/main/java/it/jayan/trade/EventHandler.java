package it.jayan.trade;

import it.jayan.trade.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.hateoas.server.EntityLinks;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler(User.class)
public class EventHandler {
    private final SimpMessagingTemplate webSocket;
    private final EntityLinks entityLinks;

    @Autowired
    public EventHandler(SimpMessagingTemplate webSocket, EntityLinks entityLinks) {
        this.webSocket = webSocket;
        this.entityLinks = entityLinks;
    }

    @HandleAfterCreate
    public void newUser(User newUser) {
        this.webSocket.convertAndSend(
                WebSocketConfiguration.MESSAGE_PREFIX + "/newUser", getPath(newUser));
    }

    @HandleAfterDelete
    public void deleteUser(User deleteUser) {
        this.webSocket.convertAndSend(
                WebSocketConfiguration.MESSAGE_PREFIX + "/deleteUser", getPath(deleteUser));

    }

    @HandleAfterSave
    public void updateUser(User updatedUser) {
        this.webSocket.convertAndSend(
                WebSocketConfiguration.MESSAGE_PREFIX + "/updateUser", getPath(updatedUser));
    }


    private String getPath(User user) {
        return this.entityLinks.linkForItemResource(user.getClass(), user.getUserId()).toUri().getPath();
    }
}
