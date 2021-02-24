import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile"
import styles from "../styles/pages/Home.module.css"
import Head from 'next/head';
import {ChallengeBox} from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
   <Head>
     <title>Inicio | move.it</title>
     <link rel="shortcut icon" href="favicon.png" type="image.png" />
     <link rel="preconnect" href="https://fonts.gstatic.com"/>
     <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
     
   </Head>
   
    <ExperienceBar />


      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>

  )
}