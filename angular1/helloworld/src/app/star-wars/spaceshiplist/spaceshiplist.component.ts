import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from '../shared/spaceship.service';
import ISpaceship from '../spaceship/spaceship.interface';

@Component({
  selector: 'app-spaceshiplist',
  templateUrl: './spaceshiplist.component.html',
  styleUrls: ['./spaceshiplist.component.css']
})
export class SpaceshiplistComponent implements OnInit {
  spaceships: ISpaceship[];

  constructor(private readonly spaceshipService: SpaceshipService) {}

  ngOnInit(): void {
    this.spaceships = this.spaceshipService.getMock(); // synchronous. Blocks everything.

    const observable = this.spaceshipService.getMockAsync();
    observable.subscribe(ships => (this.spaceships = ships)); // async. Does not block anything


  }
}
