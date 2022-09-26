import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user/user-page/user-details.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserSidebarComponent } from './user/user-page/user-sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserSidebarComponent },
  { path: 'users/:id', component: UserDetailsComponent, outlet: 'details' },
  // => http://localhost:4200/users(details:users/1)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
