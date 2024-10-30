import React from 'react';
import styles from './GDPRPage.module.css';

const GDPRPage = () => {
  return (
    <div className={styles.container}>
      <h1>GDPR Information</h1>
      <p>
        Vi värnar om din integritet och behandlar dina personuppgifter i enlighet med GDPR-reglerna. Här kan du läsa mer om hur vi samlar in, använder och skyddar din data.
      </p>

      <h2>Vad är GDPR?</h2>
      <p>
        GDPR (General Data Protection Regulation) är en EU-förordning som syftar till att skydda individers personuppgifter och integritet.
      </p>

      <h2>Vilka personuppgifter samlar vi in?</h2>
      <p>
        Vi samlar endast in nödvändiga personuppgifter, såsom namn, e-postadress och IP-adress för att kunna tillhandahålla våra tjänster.
      </p>

      <h2>Hur använder vi dina uppgifter?</h2>
      <p>
        Din information används endast i syfte att förbättra våra tjänster och följa juridiska krav.
      </p>
    </div>
  );
}

export default GDPRPage;
