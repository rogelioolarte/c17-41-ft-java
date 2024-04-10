package payzo.app.Repository.impl;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import payzo.app.Model.User;
import payzo.app.Repository.UserRepository;
import payzo.app.dto.UserDtoLogin;
import payzo.app.dto.UserDtoRegister;
import payzo.app.dto.responseUser;

import java.util.Optional;

@Service
@Transactional
public class UserRepositoryImpl {

    @Autowired
    private  UserRepository userRepository;



    public responseUser findByUserId(Long id) {
        var user =  userRepository.findById(id);
        return new responseUser(user);
    }

    public responseUser userRegister(UserDtoRegister userDtoRegister) {
        var userCreated = userRepository.save(new User(userDtoRegister));
        return new responseUser(userCreated);
    }

    public responseUser userLogin(UserDtoLogin userDtoLogin) {
        var userCreated = userRepository.findByEmailAndPassword(userDtoLogin.email(),userDtoLogin.password());
        return new responseUser(userCreated);
    }
}
