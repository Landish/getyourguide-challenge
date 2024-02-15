import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { FindActivitiesDto } from './dto/find-activities.dto';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activitiesRepository: Repository<Activity>,
  ) {}

  findActivities(findActivitiesDto?: FindActivitiesDto): Promise<Activity[]> {
    const filterOptions: FindManyOptions<Activity> = {};

    // Apply title filter if requested
    if (findActivitiesDto?.title) {
      filterOptions.where = filterOptions.where || {};
      filterOptions.where['title'] = Like(`%${findActivitiesDto.title}%`);
    }

    // Load supplier relations if requested
    if (findActivitiesDto?.withSupplier) {
      filterOptions.relations = filterOptions.relations || {};
      filterOptions.relations['supplier'] = true;
    }

    return this.activitiesRepository.find(filterOptions);
  }

  clean() {
    return this.activitiesRepository.clear();
  }
}
