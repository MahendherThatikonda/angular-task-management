import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
data=input.required<Ticket>();
close=output();
detailsVisisble=signal(false);
onToggleDetails(){
  this.detailsVisisble.set(!this.detailsVisisble)
}
onMarkAsCompleted(){
  this.close.emit();
}
}
