import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChangeBgColorDirective } from './directive/changebgcolor.directive';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ChangeBgColorDirective],
  bootstrap: [AppComponent],
})
export class AppModule { }
