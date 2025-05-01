import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../../entities/user'; // Bu interface'yi senin projen belirliyor
import { UserService } from '../../../services/common/model/user.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';
import { Create_User } from '../../../contracts/users/create_user';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  frm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastrService: CustomToastrService, spinner: NgxSpinnerService) {
    super(spinner)
  }
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      nameSurname: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.maxLength(250), Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    }, {
      validators: (group: AbstractControl): ValidationErrors | null => {
        let sifre = group.get("password").value;
         let sifreTekrar = group.get("passwordConfirm").value;
        return sifre === sifreTekrar ? null : { notSame: true };
      }
    });
  }

  get component() {
    return this.frm.controls;
  }

  async onSubmit(user: User) {
    this.submitted = true;

    if (this.frm.invalid) {
      return;
    }

    const result: Create_User = await this.userService.create(user);
     if (result.succeeded)
       this.toastrService.message(result.message, "Kullanıcı Kaydı Başarılı", {
         messageType: ToastrMessageType.Success,
         position: ToastrPosition.TopRight
       })
     else
       this.toastrService.message(result.message, "Hata", {
         messageType: ToastrMessageType.Error,
         position: ToastrPosition.TopRight
       })
  }
}
