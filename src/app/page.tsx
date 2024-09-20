import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <main className="text-center px-4">
        <h1 className="text-6xl font-bold mb-8 text-primary">
          Projeto Hopper
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
        Sistema autônomo de entrega utilizando vans autônomas.
        </p>
        <Link href="/login">
          <Button variant="outline" size="lg">
            Login
          </Button>
        </Link>
      </main>
    </div>
  )
}
