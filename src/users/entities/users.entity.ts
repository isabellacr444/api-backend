// src/users/entities/user.entity.ts
import { ProductEntity } from '../../products/entities/products.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // O email deve ser único
  email: string;

  @Column()
  password: string; // Vamos fazer o hash desta senha na próxima aula

  // Define o lado "Um" da relação. Um usuário tem muitos produtos.
  @OneToMany(() => ProductEntity, (product) => product.user)
  products: ProductEntity[];
}