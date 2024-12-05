
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Mi Aplicación
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Acerca de
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contacto
          </Button>
          <Button color="inherit" component={Link} to="/product">
            Productos
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
