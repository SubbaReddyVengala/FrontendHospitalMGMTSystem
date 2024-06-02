import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminAuthService } from '../admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {

  patients:Patient[]=[];
  constructor(private patientService:PatientService,private adminAuthService:AdminAuthService,private route:Router){}
  
  ngOnInit():void{
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
 this.patients=data;
    })
  }

  deletePatient(id: number) {
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
      
    })
    }

    logout(){
   this.adminAuthService.logout();
   this.route.navigate(['home'])
    }
}
