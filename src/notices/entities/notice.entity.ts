import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Housing } from 'src/housings/entities/housing.entity';


@Entity({
    name:'notices'
})
export class Notice {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;
    
    @Column()
    body:string;
    
    @Column()
    date:string;
    
    @ManyToOne(() => Housing, (housing) => housing.id)
    housing:Housing;
}
