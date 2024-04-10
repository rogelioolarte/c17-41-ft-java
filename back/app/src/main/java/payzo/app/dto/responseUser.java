package payzo.app.dto;

import payzo.app.Model.User;

import java.math.BigDecimal;
import java.util.Optional;

public record responseUser(Long id, String name, String avatar, BigDecimal wallet) {
    public responseUser(User userCreated) {
        this(userCreated.getUserId(), userCreated.getName(), userCreated.getAvatar(), userCreated.getWallet());
    }


    public responseUser(Optional<User> user) {
        this(user.get().getUserId(), user.get().getName(), user.get().getAvatar(), user.get().getWallet());
    }
}
