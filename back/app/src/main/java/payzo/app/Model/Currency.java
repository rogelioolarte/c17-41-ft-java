package payzo.app.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Currency {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cryptoId;
    private ProductType productType;
    private String symbol;
    private String productName;
    private Double currentPrice;
    private Double previousPrice;
    private Date lastUpdate;
    private Boolean active;

    public enum ProductType{
        crypto,
        stock
    }
}
