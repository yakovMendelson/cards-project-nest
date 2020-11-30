import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let admin= context.switchToHttp().getRequest().headers.admin;
    if (admin=='admin')
    return true
    else
      return false
    
}
}
