import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserDetailsComponent } from './user/user-page/user-details.component';
import { UserSidebarComponent } from './user/user-page/user-sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserDetailsComponent,
    UserSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
