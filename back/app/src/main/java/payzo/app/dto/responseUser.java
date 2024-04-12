package payzo.app.dto;

import payzo.app.Model.Transaction;
import payzo.app.Model.User;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public record responseUser(Long id, String name, String avatar, BigDecimal wallet, List<Transaction> transactions) {
    public responseUser(User userCreated) {
        this(userCreated.getUserId(), userCreated.getName(), userCreated.getAvatar(), userCreated.getWallet(),userCreated.getTransacciones() );
    }


    public responseUser(Optional<User> user) {
        this(user.get().getUserId(), user.get().getName(), user.get().getAvatar(), user.get().getWallet(), user.get().getTransacciones());
    }
}
