export interface Delivery {
    id?: string;
    user_id: string;
    vehicle_id?: string;
    status: string;
    origin: string;
    destination: string;
    created_at?: string;
    // Add any other fields that are in your deliveries table
  }
  
  export interface User {
    id?: string;
    email: string;
    name?: string;
    // Add any other fields that are in your users table
  }
  
  export interface Vehicle {
    id?: string;
    name: string;
    type: string;
    // Add any other fields that are in your vehicles table
  }
  
  export interface DeliveryStatusLog {
    id?: string;
    delivery_id: string;
    status: string;
    timestamp: string;
    // Add any other fields that are in your delivery_status_log table
  }