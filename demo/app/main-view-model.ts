import { Observable } from '@nativescript/core';

export class HelloWorldModel extends Observable {
    public message: string;
    public downloadProgress = 0;
    public uploadProgress = 0;
    public uploadCompleted = false;
    public imageDownload = '';

    constructor() {
        super();
    }
}
