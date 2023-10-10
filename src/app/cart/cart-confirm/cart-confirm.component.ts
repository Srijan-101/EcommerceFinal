import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent {
    @Input() finalProduct:any;
    @Input() GrandTotal:any;

    onClose(){
        let a = document.getElementById("cart-confirm");
        a?.classList.add("hidden");
    }

    ngOnInit(){
      console.log(this.finalProduct);
    }
}
