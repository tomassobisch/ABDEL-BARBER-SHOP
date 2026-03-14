import { MapPin, Clock, Instagram, Star, Quote, Check, ChevronRight, ChevronLeft, PhoneCall } from 'lucide-react';
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
            <a href="#horario">Horario</a>
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
            <img src={logoReal} alt="Abdel Barbershop Logo" className="logo-real-img neon-effect" />
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

      {/* Horario Section */}
      <section id="horario" className="schedule-section container">
        <div className="schedule-card">
          <div className="schedule-header">
            <Clock size={32} color="#d4af37" />
            <h3 className="title-luxe">Horario de Apertura</h3>
          </div>
          <div className="schedule-grid">
            <div className="day-row"><span>Lunes - Viernes</span> <strong>09:30 — 21:00</strong></div>
            <div className="day-row"><span>Sábados</span> <strong>09:30 — 21:00</strong></div>
            <div className="day-row closed"><span>Domingos</span> <strong>Cerrado</strong></div>
          </div>
          <p className="status-open-now">Abre hoy a las 09:30</p>
        </div>
      </section>

      {/* Gallery Carousel */}
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

      {/* Contact Section - REDISEÑADA */}
      <section id="contacto" className="contact-luxe-v2">
        <div className="container">
          <div className="contact-header text-center">
            <span className="tagline">Encuéntranos</span>
            <h2 className="title-luxe">Ubicación y Contacto</h2>
          </div>
          
          <div className="contact-grid-v2">
            <div className="contact-cards">
              <div className="contact-card-item">
                <div className="card-icon"><MapPin size={24} /></div>
                <div className="card-content">
                  <span className="card-label">Dirección</span>
                  <p>Carrer de Josep Royo, 21</p>
                  <p>08930 Sant Adrià de Besòs, Barcelona</p>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="link-action">Cómo llegar <ChevronRight size={14} /></a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="card-icon"><PhoneCall size={24} /></div>
                <div className="card-content">
                  <span className="card-label">Teléfono</span>
                  <p>+34 640 83 23 67</p>
                  <a href="tel:+34640832367" className="link-action">Llamar ahora <ChevronRight size={14} /></a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="card-icon"><Instagram size={24} /></div>
                <div className="card-content">
                  <span className="card-label">Redes Sociales</span>
                  <p>Sigue nuestros trabajos diarios</p>
                  <div className="social-links-v2">
                    <a href="https://www.instagram.com/barberabdel/" target="_blank" rel="noopener noreferrer" className="btn-social">@barberabdel</a>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-social">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-map-v2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.667232323232!2d2.2173489!3d41.4318553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bb6d7a7a7a7a%3A0x7a7a7a7a7a7a7a7a!2sABDEL+BARBERSHOP!5e0!3m2!1ses!2ses!4v1710345678901!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-luxe">
        <div className="container">
          <p>© 2024 ABDEL BARBER SHOP — Estilo y Tradición en Barcelona.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
