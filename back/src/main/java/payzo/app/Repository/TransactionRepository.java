package payzo.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import payzo.app.Model.Transaction;
import payzo.app.Model.User;
import payzo.app.dto.transactionDtoHistoricos;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long> {
    List<Transaction> findTransactionByuserId(User id);
}
