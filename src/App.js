import React, { useState, useEffect, useMemo } from 'react';
import { Heart, Share2, Users, DollarSign, Phone, Copy, Globe } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, updateDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9v-u-4CcGqXMo7aZfrTmiLj8fuPBjIlM",
  authDomain: "dylanmedical-feaff.firebaseapp.com",
  projectId: "dylanmedical-feaff",
  storageBucket: "dylanmedical-feaff.firebasestorage.app",
  messagingSenderId: "735536597763",
  appId: "1:735536597763:web:2e2ee0ce0e5703dfe2b736",
  measurementId: "G-BC8BJS91RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DylanFundraiser = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [showZelleInfo, setShowZelleInfo] = useState(false);
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState('');
  const [fundraiserData, setFundraiserData] = useState({
    organizer: 'Jorge Romero & Marlen Popoca',
    location: 'Newark, NJ',
    goal: 35000,
    raised: 8750,
    donors: 67,
    daysLeft: 52,
    shares: 23,
    hearts: 45,
    zelleInfo: { phone: '(908) 884-4433' }
  });

  // Fetch fundraiser data from Firestore
  useEffect(() => {
    const docRef = doc(db, 'fundraisers', 'dylan');
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setFundraiserData(docSnap.data());
        setError('');
      } else {
        setError('Failed to load fundraiser data.');
      }
    }, (err) => {
      setError('Error fetching data: ' + err.message);
    });
    return () => unsubscribe();
  }, []);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoize styles to prevent recalculation
  const styles = useMemo(() => ({
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #EBF8FF 0%, #F3E8FF 100%)',
      fontFamily: 'Arial, sans-serif'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '12px' : '16px'
    },
    languageToggle: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'rgba(255, 255, 255, 0.95)',
      border: '2px solid #3B82F6',
      borderRadius: '50px',
      padding: '8px 16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#3B82F6',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px-1px rgba(0, 0, 0, 0.1)'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      marginBottom: isMobile ? '16px' : '24px',
      overflow: 'hidden'
    },
    header: {
      position: 'relative',
      height: isMobile ? '250px' : '300px',
      background: 'linear-gradient(to right, #EC4899, #8B5CF6)',
      color: 'white',
      padding: isMobile ? '20px' : '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: isMobile ? 'column' : 'row'
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    headerContent: {
      position: 'relative',
      zIndex: 10,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    headerImage: {
      position: 'relative',
      zIndex: 10,
      width: isMobile ? '120px' : '160px',
      height: isMobile ? '120px' : '160px',
      borderRadius: '50%',
      border: '4px solid white',
      objectFit: 'cover',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
      marginTop: isMobile ? '16px' : '0',
      marginLeft: isMobile ? '0' : '24px'
    },
    title: {
      fontSize: isMobile ? '20px' : '28px',
      fontWeight: 'bold',
      marginBottom: '8px',
      margin: 0,
      lineHeight: '1.2'
    },
    subtitle: {
      color: '#FBBF24',
      margin: 0,
      fontSize: isMobile ? '14px' : '16px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: isMobile ? '16px' : '24px'
    },
    gridLg: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
      gap: isMobile ? '16px' : '24px'
    },
    cardContent: {
      padding: isMobile ? '16px' : '24px'
    },
    progressBar: {
      width: '100%',
      height: '12px',
      backgroundColor: '#E5E7EB',
      borderRadius: '6px',
      overflow: 'hidden',
      marginBottom: '16px'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
      transition: 'width 0.5s ease'
    },
    button: {
      width: '100%',
      background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
      color: 'white',
      padding: isMobile ? '14px' : '16px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: isMobile ? '16px' : '18px',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    buttonSecondary: {
      width: '100%',
      backgroundColor: 'transparent',
      color: '#374151',
      padding: '12px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: isMobile ? '14px' : '16px',
      border: '2px solid #D1D5DB',
      cursor: 'pointer',
      marginTop: '12px',
      transition: 'background-color 0.2s'
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    flexBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px'
    },
    textCenter: {
      textAlign: 'center'
    },
    zelleCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: isMobile ? '16px' : '24px',
      border: '2px solid #DBEAFE'
    },
    zelleInfo: {
      backgroundColor: '#EBF8FF',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '16px'
    },
    quickAmountGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '6px' : '8px',
      marginTop: '12px'
    },
    quickAmountBtn: {
      backgroundColor: '#F3F4F6',
      color: '#374151',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    qrCodeContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '16px'
    },
    errorMessage: {
      color: '#DC2626',
      fontSize: isMobile ? '12px' : '14px',
      textAlign: 'center',
      marginBottom: '16px'
    }
  }), [isMobile]);

  const translations = {
    en: {
      languageToggle: 'ES',
      medicalFundraiser: 'Medical Fundraiser',
      title: 'Help Dylan Heal - Our Brave 12-Year-Old Boy',
      organizer: 'Jorge Romero & Marlen Popoca',
      location: 'Newark, NJ',
      ourStory: 'Our Story',
      story: 'On July 9, 2025, Dylan Romero—a joyful 12-year-old boy—was struck by a truck while riding his bicycle to meet friends at the park. The truck hit the rear wheel of his bike where Dylan suffered serious injuries.',
      story2: 'He has already undergone two cranial surgeries and is being treated for a clavicle fracture. Dylan continues fighting for his recovery in the Pediatric Intensive Care Unit at University Hospital, where he remains since the accident.',
      story3: 'We are asking for your support during this difficult time. Every donation will go directly to cover Dylan\'s medical and hospital expenses.',
      story4: 'If you cannot help financially, your prayers and sharing this flyer are equally valuable.',
      goalMessage: 'Let\'s join together to bring back the smile and joy to our beloved Dylan. Thank you for your attention.',
      recentUpdates: 'Recent Updates',
      update1Title: 'Recovering in ICU',
      update1Text: 'Dylan continues his brave fight in the Pediatric ICU. Thank you for your continued support and prayers!',
      update2Title: 'Fundraiser Launched',
      update2Text: 'We\'ve officially launched Dylan\'s medical fundraiser. Your support means everything to our family.',
      raised: 'raised',
      goal: 'goal',
      funded: 'funded',
      daysLeft: 'days left',
      donors: 'donors',
      shares: 'shares',
      hearts: 'hearts',
      donateNow: 'Donate Now',
      shareFundraiser: 'Share Fundraiser',
      likeFundraiser: 'Like Fundraiser',
      donateViaZelle: 'Donate via Zelle',
      donateSecurely: 'Scan the QR code or use the phone number to send your donation securely',
      phone: 'Phone',
      copiedToClipboard: 'Copied to clipboard!',
      quickAmounts: 'Quick amounts:',
      contactOrganizer: 'Contact Organizer',
      parentsOf: 'Parents of Dylan',
      daysAgo: 'days ago',
      weekAgo: 'week ago',
      of: 'of',
      error: 'An error occurred. Please try again later.'
    },
    es: {
      languageToggle: 'EN',
      medicalFundraiser: 'Recaudación Médica',
      title: 'Ayudemos a Dylan a Sanar - Nuestro Valiente Niño de 12 Años',
      organizer: 'Jorge Romero y Marlen Popoca',
      location: 'Newark, NJ',
      ourStory: 'Nuestra Historia',
      story: 'El 9 de Julio de 2025, Dylan Romero—un niño de 12 años lleno de alegría—fue atropellado por un camión mientras montaba su bicicleta para encontrarse con unos amigos en el parque. El camión impactó la rueda trasera de su bici donde Dylan sufrió heridas graves.',
      story2: 'Ya ha sido sometido a dos cirugías craneales y está siendo tratado por una fractura de clavícula. Dylan sigue luchando por su recuperación en la Unidad de Cuidados Intensivos Pediátricos del Hospital Universitario, donde continúa desde del accidente.',
      story3: 'Estamos pidiendo tu apoyo en este momento tan difícil. Cada donación se destinará directamente a cubrir los gastos médicos y hospitalarios de Dylan.',
      story4: 'Si no puedes ayudar económicamente, tus oraciones y compartir este volante son igual de valiosos.',
      goalMessage: 'Unámonos para devolverle la sonrisa y la alegría a nuestro querido Dylan. Gracias por su atención.',
      recentUpdates: 'Actualizaciones Recientes',
      update1Title: 'Recuperándose en UCI',
      update1Text: 'Dylan continúa su valiente lucha en la UCI Pediátrica. ¡Gracias por su apoyo continuo y oraciones!',
      update2Title: 'Recaudación Lanzada',
      update2Text: 'Hemos lanzado oficialmente la recaudación médica de Dylan. Su apoyo significa todo para nuestra familia.',
      raised: 'recaudado',
      goal: 'meta',
      funded: 'financiado',
      daysLeft: 'días restantes',
      donors: 'donantes',
      shares: 'compartidos',
      hearts: 'corazones',
      donateNow: 'Donar Ahora',
      shareFundraiser: 'Compartir Recaudación',
      likeFundraiser: 'Me Gusta la Recaudación',
      donateViaZelle: 'Donar por Zelle',
      donateSecurely: 'Escanea el código QR o usa el número de teléfono para enviar tu donación de forma segura',
      phone: 'Teléfono',
      copiedToClipboard: '¡Copiado al portapapeles!',
      quickAmounts: 'Cantidades rápidas:',
      contactOrganizer: 'Contactar Organizador',
      parentsOf: 'Padres de Dylan',
      daysAgo: 'días atrás',
      weekAgo: 'semana atrás',
      of: 'de',
      error: 'Ocurrió un error. Por favor intenta de nuevo.'
    }
  };

  const t = translations[language];
  const progressPercentage = (fundraiserData.raised / fundraiserData.goal) * 100;

  const handleDonateClick = () => {
    setShowZelleInfo(true);
  };

  const handleLikeClick = async () => {
    try {
      const docRef = doc(db, 'fundraisers', 'dylan');
      await updateDoc(docRef, { hearts: fundraiserData.hearts + 1 });
      setError('');
    } catch (err) {
      setError(t.error);
    }
  };

  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: t.title,
          text: t.story,
          url: window.location.href
        });
        const docRef = doc(db, 'fundraisers', 'dylan');
        await updateDoc(docRef, { shares: fundraiserData.shares + 1 });
        setError('');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        const docRef = doc(db, 'fundraisers', 'dylan');
        await updateDoc(docRef, { shares: fundraiserData.shares + 1 });
      }
    } catch (err) {
      setError(t.error);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setError('');
    } catch (err) {
      setError(t.error);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const quickAmounts = [25, 50, 100, 250, 500];

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Error Message */}
        {error && <div style={styles.errorMessage}>{error}</div>}

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          style={styles.languageToggle}
          aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#3B82F6';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            e.target.style.color = '#3B82F6';
          }}
        >
          <Globe size={16} aria-hidden="true" />
          {t.languageToggle}
        </button>

        {/* Header */}
        <section style={styles.card}>
          <div style={styles.header}>
            <div style={styles.headerOverlay}></div>
            <div style={styles.headerContent}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Heart size={isMobile ? 20 : 24} color="#FBBF24" />
                <span style={{ color: '#FBBF24', fontWeight: '500', fontSize: isMobile ? '14px' : '16px' }}>{t.medicalFundraiser}</span>
              </div>
              <h1 style={styles.title}>{t.title}</h1>
              <p style={styles.subtitle}>{fundraiserData.organizer} • {fundraiserData.location}</p>
            </div>
            <img
              src="/dylanpics.png"
              alt="Portrait of Dylan Romero"
              style={styles.headerImage}
            />
          </div>
        </section>

        <div style={isMobile ? styles.grid : styles.gridLg}>
          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '24px' }}>
            {/* Story Section */}
            <section style={styles.card}>
              <div style={styles.cardContent}>
                <h2 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1F2937', marginBottom: '16px' }}>{t.ourStory}</h2>
                <div style={{ color: '#4B5563', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '16px', fontSize: isMobile ? '14px' : '16px' }}>{t.story}</p>
                  <p style={{ marginBottom: '16px', fontSize: isMobile ? '14px' : '16px' }}>{t.story2}</p>
                  <p style={{ marginBottom: '16px', fontSize: isMobile ? '14px' : '16px' }}>{t.story3}</p>
                  <p style={{ marginBottom: '16px', fontSize: isMobile ? '14px' : '16px' }}>{t.story4}</p>
                  <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#6B7280', fontWeight: '500' }}>{t.goalMessage}</p>
                </div>
              </div>
            </section>

            {/* Updates Section */}
            <section style={styles.card}>
              <div style={styles.cardContent}>
                <h2 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1F2937', marginBottom: '16px' }}>{t.recentUpdates}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ borderLeft: '4px solid #3B82F6', paddingLeft: '16px', paddingTop: '8px', paddingBottom: '8px' }}>
                    <div style={styles.flexBetween}>
                      <h3 style={{ fontWeight: '600', color: '#1F2937', fontSize: isMobile ? '14px' : '16px' }}>{t.update1Title}</h3>
                      <span style={{ fontSize: '12px', color: '#6B7280' }}>3 {t.daysAgo}</span>
                    </div>
                    <p style={{ color: '#4B5563', marginTop: '8px', fontSize: isMobile ? '13px' : '14px' }}>{t.update1Text}</p>
                  </div>
                  <div style={{ borderLeft: '4px solid #10B981', paddingLeft: '16px', paddingTop: '8px', paddingBottom: '8px' }}>
                    <div style={styles.flexBetween}>
                      <h3 style={{ fontWeight: '600', color: '#1F2937', fontSize: isMobile ? '14px' : '16px' }}>{t.update2Title}</h3>
                      <span style={{ fontSize: '12px', color: '#6B7280' }}>1 {t.weekAgo}</span>
                    </div>
                    <p style={{ color: '#4B5563', marginTop: '8px', fontSize: isMobile ? '13px' : '14px' }}>{t.update2Text}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '24px' }}>
            {/* Progress Card */}
            <section style={styles.card}>
              <div style={styles.cardContent}>
                <div style={{ ...styles.textCenter, marginBottom: '24px' }}>
                  <div style={{ fontSize: isMobile ? '24px' : '28px', fontWeight: 'bold', color: '#1F2937', marginBottom: '4px' }}>
                    ${fundraiserData.raised.toLocaleString()}
                  </div>
                  <div style={{ color: '#4B5563', fontSize: isMobile ? '14px' : '16px' }}>
                    {t.raised} {t.of} ${fundraiserData.goal.toLocaleString()} {t.goal}
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={styles.progressBar}>
                    <div
                      style={{ ...styles.progressFill, width: `${Math.min(progressPercentage, 100)}%` }}
                    ></div>
                  </div>
                  <div style={styles.flexBetween}>
                    <span style={{ fontSize: isMobile ? '12px' : '14px', color: '#4B5563' }}>{Math.round(progressPercentage)}% {t.funded}</span>
                    <span style={{ fontSize: isMobile ? '12px' : '14px', color: '#4B5563' }}>{fundraiserData.daysLeft} {t.daysLeft}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', marginBottom: '24px' }}>
                  <div>
                    <div style={{ ...styles.flexCenter, fontSize: isMobile ? '16px' : '20px', fontWeight: 'bold', color: '#1F2937', gap: '4px' }}>
                      <Users size={isMobile ? 16 : 20} />
                      {fundraiserData.donors}
                    </div>
                    <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#4B5563' }}>{t.donors}</div>
                  </div>
                  <div>
                    <div style={{ ...styles.flexCenter, fontSize: isMobile ? '16px' : '20px', fontWeight: 'bold', color: '#1F2937', gap: '4px' }}>
                      <Share2 size={isMobile ? 16 : 20} />
                      {fundraiserData.shares}
                    </div>
                    <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#4B5563' }}>{t.shares}</div>
                  </div>
                  <div>
                    <div style={{ ...styles.flexCenter, fontSize: isMobile ? '16px' : '20px', fontWeight: 'bold', color: '#1F2937', gap: '4px' }}>
                      <Heart size={isMobile ? 16 : 20} />
                      {fundraiserData.hearts}
                    </div>
                    <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#4B5563' }}>{t.hearts}</div>
                  </div>
                </div>

                <button
                  onClick={handleDonateClick}
                  style={styles.button}
                  aria-label="Open donation options"
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  {t.donateNow}
                </button>

                <button
                  onClick={handleShareClick}
                  style={styles.buttonSecondary}
                  aria-label="Share fundraiser"
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {t.shareFundraiser}
                </button>

                <button
                  onClick={handleLikeClick}
                  style={{ ...styles.buttonSecondary, marginTop: '12px' }}
                  aria-label="Like fundraiser"
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {t.likeFundraiser}
                </button>
              </div>
            </section>

            {/* Zelle Payment Info */}
            {showZelleInfo && (
              <section style={styles.zelleCard}>
                <div style={styles.textCenter}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px'
                  }}>
                    <DollarSign size={32} color="white" />
                  </div>
                  <h3 style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 'bold', color: '#1F2937' }}>{t.donateViaZelle}</h3>
                  <p style={{ color: '#4B5563', fontSize: isMobile ? '13px' : '14px', marginTop: '4px' }}>{t.donateSecurely}</p>
                </div>

                <div style={{ marginTop: '16px' }}>
                  <div style={styles.qrCodeContainer}>
                    <img
                      src="/zelle-qr.png"
                      alt="Zelle QR code for donations"
                      style={{
                        width: isMobile ? '120px' : '160px',
                        height: isMobile ? '120px' : '160px',
                        padding: '8px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '8px'
                      }}
                    />
                  </div>

                  <div style={styles.zelleInfo}>
                    <div style={styles.flexBetween}>
                      <span style={{ fontSize: isMobile ? '13px' : '14px', fontWeight: '500', color: '#374151' }}>{t.phone}</span>
                      <button
                        onClick={() => copyToClipboard(fundraiserData.zelleInfo.phone)}
                        style={{ background: 'none', border: 'none', color: '#3B82F6', cursor: 'pointer' }}
                        aria-label="Copy phone number"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <div style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: '600', color: '#1F2937' }}>{fundraiserData.zelleInfo.phone}</div>
                  </div>

                  <div style={{ fontSize: '12px', color: '#6B7280', textAlign: 'center', marginBottom: '16px', minHeight: '20px' }}>
                    {copied && <span style={{ color: '#10B981' }}>{t.copiedToClipboard}</span>}
                  </div>

                  <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}>
                    <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#4B5563', marginBottom: '12px' }}>{t.quickAmounts}</p>
                    <div style={styles.quickAmountGrid}>
                      {quickAmounts.map(amount => (
                        <button
                          key={amount}
                          style={styles.quickAmountBtn}
                          onClick={() => setDonationAmount(amount.toString())}
                          aria-label={`Select $${amount} donation`}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#E5E7EB'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#F3F4F6'}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Contact Info */}
            <section style={styles.card}>
              <div style={styles.cardContent}>
                <h3 style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 'bold', color: '#1F2937', marginBottom: '16px' }}>{t.contactOrganizer}</h3>
                <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#6B7280', marginBottom: '12px' }}>{t.parentsOf}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4B5563', fontSize: isMobile ? '13px' : '14px' }}>
                    <Phone size={isMobile ? 16 : 20} />
                    <span>{fundraiserData.zelleInfo.phone}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DylanFundraiser;