<h2> Meme Generator - MemeClub </h2>
<h4> Things Learnt <h4>

<h6> 1.Random Method: </h6>
<span>
    Math.random() - Generates random number between 0-1. </br>
    Therefore if we have to generate random number between 0-10: </br>
</span>
    ```javascript
        Math.floor( Math.random() * 10 );
    ```
        
    

    <h6> 2.Event listener: </h6>
        <span>In the button tag: <button onClick={whateverfucntion}> Click ME </button> </span>
        <span>In the whatever function: function whateverfunction(){
            <!-- your code here -->
        }
        </span>
    

    <h6> 3.React State:</h6>
        <p>
        React state can be either used by
        import {useState} and 'react' and then useState()
        or
        React.useState()
        </p>
        <p>It returns array consisting 2 things:
        const [value, function] = React.useState(Initial_Value)
        </p>
        <p>
        Generally the value is thing component which we want to change and function is the setValue which consist of logic for the value to change.
        </p>
    

    <h6> 4.Spreading an array: [...array]</h6>
    <span>
    Adding an element in an array:

    const [thingArray, setThingsArray] = React.useState(["Thing1","Thing2"]) //Things existing in the array

    function addItem() {
        setThingsArray((prevStateArray) => {
            return [...prevStateArray, `Thing${prevStateArray.length + 1}`]
        })
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}> {thing} </p>)
    </span>

    <h6> 5.Updating State object: </h6>
        <span>
        const [contact, setContact] = React.useState({
        firstName: "Piyush",
        lastName: "Kumar',
        phone: "+91 (108) 654-2323",
        email: "notmyreal@gmail.com",
        isFavorite: true
        })

        let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

        functopn toggleFavorite{
            setContact(prevContact => ({
                return {
                ...prevContact, //Using spread technique
                isFavorite: !prevContact.isFavorite
                })
            })
        }
        </span>

    <h6> 6.Adding CSS in React </h6>
    <span>
        <div style={styles}> </div>
        And by making a variable, 
        const styles = {
            backgroundColor: "black"
            <!-- Rest of the code -->
        }
    </span>

</ol>
