import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getAllNijas(@Query('type') type: string) {
    return { ninjas: ['Naruto', 'Sasuke', 'Sakura'], type };
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { name: 'Naruto', id };
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      newName: updateNinjaDto.name,
    };
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}
