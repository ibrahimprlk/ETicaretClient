import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../../entities/user'; // Bu interface'yi senin projen belirliyor

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  frm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      adSoyad: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      kullaniciAdi: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.maxLength(250), Validators.email]],
      sifre: ['', [Validators.required]],
      sifreTekrar: ['', [Validators.required]]
    }, {
      validators: (group: AbstractControl): ValidationErrors | null => {
        const sifre = group.get('sifre')?.value;
        const sifreTekrar = group.get('sifreTekrar')?.value;
        return sifre === sifreTekrar ? null : { notSame: true };
      }
    });
  }

  get component() {
    return this.frm.controls;
  }

  onSubmit(data: User) {
    this.submitted = true;

    if (this.frm.invalid) {
      return;
    }

    console.log('Form başarıyla gönderildi:', data);
    alert('Kayıt başarılı!');
    this.frm.reset();
    this.submitted = false;
  }
}
