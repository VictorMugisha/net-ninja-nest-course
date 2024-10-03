import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request);
    // Inside here you can implement  the logic that you would put in protect route controller in Express, and make sure this always return a boolean which will be the value that determines if the user is allowed to a certain resource
    return true;
  }
}
