import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { PaginationDto } from './dto/pagination.dto';

@ApiTags('problem-endpoints')
@Controller('problems')
export class ProblemsController {
  constructor(private problemService: ProblemsService) {}

  @Post('')
  @UseGuards(JwtGuard)
  @ApiSecurity('JWT-auth')
  @ApiOperation({ summary: 'create a coding problem' })
  createProblem(@Body() dto: CreateProblemDto, @Req() req) {
    return this.problemService.createProblem(dto, req.user.email);
  }

  @Get(':problemId')
  @ApiOperation({ summary: 'get a problem by id' })
  getProblemById(@Param('problemId') problemId: string) {
    return this.problemService.getProblemById(problemId);
  }

  @Get('')
  @ApiOperation({ summary: 'get all problems ' })
  getAllProblems(@Query() dto: PaginationDto) {
    return this.problemService.getAllProblems(dto);
  }

  @Patch(':problemId')
  @UseGuards(JwtGuard)
  @ApiSecurity('JWT-auth')
  @ApiOperation({ summary: 'update a problem ' })
  updateProblem(
    @Param('problemId') problemId: string,
    @Body() dto: UpdateProblemDto,
    @Req() req,
  ) {
    return this.problemService.updateProblem(problemId, dto, req.user.email);
  }
}
