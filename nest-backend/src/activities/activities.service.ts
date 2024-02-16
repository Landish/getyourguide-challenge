import { Injectable } from '@nestjs/common';
import { Activity } from './entities/activity.entity';
import { FindActivitiesDto } from './dto/find-activities.dto';
import { SuppliersService } from '../suppliers/suppliers.service';
import ACTIVITIES_DATA from './data/activities.data';
@Injectable()
export class ActivitiesService {
  constructor(private readonly suppliersService: SuppliersService) {}

  findActivities(findActivitiesDto?: FindActivitiesDto): Activity[] {
    const suppliersMap = this.suppliersService.getAllAsMap();

    // Simulates a database query for getting all suppliers
    let filteredActivities = ACTIVITIES_DATA;

    // Simulates a WHERE clause on activities table
    if (findActivitiesDto?.title) {
      filteredActivities = filteredActivities.filter((activity) =>
        activity.title
          .toLowerCase()
          .includes(findActivitiesDto.title.toLowerCase()),
      );
    }

    // Simulates a join between activities and suppliers tables
    if (findActivitiesDto?.withSupplier) {
      filteredActivities = filteredActivities.map((activity) => {
        return {
          ...activity,
          supplier: suppliersMap[activity.supplierId],
        };
      });
    }

    return filteredActivities;
  }
}
