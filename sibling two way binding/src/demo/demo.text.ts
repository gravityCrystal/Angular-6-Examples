import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'demo',
  template: `<div><input type="text" [(ngModel)]='test' (keypress)='updateModelToParent()'></div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TextComponent  {
  @Input() userData: string;
  // @Output() updateModel: new EventEmitter();
  @Output() updateModel: EventEmitter<any> = new EventEmitter();
  // @Output() close: EventEmitter<any> = new EventEmitter();
  test: string;
  updateModelToParent() {
    this.updateModel.emit(this.test);
  };
}
