import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IONIC_IMPORTS } from '../../ionic-imports';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    ...IONIC_IMPORTS,
    CommonModule,
  ],
})
export class ButtonComponent  implements OnInit {
  @Input() type: string = 'primary';
  @Input() text!: string;
  // @TODO: Import icon options and create enum for those
  @Input() icon: string = 'add-outline';
  @Input() hasIcon: boolean = false;
  @Input() fill: string = 'default';
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter();

  constructor() {
    addIcons({addOutline});
   }

  ngOnInit() {}

  clicked() {
    this.onClick.emit();
  }

}
