import Home from './pages/home';
import './App.css';
import Head1 from './component/head1';
import Service from './component/service';
import Price from './component/price';
import Call from './component/call';
import Contact from './component/contact';
import Footer from './component/footer';

function App() {
  return (
  <div>
    <Home />
    <Head1/>
    <Service/>
    <Price/>
    <Call/>
    <Contact/>
    <Footer/>
  </div>  
  );
}

export default App;
