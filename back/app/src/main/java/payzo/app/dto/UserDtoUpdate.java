package payzo.app.dto;

import jakarta.validation.constraints.NotBlank;

public record UserDtoUpdate(


        String name,

        String lastname,

        String dni,

        String email,

        String password,

        String avatar,

        String cbuDollar
) {

}
