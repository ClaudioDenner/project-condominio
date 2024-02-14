import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from 'typeorm';
import { Housing } from 'src/housings/entities/housing.entity';

@Entity({
    name:'finances'
})
export class Finance {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    expiration:string;

    @Column()
    value:number;

    @Column()
    status:string;

    @ManyToOne (() => Housing, (housing) => housing.id)
    housing:Housing;
}
