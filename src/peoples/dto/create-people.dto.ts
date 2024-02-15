import { IsString, IsNumber } from "class-validator";

export class CreatePeopleDto {

    @IsString()
    full_name:string;
    
    @IsString()
    cpf:string;

    @IsString()
    type:string;

    @IsNumber()
    housing:number;
}
