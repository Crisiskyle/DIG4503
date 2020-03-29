
import styles from './Styles.module.css'


class IdSearch extends React.Component {

    IdSearchFormSubmit = () => {

        // Get the input's value
        let idSearch = document.querySelector('#idSearch').value;

        // Look for pokemon based on the id
        fetch("http://localhost:3000/api/pokemon/id/" + idSearch)
        .then((res) => { return res.json() })
        .then((processed) => {
            console.log(processed);
            // Call the callback function given to the class component
            //this.props.callback(processed);
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