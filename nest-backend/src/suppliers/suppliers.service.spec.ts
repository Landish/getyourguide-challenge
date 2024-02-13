import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './entities/supplier.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('SuppliersService', () => {
  let service: SuppliersService;

  const mockSupplierRepository = {
    create: jest.fn((dto) => dto),
    save: jest.fn((dto) => dto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuppliersService,
        {
          provide: getRepositoryToken(Supplier),
          useValue: mockSupplierRepository,
        },
      ],
    }).compile();

    service = module.get<SuppliersService>(SuppliersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a supplier', async () => {
    const supplier = await service.create({
      name: 'Supplier Name',
      address: 'Supplier Address',
      zip: '',
      city: '',
      country: '',
    });

    expect(supplier.name).toBe('Supplier Name');
    expect(supplier.address).toBe('Supplier Address');
  });
});
