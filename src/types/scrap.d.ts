export interface Scrap {
  id: number
  created_at: Date
  post_type: string
  user_id: string
  title: string
  closed: boolean
  closed_at: null
  archived: boolean
  liked_count: number
  can_others_post: boolean
  comments_count: number
  last_comment_created_at: Date
  should_noindex: boolean
  path: string
  topics: string[]
}
