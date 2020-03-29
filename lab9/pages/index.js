import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css'

const Home = () => {
    return(
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <div className={styles.header}>
                <p>
                Here are your different options for the Pokédex
                </p>
                <div className={styles.nav}>
                    <Link href = "/id"><a className={styles.link}>Search by Id</a></Link>
                    <Link href = "/name"><a  className={styles.link}>Search by Name</a></Link>
                    <Link href = "/type"><a  className={styles.link}>Search by Type</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;