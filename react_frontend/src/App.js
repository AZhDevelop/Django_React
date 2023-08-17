import './App.css';
import Header from './components/header'
import Navigation from './components/navigation';
import Content from './components/content';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
