import { StorageFolder } from 'src/models/storage/StorageFolder';
import { StorageItem } from 'src/models/storage/StorageItem';
import { Project } from '../models/project/Project';

export interface DataSource {
    // projects
    retrieveProjects(
        onResult: (projects: Project[]) => void,
        onError: (errorCode: string) => void
    )
    saveProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    )
    updateProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    )
    deleteProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    )
    // files
    retrieveStorageItems(
        path: string,
        onResult: (folders: StorageFolder[], items: StorageItem[]) => void,
        onError: (errorCode: string) => void
    )
    uploadFile(
        file: any,
        path: string,
        onResult: (item: StorageItem) => void,
        onError: (errorCode: string) => void
    )
}