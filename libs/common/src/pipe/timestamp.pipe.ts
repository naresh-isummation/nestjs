import {PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class timeStampPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): Date {
    const date = new Date(value * 1000);
    if (isNaN(date.getTime())) {
      throw new BadRequestException('Invalid timestamp');
    }
    return date;
  }
}
