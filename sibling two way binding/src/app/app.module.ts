import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DivComponent } from '../demo/demo.div';
import { TextComponent } from '../demo/demo.text';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TextComponent, DivComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
