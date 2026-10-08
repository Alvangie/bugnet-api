import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TemplatesService } from './templates.service';
import { TemplatesController } from './templates.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' }),],
  controllers: [TemplatesController],
  providers: [TemplatesService],
  exports: [TemplatesService],
})
export class TemplatesModule {}
