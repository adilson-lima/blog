import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/adilson-lima.png" />
                    <div className={styles.authorInfo}>
                        <strong>Adilson Pereira Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="publicado 11 de maio as 8:13" dateTime="2022-05011 00:12:45">Publicado a 1 hora</time>
            </header>

            <div className={styles.content}>
                
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉  &nbsp; jane.design/doctorcare</p>

                <p>
                    <a href=''>#novoprojeto</a> &nbsp;
                    <a href=''>#nlw</a> &nbsp;
                    <a href=''>#rocketseat</a>
                </p>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}