import {React, useState} from "react"
import "./forms.css"


function Form(){

    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email,SetEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [resume, setResume] = useState("");
    const [color, setColor] = useState({
        Red: true,
        Orange: false,
        Black: false,
    });
    const [url, setUrl] = useState("");
    // const [selectedOption, setSelectedOption] = useState("");
    const [about, SetAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,email,contact,gender,selectedOption,color,resume,url,about);
    };
    
    const handleColorChange = (col) => {
        setColor((prev)=>({
            ...prev,
            [col]:!prev[col],
        }));
    };

    const handleReset = () => {
        SetFirstName("");
        SetLastName("");
        SetEmail("");
        setContact("");
        setGender("Male");
        setColor({
            Red: true,
            Orange: false,
            Black: false,
        });
        setResume("");
        setUrl("");
        // setSelectedOption("");
        SetAbout("");
    };



    return(
        <div className="App">
            <h1>Form</h1>
            <fieldset>
                <form action="#" method="get">

                    <label htmlFor="firstName">
                        First Name*
                    </label>

                    <input type="text" name="firstname" id="firstName" value={firstName}onChange={(e)=> SetFirstName(e.target.value)} placeholder="Krishnendu" required />


                    <label htmlFor="lastname">
                    Last Name
                    </label>

                    <input type="text" name="lastname" id="lastname"  value={lastName} onChange={(e)=>SetLastName(e.target.value)} placeholder="Mondal" required/>

                    <label htmlFor="email">
                    Email Address
                    </label>

                    <input type="email" name="email" id="email" value={email}
                    onChange={(e)=>SetEmail(e.target.value)} placeholder="abc@email.com" required />

                    <label htmlFor="tel"></label>


                    <input type="tel" name="contact" id="contact" value={contact} onChange={(e)=>setContact(e.target.value)} placeholder="9123******" required />

                    <label htmlFor="gender">
                        Gender*
                    </label>


                    <input type="radio" name="gender" id="gender" value="male"
                    checked={gender ==="male"} onChange={(e)=> setGender(e.target.value)} />
                    Male

                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                        
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other
                    
                    <label htmlFor="color">
                        Colors 
                    </label>
                    

                    <input type="checkbox" name="color" id="red" checked = {color.Red === true} onChange={(e)=> handleColorChange("Red")} />

                    Red

                    <input type="checkbox" name="color" id="orange" checked = {color.Orange === true} onChange={(e)=>handleColorChange("Orange")} />

                    Orange

                    <input type="checkbox" name="color" id="black" checked={color.Black === true} onChange ={(e)=> handleColorChange("Black")} />

                    Black
                    
                    <label htmlFor="file">Upload Doc</label>

                    <input type="file" name="file" id="file" onChange={(e)=>setResume(e.target.files[0])} required/>

                    <label htmlFor="url">
                        Enter Your Linkdin Profile URL
                    </label>

                    <input type="url" name="url" id="url" onChange={(e)=>setUrl(e.target.value)} placeholder="www.linkdin.com/*******" />


                    {/* <label htmlFor="select">Select your Choice</label>

                    <select name="select" id="select" value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
                        <option value="" disabled selected={selectedOption===""}>
                            Select Your choice
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JS</option>
                        </optgroup>

                        <optgroup label="Advance">
                            <option value="4">React.js</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="t">MongoDB</option>
                        </optgroup>
                    </select> */}

                    <label htmlFor="about">About</label>

                    <textarea name="about" id="about" cols="30" row="10" onChange={(e)=> SetAbout(e.target.value)} placeholder="About Your Self" required></textarea>
                    
                    <button type="reset" value="reset" onClick={()=> handleReset}>
                        Reset
                    </button>

                    <button type="submit" value="submit" onClick={(e)=> handleSubmit(e)}>Submit</button>


                </form>
            </fieldset>
        </div>
    );
}

export default Form;