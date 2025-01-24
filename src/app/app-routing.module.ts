import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { authGuard } from './auth/auth.guard';
import { ViewProjectComponent } from './projects/view-project/view-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';

const routes: Routes = [
  {
    path:"", redirectTo:"/login", pathMatch:'full',
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"home",
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path:"add-project",
    component: AddProjectComponent,
    canActivate:[authGuard]
  },
  {
    path:"view/:id",
    component: ViewProjectComponent,
    canActivate:[authGuard]
  },
  {
    path:"edit/:id",
    component: EditProjectComponent,
    canActivate:[authGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
