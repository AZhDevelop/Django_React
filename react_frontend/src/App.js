import './App.css';
import Header from './components/header/header.jsx'
import Navigation from './components/navigation/navigation.jsx';
import Content from './components/content/content.jsx';
import Footer from './components/footer/footer.jsx';

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
