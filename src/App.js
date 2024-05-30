import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { AppProvider } from './components/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
