import { Component } from '@angular/core';
import { FileRecord, FileService } from './services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestionArchivos';

  filter: string = 'ALL';


  constructor(private fileSvc: FileService)
  {}

  get archivoFiltrado(): FileRecord[]
  {
    const all = this.fileSvc.list();

    if (this.filter === 'PENDING')
    {
      return all.filter (f => !f.processed)
    };

    if (this.filter === 'DONE')
    {
      return all.filter (f => f.processed)
    };

    return all;
    }

    add(file: FileRecord): void
    {
      this.fileSvc.addFile(file);
    }

    toggle(file: FileRecord): void
    {
      this.fileSvc.updateFile(file);
    }

    remove(file: FileRecord): void
    {
      this.fileSvc.deleteFile(file.id);
    }
}
