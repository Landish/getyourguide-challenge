import { Controller, Get, Query } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { FindActivitiesDto } from './dto/find-activities.dto';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  findActivities(@Query() findActivitiesDto?: FindActivitiesDto) {
    return this.activitiesService.findActivities(findActivitiesDto);
  }
}
