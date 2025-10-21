import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Redirect to the HTML version
    window.location.href = '/index.html';
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '600' }}>
          Software Engineering Team Portfolio
        </h1>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#e2e8f0' }}>
          This project uses pure HTML, CSS, and JavaScript.
        </p>
        <p style={{ marginBottom: '1.5rem', color: '#cbd5e1' }}>
          Redirecting to index.html...
        </p>
        <a 
          href="/index.html"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: 'white',
            color: '#2563eb',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '500',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Go to Portfolio →
        </a>
      </div>
    </div>
  );
}
