import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

constructor(private appointmentService:AppointmentService,private router:Router){}
  
   appointments:Appointment[]=[];

   ngOnInit():void{
    this.getAppointments();
  }
  
   getAppointments(){
    this.appointmentService.getAllAppointments().subscribe(data=>{
      this.appointments=data;
    })
   }

   delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
   }
   
  
}
