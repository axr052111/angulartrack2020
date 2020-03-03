import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StarWarsModule } from './star-wars/star-wars.module';
// Alt+Shift+O for sorting imports
// Alt+Shift+F for formatting.
// Ctrl + Z for undo.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StarWarsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
