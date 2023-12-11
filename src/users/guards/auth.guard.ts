import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.session.userID) {
      throw new BadRequestException('you are not authenticated !💥');
    }

    return request.session.userID;
  }
}
