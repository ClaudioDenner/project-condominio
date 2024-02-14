import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Housing } from 'src/housings/entities/housing.entity';

@Entity({
    name:'peoples'
})
export class Peoples {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    full_name:string;
    
    @Column()
    cpf:string;
    
    @Column()
    type:string;
    
    @ManyToOne(() => Housing, (housing) => housing.id)
    housing:Housing;
}
