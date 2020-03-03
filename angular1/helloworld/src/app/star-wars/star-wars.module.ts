import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceshipComponent } from './spaceship/spaceship.component';
import { SpaceshiplistComponent } from './spaceshiplist/spaceshiplist.component';

@NgModule({
  declarations: [SpaceshipComponent, SpaceshiplistComponent],
  exports: [SpaceshipComponent, SpaceshiplistComponent],
  imports: [
    CommonModule
  ]
})
export class StarWarsModule { }
