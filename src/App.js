import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/Main';
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <Main />
      <Footer copyright="Pondok Pesantren Quran dan IT Al Mahir" deskripsi="Copyright All right reversed" />
    </div>
  );
}

export default App;
