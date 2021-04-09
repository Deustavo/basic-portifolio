import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import portifoliosContent from '../services/portifolios';
import carrersContent from '../services/carrers';
import contactContent from '../services/contact';

export default function Home() {
  const [portifolios, setPortifolios] = useState([]);
  const [carrers, setCarrers] = useState([]);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    setPortifolios(portifoliosContent);
    setCarrers(carrersContent);
    setContact(contactContent);
  }, [])

  return (
    <>
      <Head>
        <title>Gabriel Henke - Cientista de dados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.apresentation}>
          <p style={{ fontSize: '10vw' }}>Gabriel Henke</p>
          <p style={{ fontSize: '4vw' }}>Cientista de dados</p>
        </div>

        <div className={`marginPage ${styles.aboutMe}`}>
          <img src="/home/profile.png" />
          <div>
            <p className="titlePage">Olá, eu sou o Gabriel Henke</p>
            <p className={styles.aboutMeText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie nunc non. Vestibulum sed arcu non odio euismod lacinia at quis. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Odio facilisis mauris sit amet massa vitae tortor condimentum. Vel pretium lectus quam id leo in vitae turpis massa. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Varius quam quisque id diam vel quam elementum pulvinar. Et malesuada fames ac turpis egestas sed. Ut enim blandit volutpat maecenas. Aliquet risus feugiat in ante. Congue quisque egestas diam in arcu cursus. Placerat duis ultricies lacus sed. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet.</p>
          </div>
        </div>

        <div className={`marginPage ${styles.portfolio}`}>
          <p className="titlePage">Meu portifólio</p>
          <div className={styles.portfolioContainer}>
            {portifolios.map((p, index) => 
              <div key={index} className={styles.portfolioCard}>
                <img src={p.image} />
                <div style={{ padding: 24 }}>
                  <p className={styles.portfolioCardTitle}>{p.title}</p>
                  <p>{p.text}</p>
                  <button className={styles.portfolioButton}>Ver artigo completo</button>
                </div> 
              </div>
            )}
          </div>
        </div>

        <div className={styles.carrer}>
          <p className="titlePage">Minha carreira</p>
          <div className={styles.carrerContainer}>
            {carrers.map((c, index) =>
              <div key={index} className={styles.carrerItem}>
                <img src={c.image} />
                <p className={styles.carrerTitle}>{c.title}</p>
                <p>{c.text}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className={styles.contact}>
          <p className="titlePage">Entre em contato</p>
          <div className={styles.contactContainer}>
            {contact.map((c, index) =>
              <div key={index} className={styles.contactItem}>
                <img src={c.image} />
                <p>{c.text}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
