import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonConfig } from 'src/app/core/models/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonConfig: ButtonConfig
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  buttonClicked() {
    this.buttonClick.emit();
  }

}
