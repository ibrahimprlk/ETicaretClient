import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../../services/common/model/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent extends BaseComponent implements OnInit {
  
  constructor(spiner:NgxSpinnerService,private alertifyService:AlertifyService,private productService:ProductService){
    super(spiner)
  }
  
  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();
  

  ngOnInit(): void {
  
  }

  create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom);
    const   create_product:Create_Product=new Create_Product();
    create_product.name=name.value;
    create_product.stock=parseInt(stock.value);
    create_product.price=parseFloat(price.value);

    // if (!name.value) {
    //   this.alertifyService.message("Lütfen isim alanını boş geçmeyiniz",{
    //     dismissOthers:true,
    //     messageType:MessageType.Error,
    //     position:Position.TopCenter
    //   })
    //   return;
    // }

    this.productService.create(create_product,()=>{
      this.hideSpinner(SpinnerType.BallAtom)
      this.alertifyService.message("başarılı",
        {messageType:MessageType.Success,dismissOthers:true,delay:5,position:Position.TopCenter});
        this.createdProduct.emit(create_product);
    },errorMessage=>{
      this.alertifyService.message(errorMessage,{
        dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopCenter
      })
    });
  }


}
