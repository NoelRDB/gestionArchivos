import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileRecord } from '../../services/file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent {

  @Input() files: FileRecord[] = [];
  @Output() toggle = new EventEmitter<FileRecord>();
  @Output() remove = new EventEmitter<FileRecord>();

}
