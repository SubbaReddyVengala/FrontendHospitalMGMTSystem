import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DocauthguardService } from './docauthguard.service';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent,canActivate:[AdminauthguardService]},
  {path:'appointmentlist',component:AppointmentComponent,canActivate:[AdminauthguardService]},
  {path:'app-create-appointment',component:CreateAppointmentComponent,canActivate:[AdminauthguardService]},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'docdash',component:DocdashComponent,canActivate:[DocauthguardService]},
  {path:'addPatient',component:CreatePatientComponent,canActivate:[DocauthguardService]},
  {path:'viewMedicine',component:ViewMedicineComponent,canActivate:[DocauthguardService]},
  {path:'create-medicine',component:CreateMedicineComponent,canActivate:[DocauthguardService]},
  {path:'updatePatient/:id',component:UpdatePatientComponent,canActivate:[DocauthguardService]},
  {path:'viewPatient/:id',component:ViewPatientComponent,canActivate:[DocauthguardService]},
  {path:'updateMedicine/:id',component:UpdateMedicineComponent},
  {path:'dologin',component:DocloginComponent},
  {path:'adlogin',component:AdloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
