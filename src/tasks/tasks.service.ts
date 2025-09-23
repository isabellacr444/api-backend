
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity, TaskStatus } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly tasksRepository: Repository<TaskEntity>,
  ) {}

  // Criar uma nova tarefa
  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      status: TaskStatus.PENDING,
    });
    return await this.tasksRepository.save(task);
  }

  // Buscar todas as tarefas
  async findAll(): Promise<TaskEntity[]> {
    return await this.tasksRepository.find();
  }

  // Buscar uma tarefa pelo ID
  async findOne(id: number): Promise<TaskEntity> {
    const task = await this.tasksRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }

    return task;
  }

  // Atualizar uma tarefa existente
  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.findOne(id);

    const updated = Object.assign(task, updateTaskDto);

    return await this.tasksRepository.save(updated);
  }

  // Remover uma tarefa pelo ID
  async remove(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }
  }
}

