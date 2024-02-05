import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseService } from './course/course.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  exports: [CourseService],
  providers: [AppService, CourseService, PrismaService],
})
export class AppModule {}
