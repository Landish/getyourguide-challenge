import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';

describe('SuppliersController', () => {
  let controller: SuppliersController;

  const mockSupplierService = {
    findAll: jest.fn,
  };

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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call findAll method on suppliers service', () => {
    jest.spyOn(mockSupplierService, 'findAll');

    controller.findAll();

    expect(mockSupplierService.findAll).toHaveBeenCalled();
  });
});
