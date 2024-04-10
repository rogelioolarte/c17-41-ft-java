package payzo.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import payzo.app.Model.User;
import payzo.app.dto.UserDtoLogin;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmailAndPassword(String email, String password);
}
