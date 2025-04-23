import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from './services/admin/alertify.service';
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'ETicaretClient';

  constructor(private alertify:AlertifyService){}

  ngOnInit(): void {
    this.alertify.message("Hello World!",{messageType:MessageType.Warning,position:Position.BottomCenter,delay:5})
  }
  

}
// $(document).ready(()=>{
//   alert("Merhaba")
// })