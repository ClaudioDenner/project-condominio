import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Housing } from 'src/housings/entities/housing.entity';

@Entity({
    name:'requests'
})
export class Request {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;
    
    @Column()
    description:string;
    
    @Column()
    status:string;
    
    @ManyToOne(() => Housing, (housing) => housing.id)
    house:Housing;

}
