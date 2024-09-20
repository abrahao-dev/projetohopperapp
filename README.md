# ProjectHopper

ProjectHopper is an Autonomous Van Delivery Management System designed to streamline and optimize the process of managing deliveries for autonomous vehicles.

## Purpose

The main purpose of ProjectHopper is to provide a user-friendly interface for tracking and managing autonomous van deliveries. It aims to:

1. Improve efficiency in delivery logistics
2. Provide real-time tracking of deliveries
3. Enhance customer satisfaction through timely and accurate delivery information
4. Optimize route planning for autonomous vehicles
5. Offer a seamless experience for both delivery managers and end customers

## Features

- User authentication and authorization
- Dashboard for tracking deliveries in various states (waiting, in route, delivered)
- Generation of unique delivery tokens
- Real-time updates on delivery status
- Light and dark mode toggle for improved user experience
- Responsive design for both desktop and mobile devices

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase (for backend and authentication)

## Getting Started

To run ProjectHopper on your local machine, follow these steps:

1. **Clone the repository**

   ```
   git clone https://github.com/abrahao-dev/projetohopperapp.git
   cd projetohopperapp
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Replace `your_supabase_project_url` and `your_supabase_anon_key` with your actual Supabase project credentials.

4. **Run the development server**

   ```
   npm run dev
   ```

5. **Open the application**

   Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions to ProjectHopper are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.