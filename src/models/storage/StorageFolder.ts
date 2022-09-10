export interface StorageFolderData {
    name: string,
    path: string,
}

export class StorageFolder {

    name: string
    path: string
    
    constructor(data: StorageFolderData) {
        this.name = data.name
        this.path = data.path
    }
}