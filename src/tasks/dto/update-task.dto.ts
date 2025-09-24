// src/tasks/dto/update-task.dto.ts
import { IsString, IsOptional, MaxLength, IsIn } from 'class-validator';
export class UpdateTaskDto {
@IsString()
@IsOptional()
@MaxLength(50)
title?: string;
@IsString()
@IsOptional()
@MaxLength(200)
description?: string;
@IsOptional()
@IsIn(['PENDING', 'DONE']) // Status deve ser 'PENDING' ou 'DONE'
status?: 'PENDING' | 'DONE';
}


