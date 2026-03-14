import { MapPin, Phone, Instagram, MessageCircle, Star, Quote, Check, ChevronRight, ChevronLeft } from 'lucide-react';
import './App.css';
import heroMain from './assets/hero-main.webp';
import gallery1 from './assets/gallery-1.webp';
import gallery2 from './assets/gallery-2.webp';
import gallery3 from './assets/gallery-3.webp';
import logoReal from './assets/logo-real.jpeg';

function App() {
  const whatsappNumber = "34640832367";
  const googleMapsUrl = "https://www.google.com/maps/dir//ABDEL+BARBERSHOP+Carrer+de+Josep+Royo,+21+08930+Sant+Adri%C3%A0+de+Bes%C3%B2s+Barcelona/@41.4318553,2.2173489,14z";

  const reviews = [
    { name: "Juan M.", text: "El mejor degradado de Sant Adrià. Abdel es un crack.", rating: 5 },
    { name: "Carlos R.", text: "Atención impecable y un local con mucho estilo. 100% recomendado.", rating: 5 },
    { name: "David L.", text: "Muy profesional con la barba. Se nota la experiencia.", rating: 4 }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="container nav-content">
          <div className="nav-left">
            <div className="nav-logo">
              ABDEL
              <span className="nav-logo-sub">BARBER SHOP</span>
            </div>
            <div className="nav-maps-info">
              <div className="nav-rating">
                <Star size={12} fill="#d4af37" color="#d4af37" />
                <span>4.9</span>
              </div>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="nav-location-link">
                <MapPin size={12} />
                <span>Sant Adrià de Besòs</span>
              </a>
            </div>
          </div>
          
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Galería</a>
            <a href="#reseñas">Reseñas</a>
            <a href="#contacto">Ubicación</a>
          </div>
          <a href={`https://wa.me/${whatsappNumber}`} className="nav-cta">Reservar</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-split">
        <div className="hero-text-side">
          <div className="logo-brand-container-large">
            <img src={logoReal} alt="Abdel Barbershop Logo" className="logo-real-img" />
          </div>
          <h2 className="hero-title-main">Especialistas en Degradados</h2>
          <p className="hero-desc-large">Barbería premium en Sant Adrià de Besòs.</p>
          
          <div className="hero-services-list">
            <div className="s-item"><Check size={16} color="#d4af37" /> <span>Corte & Fade</span></div>
            <div className="s-item"><Check size={16} color="#d4af37" /> <span>Barba a Navaja</span></div>
          </div>

          <div className="hero-actions-large">
            <a href={`https://wa.me/${whatsappNumber}`} className="btn-primary-pill-large">Agendar Cita</a>
            <a href="#servicios" className="btn-secondary-outline">Servicios</a>
          </div>
        </div>
        <div className="hero-image-side-v2">
          <img src={heroMain} alt="Abdel Barber Shop" className="hero-full-photo" />
          <div className="overlay-gradient-v2"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services-luxe container">
        <h2 className="title-luxe text-center">Servicios</h2>
        <div className="services-menu-grid">
          <div className="menu-column">
            <div className="menu-item-round">
              <div className="menu-info"><h4>Corte Fade</h4></div>
              <div className="price-pill">15€</div>
            </div>
            <div className="menu-item-round">
              <div className="menu-info"><h4>Barba</h4></div>
              <div className="price-pill">10€</div>
            </div>
          </div>
          <div className="menu-column">
            <div className="menu-item-round gold-border">
              <div className="menu-info"><h4>Pack Premium</h4></div>
              <div className="price-pill gold">22€</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Carousel - NUEVO */}
      <section id="galeria" className="gallery-carousel-section">
        <div className="container">
          <h3 className="title-luxe text-center">Nuestro Arte</h3>
          <div className="carousel-container">
            <div className="carousel-track">
              <div className="carousel-item"><img src={gallery1} alt="Corte 1" /></div>
              <div className="carousel-item"><img src={gallery2} alt="Corte 2" /></div>
              <div className="carousel-item"><img src={gallery3} alt="Corte 3" /></div>
            </div>
            <div className="carousel-hint">
              <ChevronLeft size={20} /> Desliza para ver más <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reseñas" className="reviews-section container">
        <h3 className="title-luxe text-center">Opiniones</h3>
        <div className="reviews-grid">
          {reviews.map((rev, i) => (
            <div key={i} className="review-circle-card">
              <Quote size={20} color="#d4af37" />
              <p>"{rev.text}"</p>
              <span className="reviewer-name">{rev.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="contact-luxe">
        <div className="container contact-grid">
          <div className="contact-info">
            <h3 className="title-luxe">Visítanos</h3>
            <div className="info-block">
              <MapPin className="gold-icon" />
              <p>Carrer de Josep Royo, 21</p>
            </div>
            <div className="info-block">
              <Phone className="gold-icon" />
              <p>+34 640 83 23 67</p>
            </div>
            <div className="social-mini">
              <a href="https://www.instagram.com/barberabdel/"><Instagram size={24} /></a>
              <a href={`https://wa.me/${whatsappNumber}`}><MessageCircle size={24} /></a>
            </div>
          </div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.667232323232!2d2.2173489!3d41.4318553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bb6d7a7a7a7a%3A0x7a7a7a7a7a7a7a7a!2sABDEL+BARBERSHOP!5e0!3m2!1ses!2ses!4v1710345678901!5m2!1ses!2ses" 
              width="100%" 
              height="300" 
              style={{ border: 0, borderRadius: '20px' }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="footer-luxe text-center">
        <p>© 2024 ABDEL BARBER SHOP</p>
      </footer>
    </div>
  );
}

export default App;
