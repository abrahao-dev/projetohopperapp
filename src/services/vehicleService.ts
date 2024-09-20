import { supabase } from '@/lib/supabase'

export async function fetchVehicles() {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')

  if (error) throw error
  return data
}

export async function assignVehicleToDelivery(vehicleId: string, deliveryId: string) {
  const { data, error } = await supabase
    .from('deliveries')
    .update({ vehicle_id: vehicleId })
    .eq('id', deliveryId)
    .single()

  if (error) throw error
  return data
}