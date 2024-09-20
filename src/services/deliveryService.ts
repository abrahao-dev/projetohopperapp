   // Fetch deliveries for a user
   import { supabase } from '@/lib/supabase'
   import { Delivery } from '@/types'

   export async function fetchUserDeliveries(userId: string) {
    const { data, error } = await supabase
      .from('deliveries')
      .select('*')
      .eq('user_id', userId)

    if (error) throw error
    return data as Delivery[]
  }

  // Create a new delivery
  export async function createDelivery(delivery: Omit<Delivery, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('deliveries')
      .insert(delivery)
      .single()

    if (error) throw error
    return data as Delivery
  }

  // Update a delivery
  export async function updateDelivery(id: string, updates: Partial<Omit<Delivery, 'id' | 'created_at'>>) {
    const { data, error } = await supabase
      .from('deliveries')
      .update(updates)
      .eq('id', id)
      .single()

    if (error) throw error
    return data as Delivery
  }