import { Injectable } from '@nestjs/common';
import { Supplier } from './entities/supplier.entity';
import SUPPLIERS_DATA from './data/suppliers.data';

@Injectable()
export class SuppliersService {
  findAll(): Supplier[] {
    // Simulates a database query for getting all suppliers
    return SUPPLIERS_DATA;
  }

  // Converts the array of suppliers to a map and returns it
  getAllAsMap() {
    return this.findAll().reduce((acc, supplier) => {
      acc[supplier.id] = supplier;
      return acc;
    }, {});
  }
}
