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
    <button onClick={whateverfuntcion}> Click ME </button>
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
        <!-- or -->
    React.useState()
```        
It returns array consisting 2 things: </br>
```const [value, function] = React.useState(Initial_Value);```
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

    <!-- By making a variable styles -->
    const styles = {
        backgroundColor: "black"
        <!-- Rest of the code -->
    }
```

#### 7.Handling Forms:
``` 
    const [formData, setFormData] = React.useState(
    firstName: "", comments: "", isFriendly: true, employment: "" }
    )

    <!-- When dealing with checkboxes and other form types -->
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData{ prevFormData => {
            return { 
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        }}
    }

    <!-- When dealing without checkbox -->
    function handleChange(event){
        const{name, value, type} = event.target
        setMeme( prevFormData => ({
            ...prevMeme,
            [name] : value
        }))
    }
```
 ```
    <input type="text" placeholder="Enter your name" onChange={handleChange} name="name" value = {formData.name}/>

    <textarea name="comments" placeholder="Comments" onChange={handleChange} value={formData.comments} />

    <input type="checkbox" id="isFriendly" checked={ formData.isFriendly} onChange={handleChange} name="isFriendly">
    <label htmlFor="isFriendly">Are you friendly? </label>


    <legend>Current employment status </legend>

    <input type="radio" id="part-time" name="employment" value="part-time" checked={formData.employment === "part-time"}onChange={handleChange}/>
    <label htmlFor="part-time">Part-time</label>
    <input type="radio" id="unemployed" name="employment" value="unemployed" checked={formData.employment === "unemployed"}onChange={handleChange}/>
    <label htmlFor="unemployed">Unemployed</label>
    <input type="radio" id="full-time" name="employment" value="full-time" checked={formData.employment === "full-time"}onChange={handleChange}/>
    <label htmlFor="full-time">Full-Time</label>
```
Be sure to check the data in name and and the field in react.useState is same.
* If not able to understand anything, then refer react video https://www.youtube.com/watch?v=bMknfKXIFA8&t=42311s *

#### 8.Submit Form:
If the button is inside form, then it will automatically work as type="submit"
```
    function handleSubmit(event){
        <!-- This won't refresh after value after submiting -->
        event.preventDefault()
        submitToAPI(formData)
        console.log(data)
    }
    <form onSubmit={handleSubmit}>
        <!-- Your form here -->
        <button> Submit </button>
    </form>
```
#### 9.API

```
const [starWarsData, setStarWarsData] = React.useState({})

fetch("putTheAPI")
    .then(res => res.json())
    .then(data => setStarWarsData(data))
return (
    <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    <div>
)
```  
#### 10. Side Effect
```React.useEffect()
    <!-- It has 1 required parameter and 2nd optional parameter. -->
    React.useEffect(function() {
        <!-- Put the code that are outside our systems to interact -->
    }, []
    <!-- Empty array means render it once when the app starts. -->
)
```
Sometimes you need to cleanup the side effect