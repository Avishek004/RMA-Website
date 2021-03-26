import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import SecondPage from './components/SecondPage/SecondPage';
import './fonts/fonts.css';
import ThirdPage from './components/ThirdPage/ThirdPage';

function App() {
  return (
    <div>
      <Header></Header>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
    </div>
  );
}

export default App;
