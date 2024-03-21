import { Controller, Get } from '@nestjs/common';

@Controller('addresses')
export class AddressesController {
  @Get()
  findAll() {
    return {
      id: 1,
      address1: '1525 south 8th street',
      city: 'st louis',
      state: 'Missouri',
      zip: '63104',
    };
  }
}
