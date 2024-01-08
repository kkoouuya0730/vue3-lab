export interface UserInfo {
  email: string
  password: string
  options?: {
    emailRedirectTo: string
  }
}
