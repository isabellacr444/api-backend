import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


export enum TaskStatus {
  PENDING = 'PENDING',
  DONE = 'DONE',
}

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;  // Number OK, mas UUID é recomendado para APIs REST públicas

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  user: any;
}
