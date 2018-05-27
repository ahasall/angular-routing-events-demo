import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamListResolver implements Resolve<string[]> {

  constructor() {
  }

  getTeams(): Observable<string[]> {
    return of(['Barcelona', 'Real Madrid', 'Toulouse', 'PSG']).pipe(delay(2000));
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.getTeams();
  }
}
