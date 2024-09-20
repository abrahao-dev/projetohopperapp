import { supabase } from '@/lib/supabase'  // adjust the path as necessary

export async function signUpUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  if (error) {
    console.error('Error signing up:', error.message)
    throw error
  } else {
    console.log('User signed up successfully:', data)
    return data
  }
}