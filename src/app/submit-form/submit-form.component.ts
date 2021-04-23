import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  @ViewChild('data') form_data: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form_data);
    this.form_data.reset();
  }

  fillSampleData(){
    this.form_data.form.patchValue({
      userData: {
        name: "ABC",
        email: "random@gmail.com"
      }
    })
  }

}
