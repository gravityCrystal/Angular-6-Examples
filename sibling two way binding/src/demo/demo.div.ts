import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: `<h1>Hello {{name}}!</h1>`,
  // styles: [`h1 { font-family: Lato; }`]
})
export class DivComponent  {
  @Input() name: string;
}
