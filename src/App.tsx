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
import { ScrollDecor } from './components/ScrollDecor';
import { OrnamentDivider } from './components/OrnamentDivider';
import { useReveal } from './hooks/useReveal';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  useReveal();

  return (
    <CartProvider>
      <ScrollDecor />
      <Header onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <CategoryStrip />
        <OrnamentDivider label="Caтalog · Կատալոգ" />
        <Catalog />
        <OrnamentDivider label="Доставка · Առաքում" />
        <Delivery />
      </main>
      <Footer />
      <StickyCartBar onOpen={() => setCartOpen(true)} />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  );
}

export default App;
