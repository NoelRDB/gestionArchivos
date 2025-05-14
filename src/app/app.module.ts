import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CardModule }       from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { FileFormComponent } from './components/file-form/file-form.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileFilterComponent } from './components/file-filter/file-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FileFormComponent,
    FileListComponent,
    FileFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,

    CardModule,
    FileUploadModule,
    ToggleButtonModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,

    // PrimeNG
    ButtonModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
