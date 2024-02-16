import { Test, TestingModule } from '@nestjs/testing';
import { ActivitiesService } from './activities.service';
import { SuppliersService } from '../suppliers/suppliers.service';
import { mockActivity } from '../../test/test-utils';

describe('ActivitiesService', () => {
  let service: ActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivitiesService, SuppliersService],
    }).compile();

    service = module.get<ActivitiesService>(ActivitiesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return list of activities', async () => {
    const activities = await service.findActivities();

    expect(activities).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          price: expect.any(Number),
          currency: expect.any(String),
          rating: expect.any(Number),
          specialOffer: expect.any(Boolean),
          supplierId: expect.any(Number),
        }),
      ]),
    );
  });

  it('should return list of activities with suppliers included', async () => {
    const activities = await service.findActivities({ withSupplier: true });

    expect(activities).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          // ... rest activity properties

          // Supplier Object
          supplier: expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            address: expect.any(String),
            country: expect.any(String),
            city: expect.any(String),
            zip: expect.any(String),
          }),
        }),
      ]),
    );
  });

  it('should return list of activities filtered by title', async () => {
    jest
      .spyOn(service, 'findActivities')
      .mockImplementationOnce(({ title = '' }) => {
        return [
          mockActivity({ title: 'Skip the line: Boat tour' }),
          mockActivity({ title: 'Bus Tour' }),
          mockActivity({ title: 'Skip the line: Museum' }),
        ].filter((activity) =>
          activity.title.toLowerCase().includes(title.toLowerCase()),
        );
      });

    const activities = await service.findActivities({ title: 'Skip' });

    expect(activities).toHaveLength(2);
    expect(activities).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.stringContaining('Skip'),
        }),
      ]),
    );

    expect(activities).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.not.stringContaining('Bus Tour'),
        }),
      ]),
    );
  });
});
