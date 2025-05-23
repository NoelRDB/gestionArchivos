import { Injectable } from '@angular/core';


export interface FileRecord{
  // Atributos
  id: number;
  name: string;
  size: number;
  type: string;
  processed: boolean;
}




@Injectable({providedIn: 'root'})
export class FileService 
{
  private storageKey = 'fileRecords';
  private files: FileRecord[] = []



  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    this.files = saved ? JSON.parse(saved) : [];
   }

   // Metodos

   private save(): void
   {
    localStorage.setItem(this.storageKey, JSON.stringify(this.files));
   }

   list(): FileRecord []
   {
    return[...this.files];
   }

   add(file: FileRecord): void
   {
    this.files.push(file);
    this.save();
   }

   update(file: FileRecord): void
   {
    const idx = this.files.findIndex( f => f.id === file.id);
    if (idx > -1)
    {
      this.files[idx] = file;
      this.save();
    }

   }

   delete(id: number): void
   {
    this.files = this.files.filter( f => f.id !== id);
    this.save();
   }
}
