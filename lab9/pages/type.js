import TypeSearch from '../components/TypeSearch';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Styles.module.css'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "table": []
    };

  }

  setResultsTable = (processed) => {
    return(
      this.setState({"table": processed})
      )
  }

  createResultsTable() {

    return (
      <table className={styles.tableResponse}>
        <tbody>
          {
            this.state.table.map((entry, index) => {
              return(
                <tr key={index}>
                  <td>{entry.id}</td>
                  <td>{entry.name}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    )
  }


  render() {
    return (
      <div>
        <div>
              <Head>
                  <title>Type</title>
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
        <div>
          <TypeSearch callback={this.setResultsTable} />
          {this.createResultsTable()}
        </div>
      </div>
    );
  }
  
}

export default App;
