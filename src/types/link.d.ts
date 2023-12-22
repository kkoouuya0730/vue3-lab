export interface Link {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface LinkTile {
  category: string
  title: string
  searchWord: string
  from: string
  displayLinksNum: number
  icon: string
}

export interface CategoryTile {
  title: string
}
