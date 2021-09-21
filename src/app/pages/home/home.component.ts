import { Component, OnInit } from '@angular/core';
import { UserApi } from '../../utils/api/module/Users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private userService:UserApi,
    private fb: FormBuilder
  ) { 
    this.getAll();
  }

  async submitForm(value:any) {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    const response = await this.userService.post(value);
    console.log(response);
    location.reload();
  }

  
  
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      Age: [null, [Validators.required]],
    });
  }

  async getAll(){
    console.log(await this.userService.getAll());
  }

}
