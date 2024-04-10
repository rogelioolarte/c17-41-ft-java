package payzo.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import payzo.app.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
