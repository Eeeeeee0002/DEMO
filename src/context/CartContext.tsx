import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import type { CartItem, Product } from '../types';

type Action =
  | { type: 'add'; product: Product }
  | { type: 'remove'; productId: string }
  | { type: 'inc'; productId: string }
  | { type: 'dec'; productId: string }
  | { type: 'clear' };

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find(
        (i) => i.product.id === action.product.id,
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        };
      }
      return {
        items: [...state.items, { product: action.product, quantity: 1 }],
      };
    }
    case 'remove':
      return {
        items: state.items.filter((i) => i.product.id !== action.productId),
      };
    case 'inc':
      return {
        items: state.items.map((i) =>
          i.product.id === action.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        ),
      };
    case 'dec':
      return {
        items: state.items
          .map((i) =>
            i.product.id === action.productId
              ? { ...i, quantity: i.quantity - 1 }
              : i,
          )
          .filter((i) => i.quantity > 0),
      };
    case 'clear':
      return initialState;
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
  add: (product: Product) => void;
  remove: (productId: string) => void;
  inc: (productId: string) => void;
  dec: (productId: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo<CartContextValue>(() => {
    const totalCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = state.items.reduce(
      (sum, i) => sum + i.quantity * i.product.price,
      0,
    );
    return {
      items: state.items,
      totalCount,
      totalPrice,
      add: (product) => dispatch({ type: 'add', product }),
      remove: (productId) => dispatch({ type: 'remove', productId }),
      inc: (productId) => dispatch({ type: 'inc', productId }),
      dec: (productId) => dispatch({ type: 'dec', productId }),
      clear: () => dispatch({ type: 'clear' }),
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
