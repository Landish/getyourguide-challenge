import { Controller, Get } from '@nestjs/common';

import * as activities from './fixtures/activities.json';

@Controller('activities')
export class ActivitiesController {
  @Get()
  getAll() {
    return activities;
  }
}
