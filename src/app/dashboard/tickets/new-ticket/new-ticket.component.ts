import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
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

ngAfterViewInit(){
  console.log("After View Init")
  console.log(this.form?.nativeElement)
}

onSubmit(titleEle:string,titl:string){

  console.dir(titleEle)
    console.dir(titl)
    this.form?.nativeElement.reset();
//    form.reset();
}
}
