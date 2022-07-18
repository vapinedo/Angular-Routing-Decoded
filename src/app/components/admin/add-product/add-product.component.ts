import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveDataI } from 'src/app/interfaces/save-data.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, SaveDataI {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  get name() { return this.form.get('name'); }
  get quantity() { return this.form.get('quantity'); }

  ngOnInit(): void {
  }
  
  isDataSaved(): boolean {
    return !this.form.dirty;
  }

  onSubmit() {
    const formData = this.form.value;
    console.log({formData});
  }

}
