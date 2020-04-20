import React from "react";

    class NameSearch extends React.Component {

         readName(event) {
            event.preventDefault();
            let element = document.querySelector("#name");

            fetch("http://localhost:80/pokemon/name/" + element.value)
            .then((res) => {
                return res.json();
            })
            .then((processed) => {
                
                let reporting = document.querySelector("#reportingArea");
                if(processed.error) {
                    reporting.innerHTML = processed.error;
                } else {
                    reporting.innerHTML = processed.id;
                }

            });

            element.value = "";
        }

        render() {
            return(
            
<<<<<<< HEAD
                <div class="container">
                    <h2 className="">Pokemon Name</h2>
=======
                <div class="Change">
                    <h2 className="Container">Pokemon Name</h2>
>>>>>>> 7f926778e2a899a823ef02abe27ef2563d903a0b
                    <form onSubmit={this.readName}>
                        <input id="name" type="text" />
                        <button>Submit</button>
                    </form>
                </div>
                
                );
            }
        }

        export default NameSearch;