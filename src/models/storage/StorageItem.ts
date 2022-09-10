export interface StorageItemData {
    name: string,
    extention: string,
    path: string,
    downloadUrl: string
}

export class StorageItem {

    name: string
    extention: string
    path: string
    downloadUrl: string

    constructor(data: StorageItemData) {
        this.name = data.name
        this.extention = data.extention
        this.path = data.path
        this.downloadUrl = data.downloadUrl
    }
}