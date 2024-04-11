package payzo.app.Repository.impl;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import payzo.app.Model.User;
import payzo.app.Repository.UserRepository;
import payzo.app.dto.*;

import java.math.BigDecimal;

@Service
@Transactional
public class UserRepositoryImpl {

    @Autowired
    private  UserRepository userRepository;



    public ResponseUserComplete findByUserId(Long id) {
        var user =  userRepository.findById(id);
        return new ResponseUserComplete(user);
    }

    public responseUser userRegister(UserDtoRegister userDtoRegister) {
        var userCreated = userRepository.save(new User(userDtoRegister));
        return new responseUser(userCreated);
    }

    public responseUser userLogin(UserDtoLogin userDtoLogin) {
        var userCreated = userRepository.findByEmailAndPassword(userDtoLogin.email(),userDtoLogin.password());
        return new responseUser(userCreated);
    }

    public responseUser userUpdate(UserDtoUpdate userDtoRegister, Long id) {
        var user = userRepository.findById(id);
        if(userDtoRegister.name()!=null) user.get().setName(userDtoRegister.name());
        if(userDtoRegister.lastname()!=null) user.get().setLastname(userDtoRegister.lastname());
        if(userDtoRegister.dni()!=null) user.get().setDni(userDtoRegister.dni());
        if(userDtoRegister.email()!=null) user.get().setEmail(userDtoRegister.email());
        if(userDtoRegister.password()!=null) user.get().setPassword(userDtoRegister.password());
        if(userDtoRegister.avatar()!=null) user.get().setAvatar(userDtoRegister.avatar());
        if(userDtoRegister.cbuDollar()!=null) user.get().setCbuDollar(userDtoRegister.cbuDollar());
        var userUpdate = userRepository.save(new User(user) );
        return new responseUser(userUpdate);

    }

    public responseUser userWalletCharge(UserDtoWallet userDtoWallet, Long id) {
        var user = userRepository.findById(id).orElseThrow(()-> new EntityNotFoundException("Order not found"));
        var chargeWallet = new BigDecimal(userDtoWallet.quantity());
        if(chargeWallet.compareTo(BigDecimal.ZERO)  <=0 ) throw new ArithmeticException("Error al procesar los claculos");
        if(user.getWallet() == null) user.setWallet(BigDecimal.valueOf((0)));
        user.setWallet(user.getWallet().add(chargeWallet));
        return new responseUser(user);
    }
}
