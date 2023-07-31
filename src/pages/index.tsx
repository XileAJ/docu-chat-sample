import { ReactElement } from 'react';
import Image from 'next/image';
import styles from '../../components/HomePage/Homepage.module.css';
import Head from 'next/head';
import Button from '../../components/Buttons/button';
import LearnMoreButton from '../../components/Buttons/LearnMore.Button';

type Props = {
  children: ReactElement;
};

const HomePage: React.FC<Props> = () => {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bannercontent}>
            <div className={styles.textcontent}>
              <p className={styles.p}>Welcome to</p>
              <p className={styles.p2}>DocuChat</p>
              <p className={styles.p3}>
                Your AI-powered guide for seamless navigation across diverse
                <br />
                document formats.
              </p>
              <Button onClick={handleClick}>Try it now</Button>
              <p className={styles.p4}>Start your journey with DocuChat today.</p>
            </div>
            <div className={styles.bannerimg}>
              <Image className={styles.rightimg} src='/robot02.png' alt="Robot" width={600} height={600} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.container}>
          <div className={styles.introduction}>
            <div className={styles.title}>
              <p className={styles.p5}>Key Features of DocuChat</p>
              <p className={styles.p6}>Explore the capabilities of DocuChat.</p>
            </div>
            <div className={styles.LearnMore}>
              <div className={styles.article1}>
                <div className={styles.titleicon}>
                  <Image className={styles.SuccessIcon} src='/success.png' alt="Success" width={24} height={24} />
                  <p className={styles.p7}>VERSATILE DOCUMENT SUPPORT</p>
                </div>
                <p className={styles.p8}>DocuChat can navigate through PDFs, &apos;CSVs, Excel files, images, and more.</p>
                <div className={styles.LearnMoreArrowText}>
                  <LearnMoreButton onClick={handleClick}>Learn more &rarr;</LearnMoreButton>
                </div>
              </div>
              <div className={styles.article2}>
                <div className={styles.titleicon}>
                  <Image className={styles.SuccessIcon} src='/success.png' alt="Success" width={24} height={24} />
                  <p className={styles.p7}>PRECISE ANSWERS</p>
                </div>
                <p className={styles.p8}>Ask a question and DocuChat scans your &apos;document, providing precise answers.</p>
                <div className={styles.LearnMoreArrowText}>
                  <LearnMoreButton onClick={handleClick}>Learn more &rarr;</LearnMoreButton>
                </div>
              </div>
              <div className={styles.article3}>
                <div className={styles.titleicon}>
                  <Image className={styles.SuccessIcon} src='/success.png' alt="Success" width={24} height={24} />
                  <p className={styles.p7}>USER-FRIENDLY INTERFACE</p>
                </div>
                <p className={styles.p8}>Interact with your documents via a user-friendly chat interface.</p>
                <div className={styles.LearnMoreArrowText}>
                  <LearnMoreButton onClick={handleClick}>Learn more &rarr;</LearnMoreButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.container}>
          <div className={styles.featurescontext}>
            <div className={styles.leftcontext}>
              <h1 className={styles.titleh1}>Time Saving</h1>
              <p className={styles.p9}>With DocuChat, save time by swiftly extracting data from your documents.</p>
              <Button onClick={handleClick}>Learn more</Button>
            </div>
            <div className={styles.rightcontext}>
              <div className={styles.imgtimesaving}>
                <Image className={styles.timesavingimg} src='/time-saving.png' alt="Time Saving" width={600} height={600} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.featurescontext}>
            <div className={styles.leftcontext}>
              <div className={styles.productivityimg}>
                <Image className={styles.ProductivityBoost} src='/productboost.png' alt="Productivity Boost" width={500} height={500} />
              </div>
            </div>
            <div className={styles.rightcontext}>
              <div className={styles.rightcontext2}>
                <h1 className={styles.titleh1}>Productivity Boost</h1>
                <p className={styles.p9}>Boost your productivity by focusing on what&apos;s important and leaving the document navigation to DocuChat.</p>
                <Button onClick={handleClick}>Learn more</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.featurescontext}>
            <div className={styles.leftcontext}>
              <h1 className={styles.titleh1}>Future of Document<br />Interaction</h1>
              <p className={styles.p9}>Experience the future of document interaction&mdash;effortless and intuitive with DocuChat.</p>
              <Button onClick={handleClick}>Learn more</Button>
            </div>
            <div className={styles.rightcontext}>
              <div className={styles.futureimgdocument}>
                <Image className={styles.DocumentFuture} src='/pdf-interaction.jpg' alt="Document Interaction" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.container}>
          <div className={styles.featurescontext2}>
            <div className={styles.title2}>
              <p className={styles.p5}>More Features</p>
              <p className={styles.p6}>Discover more ways DocuChat can enhance your document interaction experience.</p>
            </div>
            <div className={styles.advancedfeatures}>
              <h2 className={styles.h2title}>Advanced Features</h2>
              <div className={styles.featureslist}>
                <Image className={styles.correcticon} src='/correct.png' alt="Correct" width={24} height={24} />
                <a href=''>
                  <p className={styles.p10}>Advanced Search</p>
                </a>
              </div>
              <div className={styles.featureslist}>
                <Image className={styles.correcticon} src='/correct.png' alt="Correct" width={24} height={24} />
                <a href=''>
                  <p className={styles.p11}>Data Visualization</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section5}>
        <div className={styles.container}>
          <div className={styles.securecontext}>
            <h1 className={styles.secureh1title}>Secure and Reliable</h1>
            <p className={styles.p12}>Your data is safe with us. We prioritize security and reliability in our services.</p>
            <Button onClick={handleClick}>Learn more</Button>
            <p className={styles.p13}>Trust in our commitment to your data&apos;s security.</p>
            <div className={styles.computerimg}>
              <Image className={styles.imgcomputer} src="/computer2.png" alt="Computer" width={600} height={600} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section6}>
        <div className={styles.container}>
          <div className={styles.securecontext}>
            <h1 className={styles.readyh1title}>Ready to Experience <br />DocuChat?</h1>
            <p className={styles.p12}>Join us and revolutionize the way you interact with documents.</p>
            <Button onClick={handleClick}>Get Started</Button>
            <p className={styles.p14}>Start your journey with DocuChat today.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
