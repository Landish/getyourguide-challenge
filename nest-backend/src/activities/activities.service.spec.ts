import { Test, TestingModule } from '@nestjs/testing';
import { ActivitiesService } from './activities.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { Supplier } from '../suppliers/entities/supplier.entity';
import { Like } from 'typeorm';

describe('ActivitiesService', () => {
  let service: ActivitiesService;

  const mockActivitiesRepository = {
    find: (args) => jest.fn(args),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActivitiesService,
        {
          provide: getRepositoryToken(Activity),
          useValue: mockActivitiesRepository,
        },
      ],
    }).compile();

    service = module.get<ActivitiesService>(ActivitiesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call activities repository without params', async () => {
    jest.spyOn(mockActivitiesRepository, 'find');

    await service.findActivities();

    expect(mockActivitiesRepository.find).toHaveBeenCalled();
  });

  it('should call activities repository with title param', async () => {
    jest.spyOn(mockActivitiesRepository, 'find');

    await service.findActivities({ title: 'test' });

    expect(mockActivitiesRepository.find).toHaveBeenCalledWith({
      where: {
        title: Like(`%test%`),
      },
    });
  });

  it('should call activities repository with supplier param', async () => {
    jest.spyOn(mockActivitiesRepository, 'find');

    await service.findActivities({ withSupplier: true });

    expect(mockActivitiesRepository.find).toHaveBeenCalledWith({
      relations: {
        supplier: true,
      },
    });
  });

  it('should return list of activities', async () => {
    jest
      .spyOn(service, 'findActivities')
      .mockResolvedValue([
        createActivityStub({ title: 'First Activity' }),
        createActivityStub({ title: 'Second Activity' }),
      ]);

    const activities = await service.findActivities();

    expect(activities).toHaveLength(2);
    expect(activities[0].title).toBe('First Activity');
    expect(activities[1].title).toBe('Second Activity');
  });

  it('should return list of activities with supplier', async () => {
    const supplier = createSupplierStub({});

    jest
      .spyOn(service, 'findActivities')
      .mockResolvedValue([
        createActivityStub({ title: 'First Activity', supplier }),
        createActivityStub({ title: 'Second Activity' }),
      ]);

    const activities = await service.findActivities({ withSupplier: true });
    expect(activities[0].supplier).toBe(supplier);
    expect(activities[1].supplier).not.toBe(supplier);
  });
});

export function createActivityStub(overrides?: Partial<Activity>): Activity {
  return {
    id: Date.now(),
    title: 'First Activity',
    price: 100,
    currency: 'USD',
    rating: 4.5,
    specialOffer: false,
    supplierId: 1,
    ...overrides,
  };
}

export function createSupplierStub(overrides?: Partial<Supplier>): Supplier {
  return {
    id: Date.now(),
    name: 'Supplier Name',
    address: 'Berliner Str. 12',
    country: 'Germany',
    city: 'Berlin',
    zip: '12345',
    ...overrides,
  };
}
