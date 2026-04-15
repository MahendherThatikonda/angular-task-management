import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output,output } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?:ElementRef<HTMLFormElement>;

 @Output() add=new EventEmitter() 
//add=output<{title:string;text:string}>
ngAfterViewInit(){
  console.log("After View Init")
  console.log(this.form?.nativeElement)
}

onSubmit(title:string,titleText:string){
  this.add.emit({title:title,text:titleText})
//  console.dir(titleEle)
//    console.dir(titl)
    this.form?.nativeElement.reset();
//    form.reset();
}
}
