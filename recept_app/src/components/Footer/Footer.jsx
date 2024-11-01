import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Subscribe from '../Subscribe/Subscribe';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerColumn}>
          <h4>Sipp & Slurp, Fullständiga rättigheter</h4>
          <Link to="categories/vodka">Vodka</Link>
          <Link to="categories/absinth">Absinth</Link>
          <Link to="categories/gin">Gin</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4><a href="mailto:blabla@blabla.com?subject=Drinktips&body=Hej, mitt drinktips är:">Drinktips? Kontakta oss!</a></h4>
          <Link to="categories/tequila">Tequila</Link>
          <Link to="categories/sake">Sake</Link>
          <Link to="categories/brandy">Brandy</Link>
          <Link to="categories/alkoholfri">Alkoholfritt</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4><Link to="/rated">Topplista</Link></h4>
          <Link to="categories/rom">Rom</Link>
          <Link to="categories/whiskey">Whiskey</Link>
          <Link to="categories/mezcal">Mezcal</Link>
          <Link to="/gdpr">GDPR</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4><Link to="/about-us">Om oss</Link></h4>
        </div>
      </div>
      <Subscribe/>
    </footer>
  );
};

export default Footer;