package payzo.app.Controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import payzo.app.Model.User;
import payzo.app.Repository.impl.UserRepositoryImpl;
import payzo.app.dto.UserDtoRegister;

import java.net.PasswordAuthentication;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class userController {

    @Autowired
    private UserRepositoryImpl userRepositoryImpl;

   // @Autowired
   // PasswordEncoder passwordEncoder;

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<?> getById(@PathVariable Long id) {

        try {
            return ResponseEntity.status(HttpStatus.OK).body(userRepositoryImpl.findByUserId(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }

    @PostMapping(value = "/register", produces = "application/json")
    public ResponseEntity<?> getLogin (@RequestBody @Valid UserDtoRegister userDtoRegister) {

        try {
            return ResponseEntity.status(HttpStatus.OK).body(userRepositoryImpl.userRegister(userDtoRegister));
        } catch (Exception e) {
            return  ResponseEntity.status(HttpStatus.CONFLICT).body("El usuario ya existe n/"+e.getMessage());
        }
    }
}
