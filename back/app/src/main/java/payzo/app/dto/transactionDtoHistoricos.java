package payzo.app.dto;

import jakarta.persistence.*;
import payzo.app.Model.Currency;
import payzo.app.Model.TRANSACTIONTYPE;
import payzo.app.Model.Transaction;
import payzo.app.Model.User;

import java.math.BigDecimal;
import java.util.Date;

public record transactionDtoHistoricos(
        Long transactionId,
        //  User userId,
        String currency,
        TRANSACTIONTYPE type,
        int quantity,
        BigDecimal total,
        Date transactionDate
) {

    public  transactionDtoHistoricos(Transaction transaction){
        this(transaction.getTransactionId(),transaction.getCurrency().getProductName(),transaction.getType(),transaction.getQuantity(),transaction.getTotal(),transaction.getTransactionDate());
    }
}
