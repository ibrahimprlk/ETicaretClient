import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }

  create(createProduct:Create_Product, successCallBack?:any){
    this.httpClientService.post({
      controller:"products"
    },createProduct).subscribe(result=>{
      successCallBack();
    })
  }

}
