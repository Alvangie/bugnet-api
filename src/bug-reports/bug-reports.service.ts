import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBugReportDto } from './dto/create-bug-report.dto';
import { UpdateBugReportDto } from './dto/update-bug-report.dto';

@Injectable()
export class BugReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createBugReportDto: CreateBugReportDto) {
    return this.prisma.bugReport.create({
      data: {
        ...createBugReportDto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.bugReport.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, userId: string) {
    const report = await this.prisma.bugReport.findUnique({
      where: { id },
    });

    if (!report) {
      throw new NotFoundException(`Bug report with ID ${id} not found`);
    }

    if (report.userId !== userId) {
      throw new ForbiddenException('You do not have access to this resource');
    }

    return report;
  }

  async update(id: string, userId: string, updateBugReportDto: UpdateBugReportDto) {
    await this.findOne(id, userId);

    return this.prisma.bugReport.update({
      where: { id },
      data: updateBugReportDto,
    });
  }

  async remove(id: string, userId: string) {
    await this.findOne(id, userId);

    return this.prisma.bugReport.delete({
      where: { id },
    });
  }
}