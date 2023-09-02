export interface FeedCardProps { 
    item: ArticleItem
}

export interface ArticleItem {
    id:string
    title: string,
    pubDate: Date,
    author: string,
    desc: string,
    shortDesc: string | null,
    img:string | null | undefined,
}

export interface OrderItemsTypes { 
    items: Array<>,
    type:'date' | 'abc',
}