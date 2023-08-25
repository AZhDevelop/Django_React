import './App.css';
import Header from './components/header/header.jsx'
import Navigation from './components/navigation/navigation.jsx';
import Content from './components/content/content.jsx';
import Footer from './components/footer/footer.jsx';

const App = () => {
  return (
      <div className="app">
        <div className='header'>
          <Header />
        </div>
        <div className='navigation'>
          <Navigation />
        </div>
        <div className='content'>
          <Content />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
  );
}

export default App;
