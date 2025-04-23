import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from './services/admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any;//jquery


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'ETicaretClient';

  constructor(private alertify:AlertifyService,private toastr:CustomToastrService){}

  ngOnInit(): void {
    this.toastr.message("Merhaba","Toastr",{messageType:ToastrMessageType.Success,position:ToastrPosition.TopCenter})
    this.toastr.message("Merhaba","Toastr",{messageType:ToastrMessageType.Error,position:ToastrPosition.TopCenter})
    this.toastr.message("Merhaba","Toastr",{messageType:ToastrMessageType.Info,position:ToastrPosition.TopCenter})
    this.toastr.message("Merhaba","Toastr",{messageType:ToastrMessageType.Warning,position:ToastrPosition.TopCenter})
   // this.alertify.message("Hello World!",{messageType:MessageType.Error,position:Position.BottomCenter,delay:5})
  }
  

}
// $(document).ready(()=>{
//   alert("Merhaba")
// })