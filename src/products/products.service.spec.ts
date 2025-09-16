// src/products/products.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductEntity } from './entities/products.entity';
import { Role } from '../common/enum/role.enum';

// Mock do repositório para simular as operações de banco de dados
const mockProductRepository = {
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
};

// Um produto de exemplo para usar nos testes
const mockProduct: ProductEntity = {
  id: 1,
  name: 'Test Product',
  price: 100,
  createdAt: new Date(),
  user: { id: 1, email: 'test@test.com', password: 'hashedpassword', role: Role.User, products: [] },
};

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: Repository<ProductEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: mockProductRepository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<Repository<ProductEntity>>(getRepositoryToken(ProductEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should find and return a product by ID', async () => {
      // Configura o mock para retornar nosso produto de teste quando 'findOne' for chamado
      mockProductRepository.findOne.mockResolvedValue(mockProduct);

      const result = await service.findOne(1);

      expect(result).toEqual(mockProduct);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 }, relations: ['user'] });
    });

    it('should throw NotFoundException if product is not found', async () => {
      // Configura o mock para retornar nulo, simulando um produto não encontrado
      mockProductRepository.findOne.mockResolvedValue(null);

      // Esperamos que a chamada ao serviço seja rejeitada com o erro correto
      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });
  });
});