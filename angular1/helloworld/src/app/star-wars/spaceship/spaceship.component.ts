import { Component, OnInit, Input } from '@angular/core';
import ISpaceship from './spaceship.interface';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.css']
})
export class SpaceshipComponent implements OnInit {
  @Input() public spaceship: ISpaceship;

  constructor() { }

  ngOnInit(): void {
    // this.spaceship = {
    //   engine: 'TURBOLAZOR',
    //   exploded: false,
    //   size: 1000,
    //   speed: 50000000000,
    //   type: 'STARDESTROYER FALCON EPIC'
    // } as ISpaceship;
  }

}
