import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

   clear() {
    sessionStorage.clear();
  }

  // Storage Tools
   save(key: string, value: any): boolean {
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  }

   get(key: string): any {
    try {
      const value: any = sessionStorage.getItem(key)
      return JSON.parse(value)
    } catch (error) {
      return null
    }
  }

   delete(key: string): boolean {
    sessionStorage.removeItem(key);
    return true;
  }

}
