import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Injectable()
export class TemplatesService {
constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createTemplateDto: CreateTemplateDto) {
    return this.prisma.template.create({
      data: {
        ...createTemplateDto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.template.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, userId: string) {
    const template = await this.prisma.template.findUnique({
      where: { id },
    });

    if (!template) {
      throw new NotFoundException(`Template with ID ${id} not found`);
    }

    if (template.userId !== userId) {
      throw new ForbiddenException('You do not have access to this resource');
    }

    return template;
  }

  async update(id: string, userId: string, updateTemplateDto: UpdateTemplateDto) {
    await this.findOne(id, userId);

    return this.prisma.template.update({
      where: { id },
      data: updateTemplateDto,
    });
  }

  async remove(id: string, userId: string) {
    await this.findOne(id, userId);

    return this.prisma.template.delete({
      where: { id },
    });
  }
}