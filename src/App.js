import "./App.css";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/favorites/Favorites";
import Cart from "./components/cart/Cart";
import HomePage from "./components/homePage/HomePage";
import Contact from "./components/contact/Contact";
import Shipping from "./components/shipping/Shipping";
import AboutUs from "./components/aboutUs/AboutUs";
import Career from "./components/career/Career";
import MenHoodies from "./components/menHoodies/MenHoodies";
import MenShoes from "./components/menShoes/MenShoes";
import MenJeans from "./components/menJeans/MenJeans";
import MenTshirts from "./components/menTshirts/MenTshirts";
import WomenBags from "./components/womenBags/WomenBags";
import WomenMakeup from "./components/womenMakeup/WomenMakeup";
import WomenDresses from "./components/womenDresses/WomenDresses";
import WomenHeels from "./components/womenHeels/WomenHeels";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [cartItems, setCartItems] = useLocalStorage("cartItem", []);
  const [favItems, setFavItems] = useLocalStorage("favItem", []);

  const handleAddToCart = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleAddToFavorites = (product) => {
    const ProductExist = favItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setFavItems(
        favItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setFavItems([...favItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFavorite = (product) => {
    const ProductExist = favItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setFavItems(favItems.filter((item) => item.id !== product.id));
    } else {
      setFavItems(
        favItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favItems={favItems}
              handleAddToCart={handleAddToCart}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddToCart={handleAddToCart}
              handleRemoveItem={handleRemoveItem}
            />
          }
        />
        <Route
          path="/mens/hoodies"
          element={
            <MenHoodies
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route
          path="/mens/shoes"
          element={
            <MenShoes
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route
          path="/mens/jeans"
          element={
            <MenJeans
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route
          path="/mens/tshirts"
          element={
            <MenTshirts
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route
          path="/womens/bags"
          element={
            <WomenBags
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route
          path="/womens/makeup"
          element={
            <WomenMakeup
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route
          path="/womens/dresses"
          element={
            <WomenDresses
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route
          path="/womens/heels"
          element={
            <WomenHeels
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
