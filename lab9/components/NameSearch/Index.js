
import styles from './Styles.module.css'



class NameSearch extends React.Component {

    NameSearchFormSubmit = () => {

        
        let nameSearch = document.querySelector('#nameSearch').value;

        fetch("http://localhost:3000/api/pokemon/name/" + nameSearch)
        .then((res) => { return res.json() })
        .then((processed) => {
            console.log(processed);
           
            let reporting = document.querySelector("#reportingArea");

            if(processed.error){
                reporting.innerHTML = "Sorry, that doesn't exist. We returned: " + processed.error;
            } else{
                reporting.innerHTML = "WHO's that Pokémon?? It's Id is " + processed.id ;
            }
        });

    }

    render() {
        return(
            <div className={styles.input}>
                <h2>Search for Pokemon by their Name:</h2>
                <input 
                    type="text" 
                    id="nameSearch" 
                />
                <button onClick={this.NameSearchFormSubmit}>Search by Name</button>

            </div>
        );
    }

}

export default NameSearch;
