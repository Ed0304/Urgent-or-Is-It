import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor (private readonly jwtService:JwtService){}

  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>{

    const request = context.switchToHttp().getRequest()
    const authHeader = request.headers.authorization;
    

    if(!authHeader){
      return false;
    }

    const [type,token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      return false;
    }

    try {
        const payload = await this.jwtService.verifyAsync(token);

        request.user = payload;

        return true;
    } catch {
        return false;
    }

    
  }
}
