import { supabase } from '@/lib/supabase'
import { User } from '@/types'

export async function fetchUser(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data as User
}

export async function updateUser(userId: string, updates: Partial<Omit<User, 'id'>>) {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .single()

  if (error) throw error
  return data as User
}