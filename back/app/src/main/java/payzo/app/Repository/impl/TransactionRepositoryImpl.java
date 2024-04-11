package payzo.app.Repository.impl;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import payzo.app.Model.Transaction;
import payzo.app.Repository.TransactionRepository;
import payzo.app.dto.TransactionDtoBuy;

@Service
@Transactional
public class TransactionRepositoryImpl  {

    @Autowired
    private TransactionRepository transactionRepository;


    public Transaction buyCurrency(TransactionDtoBuy transactionDtoBuy) {
        var transactionCreated = new Transaction(transactionDtoBuy);
        return transactionRepository.save(transactionCreated);
    }
}
