package payzo.app.Repository.impl;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import payzo.app.Model.Currency;
import payzo.app.Model.TRANSACTIONTYPE;
import payzo.app.Model.Transaction;
import payzo.app.Repository.TransactionRepository;
import payzo.app.Repository.UserRepository;
import payzo.app.dto.CurrencyDtoList;
import payzo.app.dto.TransactionDtoBuy;
import payzo.app.dto.UserDtoUpdate;
import payzo.app.dto.responseUser;

import java.math.BigDecimal;
import java.util.List;

@Service
@Transactional
public class TransactionRepositoryImpl  {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private CurrencyRepositoryImpl currencyRepositoryImpl;

    @Autowired
    private UserRepositoryImpl userRepositoryImpl;

    @Autowired
    private UserRepository userRepository;
    public responseUser buyCurrency(TransactionDtoBuy transactionDtoBuy) {
        var transactionCreated = new Transaction(transactionDtoBuy);
        Currency currency = currencyRepositoryImpl.traaerCurrencyPorId(transactionDtoBuy.currencyId());
        transactionCreated.setType(TRANSACTIONTYPE.buy);
        transactionCreated.setCurrency(currency);
        transactionCreated.setPricePerUnit(new BigDecimal(currency.getCurrentPrice()));
        double totalCuenta = currency.getCurrentPrice() * transactionDtoBuy.quantity();
        var ususario = userRepositoryImpl.findByUserId(transactionDtoBuy.userId());
        if(totalCuenta > Double.valueOf(String.valueOf(ususario.getWallet()))) throw new RuntimeException("El usuario no posee dinero");
        ususario.setWallet(ususario.getWallet().subtract(new BigDecimal(String.valueOf(totalCuenta))));
        UserDtoUpdate ususarioActualizado =  userRepositoryImpl.userUpdate(new UserDtoUpdate(ususario), ususario.getUserId());
        transactionCreated.setTotal(new BigDecimal(totalCuenta));
         transactionRepository.save(transactionCreated);

        List<CurrencyDtoList> listaCurrencyForUser = userRepository.findByIdComplete(ususario.getUserId());

        return responseUser.builder()
                .id(ususario.getUserId())
                .name(ususario.getName())
                .avatar(ususario.getAvatar())
                .wallet(ususario.getWallet())
                .currencyDtoList(listaCurrencyForUser)
                .build();

    }
}
