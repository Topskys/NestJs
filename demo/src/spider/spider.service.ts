import { Injectable } from '@nestjs/common';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import axios from "axios";
import * as cheerio from 'cheerio';
import * as fs from "fs";
import path from "path";


@Injectable()
export class SpiderService {

  async findAll() {
    const urls:string[]=[];
    const baseUrl="https://www.jpmn5.com";
    const nextText= "下一页";
    let index=0;
    const spider=async ()=>{
      console.log("index: " + index)
      const body =await axios.get(`https://www.jpmn5.com/Cosplay/Cosplay10772${index?+'_'+index:''}.html`).then(async res=>res.data);
      const $ =cheerio.load(body);
      console.log($('.article-content p img').length);
      const page = $('.pagination').eq(0).find('a');
      const pageArr=page.map(function(){
        return $(this).text()
      }).toArray();

      if(pageArr.includes(nextText)){
        $('.article-content p img').each(function(){
          urls.push(baseUrl+$(this).attr('src'))
        })
        index++;
        await spider();
      }
      console.log("urls：",urls)
    }
    await spider();
    this.writeFile(urls);
    return "cos";
  }

  // 写入
  writeFile(urls:string[]){
      urls.forEach(async url=>{
        const buffer =await axios.get(url,{responseType:"arraybuffer"}).then(res=>res.data)
        const ws=fs.createWriteStream(path.join(__dirname,'../cos'+new Date().getTime()+'.jpg'))
        ws.write(buffer);
      })
  }
}
