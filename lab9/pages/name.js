import NameSearch from '../components/NameSearch';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css'


class App extends React.Component {

  render() {
    return (
      <div>
        <div>
              <Head>
                  <title>Name</title>
              </Head>
              <div  className={styles.header}>
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
        <div>
          <NameSearch />
          <div id="reportingArea" className={styles.textResponse}></div>
        </div>
      </div>
    );
  }
  
}

export default App;