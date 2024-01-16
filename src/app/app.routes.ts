import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlluserComponent } from './alluser/alluser.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path:'alluser',
    component:AlluserComponent
  },
  {
    path:'studentlist',
    component:StudentComponent
  }
];
