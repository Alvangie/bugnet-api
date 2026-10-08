import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BugReportsService } from './bug-reports.service';
import { BugReportsController } from './bug-reports.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' }),],
  controllers: [BugReportsController],
  providers: [BugReportsService],
  exports: [BugReportsService],
})
export class BugReportsModule {}
