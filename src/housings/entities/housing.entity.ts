import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Locations } from './locations.entity';
import { Finance } from 'src/finances/entities/finance.entity';
import { Request } from 'src/requests/entities/request.entity';
import { Peoples } from 'src/peoples/entities/people.entity';

@Entity({
    name:'housings'
})
export class Housing {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    owner_full_name:string;
    
    @Column({unique:true})
    owner_cpf:string;
    
    @Column()
    owner_birthday:string;
    
    @OneToOne(() => Locations, (location) => location.id, {cascade:true})
    location:Locations;

    @OneToMany(() => Finance, (finance) => finance.id, {cascade:true})
    finances:Finance[];

    @OneToMany(() => Request, (request) => request.id, {cascade:true})
    requests:Request[];

    @OneToMany(() => Peoples, (people) => people.id, {cascade:true})
    peoples:Peoples[];

}
