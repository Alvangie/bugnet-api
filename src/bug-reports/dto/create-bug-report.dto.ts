import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt, IsIn } from 'class-validator';

export class CreateBugReportDto {
  @ApiProperty({ example: 'Error al enviar formulario' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'El botón de envío se queda congelado tras el primer click' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: '1. Ir al formulario. 2. Llenar campos. 3. Apretar Enviar.' })
  @IsString()
  @IsNotEmpty()
  steps: string;

  @ApiProperty({ example: 'El formulario se envía con éxito' })
  @IsString()
  @IsNotEmpty()
  expectedResult: string;

  @ApiProperty({ example: 'Se congela la pantalla' })
  @IsString()
  @IsNotEmpty()
  actualResult: string;

  @ApiProperty({ example: 'medium', enum: ['low', 'medium', 'high', 'critical'], required: false })
  @IsString()
  @IsOptional()
  @IsIn(['low', 'medium', 'high', 'critical'])
  severity?: string;

  @ApiProperty({ example: 'medium', enum: ['low', 'medium', 'high'], required: false })
  @IsString()
  @IsOptional()
  @IsIn(['low', 'medium', 'high'])
  priority?: string;

  @ApiProperty({ example: 'Chrome 128 / Windows 11' })
  @IsString()
  @IsNotEmpty()
  environment: string;

  @ApiProperty({ example: 'formal', enum: ['formal', 'direct', 'detailed'], required: false })
  @IsString()
  @IsOptional()
  @IsIn(['formal', 'direct', 'detailed'])
  tone?: string;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  headerVariant?: number;
}