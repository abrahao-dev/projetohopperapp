import { supabase } from '@/lib/supabase'

export async function addStatusLog(deliveryId: string, status: string) {
  const { data, error } = await supabase
    .from('delivery_status_log')
    .insert({ delivery_id: deliveryId, status, timestamp: new Date() })
    .single()

  if (error) throw error
  return data
}

export async function fetchDeliveryStatusLogs(deliveryId: string) {
  const { data, error } = await supabase
    .from('delivery_status_log')
    .select('*')
    .eq('delivery_id', deliveryId)
    .order('timestamp', { ascending: false })

  if (error) throw error
  return data
}