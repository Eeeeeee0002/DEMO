import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Catalog } from './components/Catalog';
import { Story } from './components/Story';
import { Delivery } from './components/Delivery';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Header onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <Catalog />
        <Story />
        <Delivery />
      </main>
      <Footer />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  );
}

export default App;
