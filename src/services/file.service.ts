import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FireStoreDataSource } from '../dataSources/FireStoreDataSource';
import { DataSource } from '../dataSources/DataSource';
import { MockDataSource } from '../dataSources/MockDataSource';
import { Folder } from '../models/Folder';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private dataSource: DataSource

  constructor(
    private firestorage: AngularFireStorage,
    private firestore: AngularFirestore
  ) { 
    if (!environment.production) {
      this.dataSource = new MockDataSource()
    } else {
      this.dataSource = new FireStoreDataSource(this.firestorage, this.firestore)
    }
  }

  getItems(
    path: string = '',
    onResult: (folders: Folder[], items: Item[]) => void,
    onError: (errorCode: string) => void
  ) {
    this.dataSource.retrieveStorageItems(path, onResult,onError)
  }
}
