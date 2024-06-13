/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from './images/image.module';
import { Image } from './images/entities/image.entity'; 


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'root',
      username: 'postgres',
      entities: [Image],
      database: 'ImageDB',
      synchronize: true,
      logging: true,
    }),
    ImageModule,
  ],
})
export class AppModule {}
