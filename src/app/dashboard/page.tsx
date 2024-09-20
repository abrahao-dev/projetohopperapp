'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapContainerStyleProps {
  width: string;
  height: string;
  borderRadius: string;
}

const mapContainerStyle: MapContainerStyleProps = {
  width: '100%',
  height: '300px',
  borderRadius: '1rem',
};

const center = {
  lat: -23.550520,
  lng: -46.633309,
};

const destination = {
  lat: -23.557321,
  lng: -46.639480,
};

export default function Dashboard() {
  const [deliveryToken, setDeliveryToken] = useState('');
  const [user, setUser] = useState<{ id: string } | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const router = useRouter();

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
    };
    checkUser();
  }, [router]);

  const generateToken = () => {
    const token = Math.floor(100000 + Math.random() * 900000).toString();
    setDeliveryToken(token);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const handleMapError = (error: Error) => {
    console.error('Google Maps error:', error);
    setMapError('Failed to load Google Maps. Please check your console for more details.');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-teal-500 text-white p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Painel de Controle
          </h1>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            className="bg-white text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300"
          >
            Sair
          </Button>
        </div>
        <Tabs defaultValue="waiting" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 bg-white bg-opacity-10 rounded-lg p-1">
            <TabsTrigger value="waiting" className="text-white data-[state=active]:bg-yellow-500">Em espera</TabsTrigger>
            <TabsTrigger value="route" className="text-white data-[state=active]:bg-yellow-500">Em rota</TabsTrigger>
            <TabsTrigger value="delivered" className="text-white data-[state=active]:bg-yellow-500">Entregue</TabsTrigger>
            <TabsTrigger value="token" className="text-white data-[state=active]:bg-yellow-500">Token</TabsTrigger>
          </TabsList>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <TabsContent value="waiting">
              <Card className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-white">Produtos em espera para entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="text-gray-200">
                      <strong>Produto:</strong> Smartphone XYZ
                      <br />
                      <strong>Previsão de envio:</strong> 15/04/2024
                    </li>
                    <li className="text-gray-200">
                      <strong>Produto:</strong> Notebook ABC
                      <br />
                      <strong>Previsão de envio:</strong> 18/04/2024
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="route">
              <Card className="bg-white bg-opacity-10 backdrop-blur-md overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white">Entregas em rota</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-4 rounded-xl shadow-lg">
                      <h3 className="text-lg font-semibold text-white mb-2">Localização do veículo autônomo</h3>
                      {mapError ? (
                        <p className="text-red-500">{mapError}</p>
                      ) : (
                        <LoadScript 
                          googleMapsApiKey={apiKey}
                          onError={handleMapError}
                        >
                          <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={14}
                          >
                            <Marker position={center} icon="/car-icon.png" />
                            <Marker position={destination} />
                          </GoogleMap>
                        </LoadScript>
                      )}
                    </div>
                    <ul className="space-y-4">
                      <li className="bg-white bg-opacity-20 p-4 rounded-xl">
                        <h4 className="text-yellow-400 font-semibold mb-2">Tablet LMN</h4>
                        <p className="text-gray-200"><strong>Previsão de entrega:</strong> 10/04/2024</p>
                        <p className="text-gray-200"><strong>Status:</strong> Em trânsito</p>
                      </li>
                      <li className="bg-white bg-opacity-20 p-4 rounded-xl">
                        <h4 className="text-yellow-400 font-semibold mb-2">Fone de ouvido QRS</h4>
                        <p className="text-gray-200"><strong>Previsão de entrega:</strong> 12/04/2024</p>
                        <p className="text-gray-200"><strong>Status:</strong> Saiu para entrega</p>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="delivered">
              <Card className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-white">Entregas realizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="text-gray-200">
                      <strong>Produto:</strong> Smartwatch DEF
                      <br />
                      <strong>Data de entrega:</strong> 05/04/2024
                      <br />
                      <strong>Avaliação:</strong> ⭐⭐⭐⭐⭐
                    </li>
                    <li className="text-gray-200">
                      <strong>Produto:</strong> Câmera GHI
                      <br />
                      <strong>Data de entrega:</strong> 03/04/2024
                      <br />
                      <strong>Avaliação:</strong> ⭐⭐⭐⭐
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="token">
              <Card className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-white">Token de entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-200">Seu token de entrega: {deliveryToken || 'Não gerado'}</p>
                  <Button onClick={generateToken} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">Gerar Token</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </motion.div>
    </div>
  );
}