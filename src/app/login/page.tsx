'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'  // Adjust this path if necessary

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      console.log('Login successful:', data)
      router.push('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
      setError('Credenciais inválidas. Por favor, tente novamente.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-teal-500 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-blur-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Entrar no <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ProjetoHopper</span>
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition duration-300"
          >
            Entrar
          </motion.button>
        </form>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 text-sm text-gray-300"
      >
        Não tem uma conta? <Link href="/register" className="text-yellow-400 hover:text-yellow-300">Cadastre-se</Link>
      </motion.p>
    </div>
  )
}