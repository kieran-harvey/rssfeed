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
    filterButtonOptions: FilterButtonsButton[],
}

export interface FilterButtonsButton   {
        id: string,
        text: string,
        fun: (e) => void;
        selected:string
    }


 