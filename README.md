Isabella Romão
Laiza Vitoria
Gleice kelly  

Objetivo do Projeto

Construir uma API RESTful de gerenciamento de tarefas (To-Do List),
 evoluindo de uma estrutura simples com dados em memória para uma aplicação robusta,
  multiusuário, segura e persistente usando NestJS, TypeORM, JWT e MySQL.

 Fases do Projeto
 Etapa 1: MVP - Dados em Memória
flowchart TD
    A[Início do Projeto] --> B[Criação do módulo Tasks]
    B --> C[Controller com 5 endpoints REST]
    C --> D[Service com array em memória]
    D --> E[Validação com DTOs]
    E --> F[Testes com Postman/Insomnia]

 Funcionalidades

Criar, listar, atualizar e deletar tarefas.

Validação de entrada com class-validator.

Dados armazenados temporariamente em um array.

 Tecnologias

NestJS

TypeScript

DTOs

ValidationPipe

 Etapa 2: Persistência com MySQL
flowchart TD
    A[Array em memória] --> B[Conexão com MySQL via TypeORM]
    B --> C[Criação da entidade TaskEntity]
    C --> D[Refatoração do TasksService para usar o Repository]
    D --> E[Criação e execução de Migrations]

 Funcionalidades:

Substituição do array por persistência real no banco.

Uso de TaskEntity com enum de status.

Migrations controladas com synchronize: false.

 Tecnologias:

MySQL

TypeORM

Migrations (typeorm.config.ts)

Repository Pattern