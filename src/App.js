import React, { useState } from 'react';
import { Heart, Share2, Copy, Check } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState('en');
  const [copied, setCopied] = useState(false);
  
  const content = {
    en: {
      title: "Help Dylan Romero Heal",
      subtitle: "Our Brave 12-Year-Old Fighter",
      storyTitle: "Dylan's Story",
      story: "On July 9, 2025, Dylan Romero—a joyful 12-year-old—was hit by a truck while riding his bike to meet friends at the park. The truck struck the rear wheel, causing Dylan severe injuries. He has undergone two surgeries and is currently being treated for a fractured clavicle, fighting for recovery in the Pediatric Intensive Care Unit at the University Hospital since the accident.",
      supportText: "We are asking for your support during this difficult time. Every donation will directly cover Dylan's medical and hospital costs. If you can't donate, please share this brave boy's story with your loved ones.",
      donateTitle: "Make a Donation",
      qrText: "Scan the Zelle QR code below to contribute:",
      phoneText: "Or send your donation to Dylan's parents, Jorge Romero and Marlen Popoca:",
      donateButton: "Donate Now",
      raised: "Raised",
      goal: "goal",
      of: "of",
      shareButton: "Share Dylan's Story",
      copyLink: "Copy Link",
      linkCopied: "Link Copied!",
      thankYou: "Thank You for Your Support",
      supportMessage: "Every donation helps Dylan on his road to recovery"
    },
    es: {
      title: "Ayudemos a Dylan a Sanar",
      subtitle: "Nuestro Valiente Luchador de 12 Años",
      storyTitle: "Historia de Dylan",
      story: "El 9 de julio de 2025, Dylan Romero—un niño de 12 años lleno de alegría—fue atropellado por un camión mientras montaba su bicicleta para encontrarse con unos amigos en el parque. El camión impactó la rueda trasera, donde Dylan sufrió heridas graves. Ha sido sometido a dos cirugías y está siendo tratado por una fractura de clavícula, luchando por su recuperación en la Unidad de Cuidados Intensivos Pediátricos del Hospital Universitario desde el accidente.",
      supportText: "Estamos pidiendo tu apoyo en este momento tan difícil. Cada donación se destinará directamente a cubrir los gastos médicos y hospitalarios de Dylan. Si no puedes ayudar económicamente, por favor comparte la historia de este valiente niño con tus seres queridos.",
      donateTitle: "Haz una Donación",
      qrText: "Escanea el código QR de Zelle abajo para contribuir:",
      phoneText: "O envía tu donación a los padres de Dylan, Jorge Romero y Marlen Popoca:",
      donateButton: "Donar Ahora",
      raised: "Recaudado",
      goal: "objetivo",
      of: "de un",
      shareButton: "Comparte la Historia de Dylan",
      copyLink: "Copiar Enlace",
      linkCopied: "¡Enlace Copiado!",
      thankYou: "Gracias por su Apoyo",
      supportMessage: "Cada donación ayuda a Dylan en su camino hacia la recuperación"
    }
  };

  const currentContent = content[language];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f7ff 0%, #f8f0ff 50%, #fff0f6 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Heart style={{ color: '#ef4444', width: '24px', height: '24px' }} />
            <span style={{
              fontWeight: 'bold',
              fontSize: '20px',
              color: '#374151'
            }}>Dylan's Fund</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setLanguage('en')}
              style={{
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: language === 'en' ? '#3b82f6' : '#e5e7eb',
                color: language === 'en' ? 'white' : '#374151',
                boxShadow: language === 'en' ? '0 4px 12px rgba(59, 130, 246, 0.4)' : 'none'
              }}
              onMouseOver={(e) => {
                if (language !== 'en') {
                  e.target.style.backgroundColor = '#d1d5db';
                }
              }}
              onMouseOut={(e) => {
                if (language !== 'en') {
                  e.target.style.backgroundColor = '#e5e7eb';
                }
              }}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('es')}
              style={{
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: language === 'es' ? '#3b82f6' : '#e5e7eb',
                color: language === 'es' ? 'white' : '#374151',
                boxShadow: language === 'es' ? '0 4px 12px rgba(59, 130, 246, 0.4)' : 'none'
              }}
              onMouseOver={(e) => {
                if (language !== 'es') {
                  e.target.style.backgroundColor = '#d1d5db';
                }
              }}
              onMouseOut={(e) => {
                if (language !== 'es') {
                  e.target.style.backgroundColor = '#e5e7eb';
                }
              }}
            >
              Español
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)'
        }}></div>
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 20px',
          textAlign: 'center'
        }}>
          <div style={{
            animation: 'fadeIn 0.6s ease-out'
          }}>
            <h1 style={{
              fontSize: window.innerWidth < 768 ? '32px' : window.innerWidth < 1024 ? '48px' : '64px',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '16px',
              lineHeight: '1.2'
            }}>
              {currentContent.title}
            </h1>
            <p style={{
              fontSize: window.innerWidth < 768 ? '18px' : window.innerWidth < 1024 ? '20px' : '24px',
              color: '#6b7280',
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px auto'
            }}>
              {currentContent.subtitle}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px'
            }}>
              <div style={{
                width: window.innerWidth < 768 ? '192px' : '256px',
                height: window.innerWidth < 768 ? '192px' : '256px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                border: '4px solid rgba(255, 255, 255, 0.5)'
              }}>
                <img 
                  src="/dylanpics.png" 
                  alt="Dylan Romero" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '2fr 1fr',
          gap: '32px'
        }}>
          
          {/* Story Section */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
              padding: '32px',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              <h2 style={{
                fontSize: window.innerWidth < 768 ? '20px' : '24px',
                fontWeight: 'bold',
                color: '#374151',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Heart style={{ 
                  width: window.innerWidth < 768 ? '20px' : '24px', 
                  height: window.innerWidth < 768 ? '20px' : '24px', 
                  color: '#ef4444', 
                  marginRight: '12px' 
                }} />
                {currentContent.storyTitle}
              </h2>
              
              <div>
                <p style={{
                  color: '#374151',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontSize: window.innerWidth < 768 ? '16px' : '18px'
                }}>
                  {currentContent.story}
                </p>
                
                <p style={{
                  color: '#374151',
                  lineHeight: '1.6',
                  fontSize: window.innerWidth < 768 ? '16px' : '18px'
                }}>
                  {currentContent.supportText}
                </p>
              </div>

              <div style={{
                marginTop: '32px',
                padding: '24px',
                background: 'linear-gradient(90deg, #f0f7ff 0%, #f8f0ff 100%)',
                borderRadius: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: window.innerWidth < 640 ? 'column' : 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px'
                }}>
                  <button
                    onClick={handleCopyLink}
                    style={{
                      width: window.innerWidth < 640 ? '100%' : 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '25px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      transform: 'scale(1)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#f9fafb';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    {copied ? <Check style={{ width: '20px', height: '20px', color: '#22c55e' }} /> : <Copy style={{ width: '20px', height: '20px', color: '#6b7280' }} />}
                    <span style={{
                      fontWeight: '500',
                      color: '#374151'
                    }}>
                      {copied ? currentContent.linkCopied : currentContent.copyLink}
                    </span>
                  </button>
                  <button style={{
                    width: window.innerWidth < 640 ? '100%' : 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    transform: 'scale(1)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#3b82f6';
                    e.target.style.transform = 'scale(1)';
                  }}
                  >
                    <Share2 style={{ width: '20px', height: '20px' }} />
                    <span style={{ fontWeight: '500' }}>{currentContent.shareButton}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Section */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
              padding: window.innerWidth < 768 ? '24px' : '32px',
              position: window.innerWidth >= 1024 ? 'sticky' : 'static',
              top: window.innerWidth >= 1024 ? '96px' : 'auto'
            }}>
              <h2 style={{
                fontSize: window.innerWidth < 768 ? '18px' : '20px',
                fontWeight: 'bold',
                color: '#374151',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                {currentContent.donateTitle}
              </h2>

              {/* Progress Bar */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#6b7280',
                  marginBottom: '8px'
                }}>
                  <span>{currentContent.raised}: 30%</span>
                  <span>{currentContent.of} $10,000</span>
                </div>
                <div style={{
                  width: '100%',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '10px',
                  height: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
                    borderRadius: '10px',
                    width: '30%',
                    transition: 'width 1s ease-out'
                  }}></div>
                </div>
                <div style={{
                  textAlign: 'center',
                  marginTop: '8px',
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  30% {currentContent.of} {currentContent.goal}
                </div>
              </div>

              {/* QR Code */}
              <div style={{
                textAlign: 'center',
                marginBottom: '24px'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '16px'
                }}>{currentContent.qrText}</p>
                <div style={{
                  width: window.innerWidth < 768 ? '160px' : '192px',
                  height: window.innerWidth < 768 ? '160px' : '192px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: window.innerWidth < 768 ? '96px' : '128px',
                      height: window.innerWidth < 768 ? '96px' : '128px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        color: '#6b7280'
                      }}>QR Code</span>
                    </div>
                    <p style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>Zelle QR Code</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div style={{
                textAlign: 'center',
                marginBottom: '24px'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '8px'
                }}>{currentContent.phoneText}</p>
                <p style={{
                  fontWeight: '600',
                  fontSize: '18px',
                  color: '#374151',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  padding: '8px 16px'
                }}>
                  (908) 884-4433
                </p>
              </div>

              {/* Donate Button */}
              <button style={{
                width: '100%',
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                fontWeight: 'bold',
                padding: '16px 24px',
                fontSize: '16px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'scale(1)',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
              }}
              >
                <Heart style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }} />
                {currentContent.donateButton}
              </button>

              {/* Thank You Message */}
              <div style={{
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid #e5e7eb'
              }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  {currentContent.thankYou}
                </h3>
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    {currentContent.supportMessage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '32px 0',
        marginTop: '64px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <Heart style={{ color: '#ef4444', width: '24px', height: '24px' }} />
            <span style={{
              fontWeight: 'bold',
              fontSize: '20px'
            }}>Dylan's Fund</span>
          </div>
          <p style={{
            color: '#9ca3af'
          }}>
            {language === 'en' 
              ? 'Every donation makes a difference. Thank you for your support.'
              : 'Cada donación marca la diferencia. Gracias por su apoyo.'
            }
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;