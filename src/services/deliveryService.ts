   // Fetch deliveries for a user
   async function fetchUserDeliveries(userId: string) {
    const { data, error } = await supabase
      .from('deliveries')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }

  // Create a new delivery
  async function createDelivery(deliveryData: DeliveryData) {
    const { data, error } = await supabase
      .from('deliveries')
      .insert([deliveryData])
      .single()
    
    if (error) throw error
    return data
  }