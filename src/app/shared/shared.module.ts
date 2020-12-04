import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { InputFieldModule } from './input-field/input-field.module';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputFieldModule,
    HeaderModule
  ],
  exports:[
    ButtonModule,
    InputFieldModule,
    HeaderModule,
  ]
})
export class SharedModule { }
