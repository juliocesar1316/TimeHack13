import PrimeiraSection from '../../components/conteudoHome/primeiraSection';
import SegundaSection from '../../components/conteudoHome/segundaSection';
import TerceiraSection from '../../components/conteudoHome/terceiraSection';
import Footer from '../../components/footer';
import Header from '../../components/header';
import './index.css';

function Home() {
  return (
    <div className="home">
      <Header/>
      <PrimeiraSection/>
      <SegundaSection/>
      <TerceiraSection/>
      <Footer/>
    </div>
  );
}

export default Home;
