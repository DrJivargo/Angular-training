import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup, FormsModule, ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {GrayComponent, GrayOptions} from './gray/gray.component';
import {JsonPipe} from '@angular/common';

export function checkRegExp ( regExp: RegExp ):  ValidatorFn {
  return ( control: AbstractControl ): ValidationErrors | null => {
    const forbidden = regExp.test( control.value );
    return !forbidden ? { forbidden: { value: control.value } } : null;
  }
}

export const conformPassword : ValidatorFn = (
  control: AbstractControl // AbstractControl является всей FormGroup
): ValidationErrors | null => {
  return control.value.password_one === control.value.password_two ? null : {PasswordDoNotMatch: true};
}

interface TemplateFormI {
  login: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-black',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    FormsModule,
    GrayComponent
  ],
  templateUrl: './black.component.html',
  styleUrl: './black.component.scss'
})
  export class BlackComponent implements OnInit {

  public templateForm = {
    login:'Sale',
    email:'',
    password:'',
  }

  public fbForm!: FormGroup;

  public customForm!: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  public get skills(): FormArray {
    return this.fbForm.get('skills') as FormArray;
  }

  public myForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  })

  public validatorsForm = new FormGroup({
      mail: new FormControl('',checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)),
      password_one : new FormControl('' ),
      password_two: new FormControl('' ),
    },
    conformPassword
  );


  public ngOnInit(): void {
    this.customForm = this._fb.group({
      rate : [3]
    })
    this.fbForm = this._fb.group({
      name : ['Sale'],
      skills : this._fb.array([]),
    });

  }

  public ratesOptions: GrayOptions = {
    rates : 5,
    text : 'Оцените наш курс по Angular',
  }

  public handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert('Форма не валидна')
    }
    console.log(this.myForm.get(['login'])?.value)
  }

  public handleValidator() {
    if (this.validatorsForm.valid) {
      console.log(this.validatorsForm.value);
    } else {
      alert('Форма не валидна')
    }
    console.log(this.validatorsForm.get(['login'])?.value)
  }

  public newSkill(): FormGroup {
    return this._fb.group({
      skill: '',
      experience : '',
    })
  }

  public addSkill(): void {
    this.skills.push(this.newSkill());
  }

  public removeSkill(i: number): void {
    this.skills.removeAt(i)
  }

  public onSubmit(): void {
    console.log(this.fbForm.value);
  }
}
