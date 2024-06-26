import { Module } from '@nestjs/common';
import { AddressesController } from './addresses.controller';

@Module({
  controllers: [AddressesController],
  providers: [],
})
export class AddressesModule {}
