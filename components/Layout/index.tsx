import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './Layout.module.css';
import Button from '../Buttons/header.button';
import Button2 from '../Buttons/header.button2';

type Props = {
  children: ReactElement;
};

const handleClick = () => {
  console.log('Botão clicado!');
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.leftside}>
            <a href='http://localhost:3000'>
              <Image src='/icons8-bate-papo-48.png' alt='DocuChat' width={48} height={48} />
            </a>
            <p className={styles.pheader}>DocuChat</p>
          </div>
          <div className={styles.rightside}>
            <div className={styles.ul}>
              <Button2 onClick={handleClick}>Features</Button2>
              <Button2 onClick={handleClick}>Pricing</Button2>
              <Button2 onClick={handleClick}>About Us</Button2>
              <Button onClick={handleClick}>Sign Up</Button>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footermenu}>
            <div className={styles.fottertxt1}>
              <p className={styles.allrightreserved}>© 2023 DocuChat. All rights <br />reserved.</p>
            </div>
            <div className={styles.fottertxt2}>
              <p className={styles.Company}>Company</p>
              <a href=''>
                <p className={styles.AboutUs}>About Us</p>
              </a>
              <a href=''>
                <p className={styles.ContactUs}>Contact Us</p>
              </a>
            </div>
            <div className={styles.fottertxt3}>
              <p className={styles.Resources}>Resources</p>
              <a href=''>
                <p className={styles.Blog}>Blog</p>
              </a>
              <a href=''>
                <p className={styles.HelpCenter}>Help Center</p>
              </a>
            </div>
            <div className={styles.fottertxt4}>
              <p className={styles.SocialMidia}>Follow us on social<br />media</p>
              <div className={styles.SocialMidiaicons}>
                <a href=''>
                  <Image src='/facebook.svg' alt='Facebook' width={24} height={24} />
                </a>
                <a href=''>
                  <Image src='/twitter.svg' alt='Twitter' width={24} height={24} />
                </a>
                <a href=''>
                  <Image src='/linkedin.svg' alt='LinkedIn' width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.Lasttext}>
            <a href=''><p className={styles.p20}>Email</p></a>
            <a href=''><p className={styles.p21}>Phone</p></a>
          </div>
        </div>
      </footer>
    </>
  );
};
