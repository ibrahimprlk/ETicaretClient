import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from './services/admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from './services/common/http-client.service';
import { Router } from '@angular/router';
import { AuthService } from './services/common/auth.service';
declare var $: any;//jquery


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ETicaretClient';

  constructor(public authService: AuthService, private toastrService: CustomToastrService, private router: Router) {
    authService.identityCheck();
  }



  signOut() {
    localStorage.removeItem("accessToken");
    this.authService.identityCheck();
    this.router.navigate([""]);
    this.toastrService.message("Oturum kapatılmıştır!", "Oturum Kapatıldı", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopRight
    });
  }
}


// $(document).ready(()=>{
//   alert("Merhaba")
// })
//$.get("https://localhost:7121/api/products/get")