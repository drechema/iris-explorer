import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IrisApiService } from './services/iris-api.service';
import { AlertService } from './services/alert.service';

import { AppComponent } from './components/app/app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { IrisComponent } from './components/iris/iris.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { IrisApiCreateComponent } from './components/iris-api-create/iris-api-create.component';
import { IrisApiSpecComponent } from './components/iris-api-spec/iris-api-spec.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IrisComponent,
    AboutComponent,
    HomeComponent,
    AlertComponent,
    IrisApiCreateComponent,
    IrisApiSpecComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  providers: [
    IrisApiService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
