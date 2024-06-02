import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';


@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {



  constructor(private patientService:PatientService,private router:Router,private docAuthService:DocauthService){}

patients:Patient[]=[];

ngOnInit(){
this.getPatients();
}

getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
  this.patients=data;
    
  });
}

update(id:number){
this.router.navigate(['/updatePatient',id])
}

delete(id:number) {
  this.patientService.delete(id).subscribe(data=>{
     console.log(data);
     this.getPatients();
  })
  }

  view(id: number) {
    this.router.navigate(['viewPatient',id]);
    }

    logout(){
     this.docAuthService.logout();
     this.router.navigate(['home']);
    }

}
