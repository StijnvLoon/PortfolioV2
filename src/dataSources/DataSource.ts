import { Folder } from 'src/models/Folder';
import { Item } from 'src/models/Item';
import { Project } from '../models/Project';

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
        onResult: (folders: Folder[], items: Item[]) => void,
        onError: (errorCode: string) => void
    )
    uploadFile(
        file: any,
        path: string,
        onResult: (item: Item) => void,
        onError: (errorCode: string) => void
    )
}