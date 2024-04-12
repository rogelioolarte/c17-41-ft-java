package payzo.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import payzo.app.Model.Currency;
import payzo.app.Model.User;
import payzo.app.dto.ResponseUserComplete;
import payzo.app.dto.UserDtoLogin;
import payzo.app.dto.responseUser;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmailAndPassword(String email, String password);

   // @Query("SELECT DISTINCT c FROM User u JOIN u.transaction t JOIN t.currency c WHERE u = :usuario")
   // List<Currency> findCurrenciesByUsuario(@Param("usuario") User usuario);

    @Query(value = "SELECT p.crypto_id,p.product_name,COALESCE(SUM(CASE WHEN t.transaction_type = 'buy' THEN t.quantity ELSE -t.quantity END), 0) AS stock\n" +
            "FROM currency p LEFT JOIN transactions t ON p.crypto_id = t.transaction_id AND t.user_id =:usuarioId GROUP BY p.crypto_id;", nativeQuery = true)
    List<?> findByIdComplete(@Param("usuarioId")Long usuarioId);
}
