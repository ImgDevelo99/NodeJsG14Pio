// 1. Importamos React y los componentes necesarios de React Router.

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2. Importamos los componentes y páginas.
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';

// 3. Definimos el componente principal de la aplicación.
function App() {
  return (
    // 4. Usamos BrowserRouter como envoltorio para habilitar la navegación.
    <BrowserRouter>
      {/* 5. Añadimos el componente Header para la navegación. */}
      <Header />

      {/* 6. Configuramos las rutas principales. */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la página "Acerca de" */}
        <Route path="/about" element={<About />} />

        {/* Ruta para la página de detalle de producto */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

