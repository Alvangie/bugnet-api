import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,
  Req, } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BugReportsService } from './bug-reports.service';
import { CreateBugReportDto } from './dto/create-bug-report.dto';
import { UpdateBugReportDto } from './dto/update-bug-report.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Request } from 'express';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email: string;
  };
}

@ApiTags('Bug Reports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('bug-reports')
export class BugReportsController {
  constructor(private readonly bugReportsService: BugReportsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new bug report' })
  @ApiResponse({ status: 201, description: 'Bug report successfully created' })
  create(@Req() req: AuthenticatedRequest, @Body() createBugReportDto: CreateBugReportDto) {
    return this.bugReportsService.create(req.user.id, createBugReportDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bug reports of current user' })
  @ApiResponse({ status: 200, description: 'List of user bug reports' })
  findAll(@Req() req: AuthenticatedRequest) {
    return this.bugReportsService.findAll(req.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific bug report by id' })
  @ApiResponse({ status: 200, description: 'Bug report details' })
  @ApiResponse({ status: 404, description: 'Bug report not found' })
  findOne(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    return this.bugReportsService.findOne(id, req.user.id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing bug report' })
  @ApiResponse({ status: 200, description: 'Bug report updated successfully' })
  update(
    @Param('id') id: string,
    @Req() req: AuthenticatedRequest,
    @Body() updateBugReportDto: UpdateBugReportDto,
  ) {
    return this.bugReportsService.update(id, req.user.id, updateBugReportDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a bug report' })
  @ApiResponse({ status: 200, description: 'Bug report deleted successfully' })
  remove(@Param('id') id: string, @Req() req: AuthenticatedRequest) {
    return this.bugReportsService.remove(id, req.user.id);
  }
}