import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
delete(arg0: number) {
throw new Error('Method not implemented.');
}

  constructor(private patientService:PatientService){}


patients:Patient[]=[];

ngOnInit(){
this.getPatients();
}

getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
  this.patients=data;
    
  });
}

}
