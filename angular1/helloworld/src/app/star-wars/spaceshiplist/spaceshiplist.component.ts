import { Component, OnInit } from '@angular/core';
import ISpaceship from '../spaceship/spaceship.interface';

@Component({
  selector: 'app-spaceshiplist',
  templateUrl: './spaceshiplist.component.html',
  styleUrls: ['./spaceshiplist.component.css']
})
export class SpaceshiplistComponent implements OnInit {

  constructor() { }

  spaceships: ISpaceship[] = [
    {
        engine: 'TURBOLAZOR',
        exploded: false,
        size: 1000,
        speed: 50000000000,
        type: 'STARDESTROYER FALCON EPIC'
      } as ISpaceship,
      {
        engine: 'THUNDERBIRD 2',
        exploded: true,
        size: 2222,
        speed: 2313212,
        type: 'THUNDERBIRDS'
      } as ISpaceship
  ];

  ngOnInit(): void {

  }

}
