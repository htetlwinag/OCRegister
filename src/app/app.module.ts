import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterlistComponent } from './registerlist/registerlist.component';
import { InformComponent } from './inform/inform.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import {HttpClientModule} from '@angular/common/http';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { StudentListComponent } from './student-list/student-list.component';
import {DataTablesModule} from 'angular-datatables';
import { DictionComponent } from './diction/diction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterlistComponent,
    InformComponent,
    DemoComponent,
    DictionaryComponent,
    StudentListComponent,
    DictionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
