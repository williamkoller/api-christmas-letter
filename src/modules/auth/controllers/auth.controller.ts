import { User } from '@/infra/database/entities/user/user.entity';
import { UserProfileType } from '@/modules/user/types/user-profile/user-profile.type';
import { LoadUserProfileService } from '@/modules/user/services/load-user-profile/load-user-profile.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthUserDto } from '../dtos/auth-user/auth-user.dto';
import { UserTokenInputType } from '../dtos/user-token-input/user-token-input.type';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthService } from '../services/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly loadUserProfileService: LoadUserProfileService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: 200,
    description: 'User logged with successfully.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiBody({ type: AuthUserDto })
  @Post('login')
  async login(
    @Body() { email, password }: AuthUserDto,
  ): Promise<UserTokenInputType> {
    return await this.authService.validateUser({ email, password });
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: 200,
    description: 'Load data for user logged.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiBody({ type: AuthUserDto })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('view-profile')
  async loadUserProfile(@Request() user: User): Promise<UserProfileType> {
    return await this.loadUserProfileService.loadProfile({ id: user.id });
  }
}
