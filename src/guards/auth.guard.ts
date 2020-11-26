import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from 'src/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private dataSER: UsersService, private jwt: JwtService){}
 
canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   let token= context.switchToHttp().getRequest().body.token;
   try {
    this.jwt.verify(token);
     return true;
   } catch (error) {
     return false
   }
   
   

   
    
  }
}
