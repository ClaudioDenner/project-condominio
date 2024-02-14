import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Housing } from './housing.entity';

@Entity({
    name:'locations'
})
export class Locations {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    batch:string;

    @Column()
    number:string;

    @Column()
    status:string;

    @OneToOne(() => Housing, (housing) => housing.id, {cascade:true})
    housing:Housing;

    
}
