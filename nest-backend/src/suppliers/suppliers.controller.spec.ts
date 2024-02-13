import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';

describe('SuppliersController', () => {
  let controller: SuppliersController;

  const mockSupplierService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersController],
      providers: [SuppliersService],
    })
      .overrideProvider(SuppliersService)
      .useValue(mockSupplierService)
      .compile();

    controller = module.get<SuppliersController>(SuppliersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
