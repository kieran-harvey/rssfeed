import { xml2json } from "xml-js";
import { ArticleItem, OrderItemsTypes } from "./components/types";
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

    console.log(obj);

    return items
}


export const orderItems = (items,type,orderType) => {
    let newItems;
    if (type === 'date') {
        if (orderType ==="asc") {
            return newItems = items.sort((a, b) => (new Date(a.pubDate).getTime() < new Date(b.pubDate).getTime()) ? -1 : (new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime()) ? 1 : 0)
         } else { 
            return newItems = items.sort((a, b) => (new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime()) ? -1 : (new Date(a.pubDate).getTime() < new Date(b.pubDate).getTime()) ? 1 : 0)
        }
        
    } else {
        if (orderType === 'asc') {
        return newItems = items.sort((a, b) => (a.title < b.title) ? 1 : (a.title > b.title ? -1 : 0))    
         } else { 
        return newItems = items.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title ? -1 : 0))
        }     
    } 
}


// export const sortMethods = {
//     abc: {
//         descending: { method: (a, b) => (a.title < b.title) ? 1 : (a.title > b.title ? -1 : 0) },
//         none: { method: (a, b) => null },
//         ascending: { method: undefined },
//     },
//     date: {
//         descending: {method:(a, b) => (new Date(a.pubDate).getTime() < new Date(b.pubDate).getTime()) ? 1 : (new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime()) ? -1 : 0},
//         none: { method: (a, b) => null },
//         ascending: { method: undefined },
//     },
//     none: {
//         none: { method: (a, b) => null },
//     }

//   };

