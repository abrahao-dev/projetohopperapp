'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/card'
import { ThemeToggle } from '../../components/theme-toggle'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual login logic with Supabase
    console.log('Login attempt:', username, password)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="username" placeholder="Nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="password" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Entrar</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}