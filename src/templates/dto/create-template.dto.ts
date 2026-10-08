import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsObject } from 'class-validator';

export class CreateTemplateDto {
  @ApiProperty({ example: 'visual', description: 'Template name: visual, functional, performance' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Plantilla para capturar errores de interfaz', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: { severity: 'low', tone: 'direct' }, required: false })
  @IsObject()
  @IsOptional()
  defaultData?: Record<string, any>;
}