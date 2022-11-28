import { SpiderService } from './spider.service';
export declare class SpiderController {
    private readonly spiderService;
    constructor(spiderService: SpiderService);
    findAll(): Promise<string>;
}
