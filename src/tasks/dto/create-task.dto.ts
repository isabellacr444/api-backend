// src/tasks/dto/create-task.dto.ts
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
export class CreateTaskDto {
@IsString()
@IsNotEmpty()
@MaxLength(50)
title: string;
@IsString()
@IsNotEmpty()
@MaxLength(200)
description: string;
}