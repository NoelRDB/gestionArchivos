import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-filter',
  templateUrl: './file-filter.component.html',
  styleUrl: './file-filter.component.scss'
})



export class FileFilterComponent {

  @Output() change = new EventEmitter<string>();
  
  opciones = [
    {label: 'Todos', value: 'ALL'},
    {label: 'Pendiente', value: 'PENDING'},
    {label: 'Procesados', value: 'DONE'}
  ];

  selected: string = 'ALL';

  onChange(): void
  {
    this.change.emit(this.selected)

  }

}
