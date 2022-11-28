"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiderService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path_1 = require("path");
let SpiderService = class SpiderService {
    async findAll() {
        const urls = [];
        const baseUrl = "https://www.jpmn5.com";
        const nextText = "下一页";
        let index = 0;
        const spider = async () => {
            console.log("index: " + index);
            const body = await axios_1.default.get(`https://www.jpmn5.com/Cosplay/Cosplay10772${index ? +'_' + index : ''}.html`).then(async (res) => res.data);
            const $ = cheerio.load(body);
            console.log($('.article-content p img').length);
            const page = $('.pagination').eq(0).find('a');
            const pageArr = page.map(function () {
                return $(this).text();
            }).toArray();
            if (pageArr.includes(nextText)) {
                $('.article-content p img').each(function () {
                    urls.push(baseUrl + $(this).attr('src'));
                });
                index++;
                await spider();
            }
            console.log("urls：", urls);
        };
        await spider();
        this.writeFile(urls);
        return "cos";
    }
    writeFile(urls) {
        urls.forEach(async (url) => {
            const buffer = await axios_1.default.get(url, { responseType: "arraybuffer" }).then(res => res.data);
            const ws = fs.createWriteStream(path_1.default.join(__dirname, '../cos' + new Date().getTime() + '.jpg'));
            ws.write(buffer);
        });
    }
};
SpiderService = __decorate([
    (0, common_1.Injectable)()
], SpiderService);
exports.SpiderService = SpiderService;
//# sourceMappingURL=spider.service.js.map