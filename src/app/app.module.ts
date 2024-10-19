import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { HttpClientModule } from '@angular/common/http'; // Required for HTTP requests
import { AppRoutingModule } from './app.routes'; // Import your routing module
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminDashboardComponent,
    // Declare any other components you have
  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for using ngModel
    HttpClientModule, // Required for making HTTP requests
    AppRoutingModule, // Import routing module here
  ],
  providers: [], // Add services here if necessary
  bootstrap: [AppComponent] // Root component to bootstrap
})
export class AppModule {}
