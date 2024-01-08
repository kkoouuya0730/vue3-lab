import { createClient } from '@supabase/supabase-js'
import type { UserInfo } from '@/types/auth'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const signUpSupabase = async (userInfo: UserInfo) => {
  const { data, error } = await supabase.auth.signUp({
    email: userInfo.email,
    password: userInfo.password,
    options: {
      emailRedirectTo: 'http://localhost:5173'
    }
  })
  if (error) throw error
  return data
}

export const signInSupabase = async (userInfo: UserInfo) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userInfo.email,
    password: userInfo.password
  })
  if (error) throw error
  return data
}

export const signOutSupabase = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
