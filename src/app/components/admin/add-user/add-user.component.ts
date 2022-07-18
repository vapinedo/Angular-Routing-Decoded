import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveDataI } from 'src/app/interfaces/save-data.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, SaveDataI {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }

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
