import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() error: boolean = false;
  @Input() message: string = '';

  get errorClass() {
    return this.error ? 'bg-[#f24667]' : 'bg-[#42ADF0]';
  }

}
