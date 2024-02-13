import { Test, TestingModule } from '@nestjs/testing';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';

describe('ActivitiesController', () => {
  let controller: ActivitiesController;

  const mockActivitiesService = {
    findActivities: jest.fn,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivitiesController],
      providers: [ActivitiesService],
    })
      .overrideProvider(ActivitiesService)
      .useValue(mockActivitiesService)
      .compile();

    controller = module.get<ActivitiesController>(ActivitiesController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call activities service without params', async () => {
    jest.spyOn(mockActivitiesService, 'findActivities');

    controller.findActivities();

    expect(mockActivitiesService.findActivities).toHaveBeenCalled();
  });

  it('should call activities service with title param', async () => {
    jest.spyOn(mockActivitiesService, 'findActivities');

    controller.findActivities({ title: 'test' });

    expect(mockActivitiesService.findActivities).toHaveBeenCalledWith({
      title: 'test',
    });
  });

  it('should call activities service with supplier param', async () => {
    jest.spyOn(mockActivitiesService, 'findActivities');

    controller.findActivities({ withSupplier: true });

    expect(mockActivitiesService.findActivities).toHaveBeenCalledWith({
      withSupplier: true,
    });
  });
});
