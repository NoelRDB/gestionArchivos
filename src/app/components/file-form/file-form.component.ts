import { Component, EventEmitter, Output } from '@angular/core';
import { FileRecord } from '../../services/file.service';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrl: './file-form.component.scss'
})

export class FileFormComponent {
  @Output() create = new EventEmitter<FileRecord>();
  selectedFile?: File;

  onFileSelected(event: any): void
  {
    this.selectedFile = event.target.files[0];
  }


  upload(): void
  {
    if (!this.selectedFile) return;
    const record: FileRecord = {
      id: Date.now(),
      name: this.selectedFile.name,
      size: Math.round(this.selectedFile.size / 1024),
      type: this.selectedFile.type,
      processed: false
    };

    this.create.emit(record);
    this.selectedFile = undefined;
  }
}
