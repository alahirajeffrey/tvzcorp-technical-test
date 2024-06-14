import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@ApiTags('submission-endpoints')
@Controller('submissions')
export class SubmissionsController {
  constructor(private submissionService: SubmissionsService) {}

  @UseGuards(JwtGuard)
  @ApiSecurity('JWT-auth')
  @Get('problem/:problemId/user/:email')
  @ApiOperation({ summary: 'get all submissions for a problem made by a user' })
  getUsersSubmission(
    @Param('problemId') problemId: string,
    @Param('email') email: string,
  ) {
    return this.submissionService.getUsersSubmission(problemId, email);
  }

  @Post('')
  @UseGuards(JwtGuard)
  @ApiSecurity('JWT-auth')
  @ApiOperation({ summary: 'create a submission for a problem' })
  createSubmission(@Body() dto: CreateSubmissionDto, @Req() req) {
    return this.submissionService.createSubmission(dto, req.user.userId);
  }

  @Get('problem/:problemId')
  @ApiOperation({
    summary: 'get all submissions for a problem made by all users',
  })
  getAllSubmissionsForAProblem(
    @Param('problemId') problemId: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.submissionService.getAllSubmissionsForAProblem(
      problemId,
      Number(page),
      Number(limit),
    );
  }

  @UseGuards(JwtGuard)
  @ApiSecurity('JWT-auth')
  @Get('problem/own/:problemId')
  @ApiOperation({ summary: 'get all owns submissions for a problem' })
  getOwnubmissionsForProblem(
    @Param('problemId') problemId: string,
    @Req() req,
  ) {
    return this.submissionService.getOwnubmissionsForProblem(
      problemId,
      req.user.userId,
    );
  }
}