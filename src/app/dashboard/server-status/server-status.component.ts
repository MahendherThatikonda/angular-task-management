import { Component } from '@angular/core';
import ngOnInit

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus:"offline"|"online"|"unknown" = 'online';
  constructor(){


    ngOnInit(){
    setInterval(()=>{
      const rnd=Math.random();

      if(rnd<0.5){
        this.currentStatus='online'
      } else if (rnd<0.9){
        this.currentStatus='offline'
      } else {
        this.currentStatus='unknown'
      }

    },5000)
    }
  }
}
