'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { ThemeToggle } from '../../components/theme-toggle';

export default function Dashboard() {
  const [deliveryToken, setDeliveryToken] = useState('');

  const generateToken = () => {
    const token = Math.floor(100000 + Math.random() * 900000).toString();
    setDeliveryToken(token);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Painel de Controle</h1>
        <ThemeToggle />
      </div>
      <Tabs defaultValue="waiting" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
          <TabsTrigger value="waiting">Em espera</TabsTrigger>
          <TabsTrigger value="route">Em rota de entrega</TabsTrigger>
          <TabsTrigger value="delivered">Entregue</TabsTrigger>
          <TabsTrigger value="token">Token de entrega</TabsTrigger>
        </TabsList>
        <TabsContent value="waiting">
          <Card className="bg-accent mb-4">
            <CardHeader>
              <CardTitle className="text-accent-foreground">Produtos em espera para entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <strong>Produto:</strong> Smartphone XYZ
                  <br />
                  <strong>Previsão de envio:</strong> 15/04/2024
                </li>
                <li className="text-muted-foreground">
                  <strong>Produto:</strong> Notebook ABC
                  <br />
                  <strong>Previsão de envio:</strong> 18/04/2024
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="route">
          <Card className="bg-accent mb-4">
            <CardHeader>
              <CardTitle className="text-accent-foreground">Produtos em rota de entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <strong>Produto:</strong> Fone de Ouvido DEF
                  <br />
                  <strong>Saiu para entrega:</strong> 10/04/2024 às 09:30
                  <br />
                  <strong>Previsão de chegada:</strong> 10/04/2024 entre 14:00 e 18:00
                </li>
                <li className="text-muted-foreground">
                  <strong>Produto:</strong> Smartwatch GHI
                  <br />
                  <strong>Saiu para entrega:</strong> 10/04/2024 às 10:15
                  <br />
                  <strong>Previsão de chegada:</strong> 11/04/2024 entre 09:00 e 12:00
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="delivered">
          <Card className="bg-accent mb-4">
            <CardHeader>
              <CardTitle className="text-accent-foreground">Produtos entregues</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <strong>Produto:</strong> Câmera JKL
                  <br />
                  <strong>Entregue em:</strong> 05/04/2024 às 14:23
                  <br />
                  <strong>Endereço:</strong> Rua das Flores, 123 - São Paulo, SP
                </li>
                <li className="text-muted-foreground">
                  <strong>Produto:</strong> Tablet MNO
                  <br />
                  <strong>Entregue em:</strong> 03/04/2024 às 10:45
                  <br />
                  <strong>Endereço:</strong> Avenida Paulista, 1000 - São Paulo, SP
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="token">
          <Card className="bg-accent">
            <CardHeader>
              <CardTitle className="text-accent-foreground">Token de entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Seu token de entrega: {deliveryToken || 'Não gerado'}</p>
              <Button onClick={generateToken} className="bg-primary text-primary-foreground hover:bg-primary/90">Gerar Token</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
