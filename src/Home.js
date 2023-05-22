import Jumbotron from './components/jumbotron'
import Navbar from './components/navbar'
import Features from './components/features'
import About from './components/about'
import ProductSlider from './components/product_slider'
import Testimonial from './components/testimonials'
import Footer from './components/footer'

function Home() {
  return (
    <div id="landing-page">
      <Navbar />
      <Jumbotron />
      <Features />
      <About />
      <ProductSlider />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
