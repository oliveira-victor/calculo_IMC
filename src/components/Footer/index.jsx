import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Este site foi desenvolvido por Victor Freire Oliveira<br />
                <a href="https://github.com/oliveira-victor">github.com/oliveira-victor</a>
            </p>
        </footer>
    )
}

export default Footer