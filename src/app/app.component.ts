import { Component, Renderer2, ViewChild } from '@angular/core';
import { FileRecord, FileService } from './services/file.service';
import { FileSelectEvent, FileUpload, FileUploadHandlerEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  

  
})
export class AppComponent {
  @ViewChild('uploader') uploader!: FileUpload;

  title = 'gestionArchivos';

  filter: string = 'ALL';

  darkMode = false;

  selectedFile?: File;


  constructor(private fileSvc: FileService, private renderer: Renderer2)
  {}

  onFileSelect(event: FileSelectEvent) {
    const jsFile = event.files[0];
    const record: FileRecord = {
      id: Date.now(),
      name: jsFile.name,
      size: Math.round(jsFile.size / 1024),
      type: jsFile.type,
      processed: false
    };
    this.add(record);
  }

  uploadChosenFile() {
    if (!this.selectedFile) return;
    const record: FileRecord = {
      id: Date.now(),
      name: this.selectedFile.name,
      size: Math.round(this.selectedFile.size / 1024),
      type: this.selectedFile.type,
      processed: false
    };
    this.fileSvc.add(record);

    // Limpia selección para volver a subir otro
    this.selectedFile = undefined;
  }

   // Cuando el usuario elige un fichero
   onFileChosen(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }

  onFileUpload(event: FileUploadHandlerEvent) {
    const jsFile: File = event.files[0]; 
    const record: FileRecord = {
      id: Date.now(),
      name: jsFile.name,
      size: Math.round(jsFile.size / 1024),
      type: jsFile.type,
      processed: false
    };
    this.fileSvc.add(record);
    // Limpia el componente para que pueda volver a usarlo
    this.uploader.clear();
  }

  get archivoFiltrado(): FileRecord[]
  {
    const all = this.fileSvc.list();

    if (this.filter === 'PENDING')return all.filter (f => !f.processed);
    if (this.filter === 'DONE')return all.filter (f => f.processed);
    return all;
    }

    add(file: FileRecord): void
    {
      this.fileSvc.add(file);
    }

    toggle(file: FileRecord): void
    {
      this.fileSvc.update(file);
    }

    remove(file: FileRecord): void
    {
      this.fileSvc.delete(file.id);
    }


    toggleDark() {
     
      this.darkMode = !this.darkMode;
    }
}
