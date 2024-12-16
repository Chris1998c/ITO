// app/contatti/page.jsx
export default function ContattiPage() {
    return (
      <section style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem' }}>Contattami</h2>
        <p style={{ marginBottom: '2rem' }}>
          Hai un progetto in mente o vuoi avere maggiori informazioni?
          Compila il form qui sotto o inviami una mail a <a href="mailto:info@albertoperri.com">info@albertoperri.com</a>.
        </p>
  
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="text" 
            placeholder="Nome e Cognome" 
            style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #333' }}
          />
          <input 
            type="email" 
            placeholder="Email" 
            style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #333' }}
          />
          <textarea 
            placeholder="Messaggio" 
            rows={6} 
            style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #333' }}
          />
          <button 
            type="submit" 
            style={{ 
              backgroundColor: '#00ffc8', 
              color: '#000', 
              padding: '0.8rem', 
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            Invia
          </button>
        </form>
      </section>
    );
  }
  