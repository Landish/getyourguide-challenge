import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from './suppliers.service';

describe('SuppliersService', () => {
  let service: SuppliersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuppliersService],
    }).compile();

    service = module.get<SuppliersService>(SuppliersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return list of suppliers', async () => {
    const suppliers = await service.findAll();

    expect(suppliers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          address: expect.any(String),
          city: expect.any(String),
          country: expect.any(String),
          zip: expect.any(String),
        }),
      ]),
    );
  });
});
