package payzo.app.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TransactionDtoBuy(
        @NotNull
        Long userId,
        @NotNull
        Long currencyId,
        @NotBlank
        String transactionType,

        @NotNull
        int quantity,
        @NotNull
        Double pricePerUnit

) {

}
