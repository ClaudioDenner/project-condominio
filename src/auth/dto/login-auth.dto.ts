import { IsEmail, IsStrongPassword  } from "class-validator";

export class LoginAuthDto {

    @IsEmail()
    email:string;

    @IsStrongPassword({minLength: 5, minLowercase: 0, minNumbers: 0, minUppercase: 0, minSymbols: 0})
    pass:string;


}
