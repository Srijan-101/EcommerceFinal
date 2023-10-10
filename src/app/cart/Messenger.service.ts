import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class MessengerService {
    subject = new Subject();

    constructor(){}

    sendMessage(product:any){
        this.subject.next(product);
    }

    getMessage(){
      return this.subject.asObservable();
    }
}