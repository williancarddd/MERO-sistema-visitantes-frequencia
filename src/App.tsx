import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { FormRate } from './pages/FormRate';


function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1 flex items-center overflow-hidden w-screen justify-center'>
        <FormRate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
