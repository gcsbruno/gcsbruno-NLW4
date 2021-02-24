import { useContext } from "react";
import styles from "../styles/components/ChallengeBox.module.css";
import {ChallengesContext} from "../contexts/ChallengesContext"

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext); 
    console.log(contextData)

    const hasActiveChallenge = true;
    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg"/>
                    <strong>Novo desafio</strong>
                    <p>Faça polichinelos.</p>
                    </main>

                    <footer>
                    <button 
                    type="button"
                    className={styles.challengeFailedButton}>
                        Falhei
                    </button>

                    <button 
                    type="button"
                    className={styles.challengeSucceededButton}>
                        Completei
                    </button>

                    </footer>

                    </div>
            
            ): (
            <div className={styles.challengeNotActive}>
                <strong> Finalize um ciclo para receber os desafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando os desafios.
                </p>
            </div>
            ) }
        </div> )}
