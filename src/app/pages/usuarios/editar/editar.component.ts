import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'hub-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,  
    Validators.email, 
  ]); 

  constructor() { }
  ngOnInit() {
  }

}
