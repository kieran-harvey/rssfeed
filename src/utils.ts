import { xml2json } from "xml-js";
import { ArticleItem } from "./components/types";
import { v4 as uuidv4 } from 'uuid';


const getFirstImage = (html:string) => { 
    const parsedHtml = new DOMParser().parseFromString(html, "text/html");
    return parsedHtml.querySelector('img')?.getAttribute('src')
}
 
const getFirstParagraph = (html: string) =>{ 
    const parsedHtml = new DOMParser().parseFromString(html, "text/html");
    return parsedHtml.querySelectorAll('p')[1].textContent
}

export const buildArticleItems = (rssFeed: string) => { 
    let items:Array<ArticleItem> = [];
    const obj = JSON.parse(
        xml2json(rssFeed, { compact: true, spaces: 4 })
    );
    const auxItems = obj.rss.channel.item;
    
    auxItems.map((item:any) => {
        return items.push({
            id:uuidv4(),
            title: item.title?._cdata,
            pubDate: new Date(item.pubDate?._text),
            author: item.author?._text,
            desc: item.description?._cdata,
            shortDesc: getFirstParagraph(item.description._cdata),
            img: getFirstImage(item.description._cdata)
        })
    })
    return items
}


export const orderItems = (items:Array<ArticleItem>,type:string,orderType?) => {
    let newItems:Array<ArticleItem>;
    if (type === 'old') {
        newItems = items.sort((a, b) => (new Date(a.pubDate).getTime() < new Date(b.pubDate).getTime()) ? -1 : (new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime()) ? 1 : 0)   
    } else { 
        newItems = items.sort((a, b) => (new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime()) ? -1 : (new Date(a.pubDate).getTime() < new Date(b.pubDate).getTime()) ? 1 : 0)
    }
    return newItems
}

export const fetchData =  async () => { 
    const response = await fetch(
        "https://www.xatakandroid.com/tag/feeds/rss2.xml"
      );
      const data = await response.text();
      const items = buildArticleItems(data);
      return items
}


