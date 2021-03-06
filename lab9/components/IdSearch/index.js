
import styles from './Styles.module.css'


class IdSearch extends React.Component {

    IdSearchFormSubmit = () => {

        let idSearch = document.querySelector('#idSearch').value;

        fetch("http://localhost:3000/api/pokemon/id/" + idSearch)
        .then((res) => { return res.json() })
        .then((processed) => {
            console.log(processed);
          
            let reporting = document.querySelector("#reportingArea");

            if(processed.error){
                reporting.innerHTML = "Sorry, that doesn't exist. We returned: " + processed.error;
            } else{
                reporting.innerHTML = "WHO's that Pokémon?? it's " + processed.name +  "!";
            }
        });

    }

    render() {
        return(
            <div className={styles.input}>
                <h2>Search for Pokemon by their Id:</h2>
                <input 
                    type="text" 
                    id="idSearch" 
                />
                <button onClick={this.IdSearchFormSubmit}>Search by Id</button>

            </div>
        );
    }

}

export default IdSearch;