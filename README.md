# Projeto Hopper App

Projeto Hopper App is an autonomous delivery system management application. It provides a user-friendly interface for tracking deliveries, managing routes, and generating delivery tokens.

## Features

- User authentication
- Dashboard for delivery tracking
- Real-time map integration for route visualization
- Delivery token generation
- Responsive design for mobile and desktop

## Technologies Used

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Supabase for authentication and database
- Google Maps API for route visualization

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/projeto-hopper-app.git
   ```

2. Install dependencies:
   ```
   cd projeto-hopper-app
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be easily deployed on Vercel, the platform from the creators of Next.js. For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.