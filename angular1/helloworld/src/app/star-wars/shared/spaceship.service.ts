import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockSpaceships } from './spaceship.mock';
import ISpaceship from '../spaceship/spaceship.interface';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {
  constructor() {}

  /* This is synchronous.
    Meaning that it will block the browser for user input.
    If it were to call an actual webserver, that is not an option.
    We need an asynchronous operation here.*/
  getMock(): ISpaceship[] {
    return mockSpaceships;
  }

  getMockAsync(): Observable<ISpaceship[]> {
    return of(mockSpaceships);
  }
}
