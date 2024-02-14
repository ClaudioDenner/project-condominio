import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Housing } from 'src/housings/entities/housing.entity';

@Entity({
    name:'auth'
})
export class Auth {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    login:string;

    @Column()
    password:string;

    @Column()
    privilege:string;

    @OneToOne(() => Housing, (housing) => housing.id)
    housing:Housing;
}
//