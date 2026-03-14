import { MapPin, Phone, Clock, Instagram, MessageCircle, Star, CheckCircle2, Quote, Award, Sparkles, Zap, Check } from 'lucide-react';
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
          <h2 className="hero-title-main">Especialistas en Degradados y Barba</h2>
          <p className="hero-desc-large">Donde la tradición se encuentra con el estilo moderno. Vive la mejor experiencia de barbería premium en el corazón de Sant Adrià de Besòs.</p>
          
          {/* Lista de Servicios debajo de la descripción */}
          <div className="hero-services-list">
            <div className="s-item"><Check size={16} color="#d4af37" /> <span>Corte Clásico & Moderno</span></div>
            <div className="s-item"><Check size={16} color="#d4af37" /> <span>Degradados (Fade) de Precisión</span></div>
            <div className="s-item"><Check size={16} color="#d4af37" /> <span>Arreglo de Barba a Navaja</span></div>
            <div className="s-item"><Check size={16} color="#d4af37" /> <span>Tratamientos Capilares</span></div>
          </div>

          <div className="hero-actions-large">
            <a href={`https://wa.me/${whatsappNumber}`} className="btn-primary-pill-large">Agendar Cita Ahora</a>
            <a href="#servicios" className="btn-secondary-outline">Ver Servicios</a>
          </div>

          <div className="hero-features-mini">
            <div className="mini-feature">
              <Award size={20} color="#d4af37" />
              <span>Calidad Premium</span>
            </div>
            <div className="mini-feature">
              <Zap size={20} color="#d4af37" />
              <span>Sin Esperas</span>
            </div>
            <div className="mini-feature">
              <Sparkles size={20} color="#d4af37" />
              <span>Estilo Propio</span>
            </div>
          </div>
        </div>
        <div className="hero-image-side-v2">
          <img src={heroMain} alt="Abdel Barber Shop" className="hero-full-photo" />
          <div className="overlay-gradient-v2"></div>
        </div>
      </section>

      {/* Features Bar */}
      <div className="features-bar">
        <div className="container features-grid">
          <div className="feature"><CheckCircle2 size={16} /><span>Corte de Autor</span></div>
          <div className="feature"><CheckCircle2 size={16} /><span>Barba a Navaja</span></div>
          <div className="feature"><CheckCircle2 size={16} /><span>Productos Top</span></div>
          <div className="feature"><CheckCircle2 size={16} /><span>Ambiente 10/10</span></div>
        </div>
      </div>

      {/* Services Section */}
      <section id="servicios" className="services-luxe container">
        <div className="section-header">
          <span className="tagline">Carta de Servicios</span>
          <h2 className="title-luxe">Corte y Estilo</h2>
        </div>
        
        <div className="services-menu-grid">
          <div className="menu-column">
            <div className="menu-item-round">
              <div className="menu-info">
                <h4>Corte Clásico / Fade</h4>
                <p>Acabado impecable con lavado incluido.</p>
              </div>
              <div className="price-pill">15€</div>
            </div>
            <div className="menu-item-round">
              <div className="menu-info">
                <h4>Arreglo de Barba</h4>
                <p>Perfilado y cuidado tradicional.</p>
              </div>
              <div className="price-pill">10€</div>
            </div>
          </div>
          <div className="menu-column">
            <div className="menu-item-round gold-border">
              <div className="menu-info">
                <h4>Pack ABDEL Premium</h4>
                <p>Corte + Barba + Ritual.</p>
              </div>
              <div className="price-pill gold">22€</div>
            </div>
            <div className="menu-item-round">
              <div className="menu-info">
                <h4>Corte Niños</h4>
                <p>Estilo para los más jóvenes.</p>
              </div>
              <div className="price-pill">12€</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reseñas" className="reviews-section container">
        <h3 className="title-luxe text-center">Opiniones de Clientes</h3>
        <div className="reviews-grid">
          {reviews.map((rev, i) => (
            <div key={i} className="review-circle-card">
              <div className="review-quote"><Quote size={20} fill="#d4af37" color="#d4af37" /></div>
              <p>"{rev.text}"</p>
              <div className="review-footer">
                <span className="reviewer-name">{rev.name}</span>
                <div className="reviewer-stars">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={12} fill="#d4af37" color="#d4af37" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="gallery-luxe">
        <div className="container">
           <h3 className="title-luxe text-center">Galería</h3>
           <div className="gallery-masonry">
             <div className="gallery-item large"><img src={gallery1} alt="Trabajo 1" /></div>
             <div className="gallery-item"><img src={gallery2} alt="Trabajo 2" /></div>
             <div className="gallery-item"><img src={gallery3} alt="Trabajo 3" /></div>
           </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="contact-luxe">
        <div className="container contact-grid">
          <div className="contact-info">
            <h3 className="title-luxe">Ubicación</h3>
            <div className="info-block">
              <MapPin className="gold-icon" />
              <div>
                <p className="label">Dirección</p>
                <p>Carrer de Josep Royo, 21, Sant Adrià</p>
              </div>
            </div>
            <div className="info-block">
              <Clock className="gold-icon" />
              <div>
                <p className="label">Horario</p>
                <p>Lunes a Sábado: 09:00 — 21:00</p>
              </div>
            </div>
            <div className="info-block">
              <Phone className="gold-icon" />
              <div>
                <p className="label">Contacto</p>
                <p>+34 640 83 23 67</p>
                <div className="social-mini">
                  <a href="https://www.instagram.com/barberabdel/"><Instagram size={20} /></a>
                  <a href={`https://wa.me/${whatsappNumber}`}><MessageCircle size={20} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map">
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
      </section>

      <footer className="footer-luxe">
        <div className="container">
          <p>© 2024 ABDEL BARBER SHOP — Sant Adrià de Besòs.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
