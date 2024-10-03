import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Kay', weapon: 'stars' },
    { id: 21, name: 'Zane', weapon: 'nunchunks' },
  ];

  getNinjas(weapon?: 'stars' | 'nunchunks') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (!ninja) {
      throw new Error('Ninja not found!!');
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    this.ninjas.push(createNinjaDto);
  }
}
