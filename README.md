# Meme Generator - MemeClub
##  Things Learnt 

#### 1. Random Method:
Math.random() - Generates random number between 0-1. </br>
Therefore if we have to generate random number between 0-10: </br>
```
    Math.floor( Math.random() * 10 );
```
        
    

#### 2.Event listener:
In the button tag: 
```
    <button onClick={whateverfucntion}> Click ME </button>
```
In the whatever function: 
```
    function whateverfunction(){
        <!-- your code here -->
    }
```
    

#### 3.React State:
React state can be either used by
```
    import {useState} and 'react' and then useState()
        or
        React.useState()
```        
It returns array consisting 2 things:
```const [value, function] = React.useState(Initial_Value)```
Generally the value is thing component which we want to change and function is the setValue which consist of logic for the value to change.

#### 4.Spreading an array: ```[...array]```
Adding an element in an array:
```
    const [thingArray, setThingsArray] = React.useState(["Thing1","Thing2"]) 
    <!-- Things existing in the array -->
```
```
    function addItem() {
        setThingsArray((prevStateArray) => {
            return [...prevStateArray, `Thing${prevStateArray.length + 1}`]
        })
    }
```
```
    const thingsElements = thingsArray.map(thing => <p key={thing}> {thing} </p>)
```

#### 5.Updating State object: 
```
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
```

#### 6.Adding CSS in React:
```
    <div style={styles}> </div>

    <!-- And by making a variable -->
    const styles = {
        backgroundColor: "black"
        <!-- Rest of the code -->
    }
```
