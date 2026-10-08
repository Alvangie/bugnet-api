import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BugReportsModule } from './bug-reports/bug-reports.module';
import { TemplatesModule } from './templates/templates.module';

@Module({
  imports: [ ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 100,
    }]), AuthModule, PrismaModule, BugReportsModule, TemplatesModule],
  controllers: [AppController],
  providers: [AppService, {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },],
})
export class AppModule {}
