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

export interface FilterButtonProps { 
    order: string,
    orderType: string,
    setOrder: (e) => void,
    setOrderType: (e) => void,
}