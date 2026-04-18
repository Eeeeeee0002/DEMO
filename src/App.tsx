import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryStrip } from './components/CategoryStrip';
import { Catalog } from './components/Catalog';
import { Delivery } from './components/Delivery';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { StickyCartBar } from './components/StickyCartBar';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Header onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <CategoryStrip />
        <Catalog />
        <Delivery />
      </main>
      <Footer />
      <StickyCartBar onOpen={() => setCartOpen(true)} />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  );
}

export default App;
