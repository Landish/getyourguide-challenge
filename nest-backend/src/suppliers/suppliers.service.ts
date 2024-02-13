import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private suppliersRepository: Repository<Supplier>,
  ) {}
  create(createSupplierDto: CreateSupplierDto) {
    const supplier = this.suppliersRepository.create(createSupplierDto);
    return this.suppliersRepository.save(supplier);
  }

  findAll(): Promise<Supplier[]> {
    return this.suppliersRepository.find();
  }
}
