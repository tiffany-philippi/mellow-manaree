import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eye, eyeOff } from 'ionicons/icons';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonInput, IonButton, IonIcon],
})
export class TextFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = true;
  @Input() value: string = '';

  inputType: string = 'text';
  showPassword: boolean = false;

  constructor() {
    addIcons({ eye, eyeOff });
  }

  ngOnInit() { 
    this.inputType = this.type;
    // @TODO: Add validations
  }
  
  togglePassword() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }
}