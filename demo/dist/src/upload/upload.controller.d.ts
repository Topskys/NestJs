import { UploadService } from './upload.service';
import type { Response } from 'express';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    upload(file: any): {
        msg: string;
        data: any;
    };
    download(res: Response): void;
    down(res: Response): Promise<void>;
}
