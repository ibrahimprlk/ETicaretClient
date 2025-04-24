import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from './services/admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from './services/common/http-client.service';
declare var $:any;//jquery


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'ETicaretClient';

  constructor(private spinner: NgxSpinnerService, private httpClientService:HttpClientService){}

  ngOnInit(): void {

    this.httpClientService.get({controller:"products"}).subscribe(data=>{
      console.log(data);      
    });

   // this.httpClientService.post({controller:"products"},{name:"Kalem",stock:15,price:200}).subscribe();

  //  this.httpClientService.put({controller:"products"},{
  //   id:"ba0c3332-9657-4dd9-894c-e8fe4d392661",
  //   name:"Defter",
  //   stock:240,
  //   price:50
  //  }).subscribe();

    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
  }
  

}
// $(document).ready(()=>{
//   alert("Merhaba")
// })
//$.get("https://localhost:7121/api/products/get")