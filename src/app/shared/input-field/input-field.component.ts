import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { InputConfig } from 'src/app/core/models/input';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  inputData: string = '';

  @Input() inputConfig: InputConfig;

  constructor() { }

  ngOnInit() {
  }

}
