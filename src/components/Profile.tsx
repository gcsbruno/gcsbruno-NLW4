import styles from "..//styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gcsbruno.png" alt="Bruno Guimarães"/>
            <div>
                <strong>Bruno Guimarães</strong>
                <p>
                     <img src="icons/level.svg" alt=""/>
                     level 1
                </p>
            </div>
        </div> 
    )
}