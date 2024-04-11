package payzo.app.Repository.impl;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import payzo.app.Model.Currency;
import payzo.app.Model.TRANSACTIONTYPE;
import payzo.app.Model.Transaction;
import payzo.app.Repository.CurrencyRepository;
import payzo.app.Repository.TransactionRepository;
import payzo.app.dto.TransactionDtoBuy;

import java.math.BigDecimal;

@Service
@Transactional
public class TransactionRepositoryImpl  {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private CurrencyRepositoryImpl currencyRepositoryImpl;


    public Transaction buyCurrency(TransactionDtoBuy transactionDtoBuy) {
        var transactionCreated = new Transaction(transactionDtoBuy);
        Currency currency = currencyRepositoryImpl.traaerCurrencyPorId(transactionDtoBuy.currencyId());
        transactionCreated.setType(TRANSACTIONTYPE.buy);
        transactionCreated.setCurrency(currency);
        transactionCreated.setPricePerUnit(new BigDecimal(currency.getCurrentPrice()));
        transactionCreated.setTotal(new BigDecimal(currency.getCurrentPrice() * transactionDtoBuy.quantity()));
        return transactionRepository.save(transactionCreated);
    }
}
