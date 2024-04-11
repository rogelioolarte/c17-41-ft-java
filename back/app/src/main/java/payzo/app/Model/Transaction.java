package payzo.app.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import payzo.app.dto.TransactionDtoBuy;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table( name = "transactions")
@Entity(name = "Transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "transaction_id")
    private Long transactionId;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User userId;
    @ManyToOne
    @JoinColumn(name = "crypto_id", referencedColumnName = "cryptoId")
    private Currency cryptoId;
    @Column(name = "transaction_type")
    private TRANSACTIONTYPE type;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "price_per_unit")
    private BigDecimal pricePerUnit;
    @Column(name = "total")
    private BigDecimal total = new BigDecimal(0);
    @Column(name = "transaction_date")
    private Date transactionDate = new Date();


    public Transaction(TransactionDtoBuy transactionDtoBuy) {
        this.userId = User.builder().userId(transactionDtoBuy.userId()).build() ;
        this.cryptoId = Currency.builder().cryptoId(transactionDtoBuy.currencyId()).build();
        this.type = TRANSACTIONTYPE.valueOf(transactionDtoBuy.transactionType());
        this.quantity = transactionDtoBuy.quantity();
        this.pricePerUnit = new BigDecimal(transactionDtoBuy.pricePerUnit());
        this.total.add(new BigDecimal(transactionDtoBuy.pricePerUnit() * transactionDtoBuy.quantity()));
    }
}
