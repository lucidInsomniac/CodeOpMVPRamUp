// form usestate and useEffect
import React, {useState} from 'react'
import './AthleteForm.css'
//useEffect GETs data from inventory table 
//When item is assigned to athlete on form, UPDATE item selected from inventory table


//Athlete From
    //Form to enter basic personal infor, //img upload
    //Distr Date
    //Rtnd Date


//Done: 
    //Form works with passing state obj to parent from static frontend
    //Jira bug tracked 1 issue: https://donna-chin.atlassian.net/browse/CDP-2?atlOrigin=eyJpIjoiNDYxY2IzNzhhNDBlNDk0MTg3NTU2MDMzNmMzY2E0MDIiLCJwIjoiaiJ9

//Next: Connect to MYSQL, and write client api functions on App.js

export default function AthleteForm (props) {
    //check props
    console.log('form', props)

    //hook for imageURL
    const[imageURL, setImageURL] = useState('')

    //hook for teamName
    const[teamName, setTeamName] = useState('')

    //hook for collegeYr
    const[collegeYr, setCollegeYr] = useState('')

    //hook for athYr
    const[athYr, setAthYr] = useState('')

    //hook for firstname
    const[firstname, setFirstName] = useState('')

    //hook for lastname
    const[lastname, setLastName] = useState('')

    //hook for email
    const[email, setEmail] = useState('')

    //hook for phone
    const[phone, setPhone] = useState('')

    //hook for baseTopSize
    const[baseTopSize, setBaseTopSize] = useState('')

    //hook for tshirtSize
    const[tshirtSize, setTshirtSize] = useState('')

    //hook for sweatshirtSize
    const[sweatshirtSize, setSweatshirtsize] = useState('')

    //hook for warmupTopSize
    const[warmTopSize, setWarmTopSize] = useState('')

    //hook for jacketSize
    const[jacketSize, setJacketSize] = useState('')

    //hook for baseBottomSize
    const[baseBottomSize, setBaseBottomSize] = useState('')

    //hook for shortsSize
    const[shortsSize, setShortsSize] = useState('')

    //hook for sweatpantsSize
    const[sweatpantsSize, setSweatpantsSize] = useState('')

    //hook for pantsSize
    const[pantsSize, setPantsSize] = useState('')

    //hook for shoeSize
    const[shoeSize, setShoeSize] = useState('')


    //Event handler for event listenter onSubmit when triggered from "submit" event
    function handleSubmit(event) {
        //prevent entire doc from reloading, only target event source
        event.preventDefault()

            // save all data in state obj to send to parent
        const athlete = {
            
            imageUR: imageURL,
            teamName: teamName,
            collegeYr: collegeYr,
            athYr: athYr,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            baseTopSize: baseTopSize,
            tshirtSize: tshirtSize,
            sweatshirtSize: sweatshirtSize,
            warmTopSize: warmTopSize,
            jacketSize: jacketSize,
            baseBottomSize: baseBottomSize,
            shortsSize: shortsSize,
            sweatpantsSize: sweatpantsSize,
            pantsSize: pantsSize,
            shoeSize: shoeSize
        }
            //check athlete has value 
            console.log('form', athlete)

        //onSubmit, send the state obj with all the data to parent
        props.onSubmit(athlete)

            //rest all fields
            setImageURL("")
            setTeamName("")
            setCollegeYr("")
            setAthYr("")
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhone("")
            setBaseTopSize("")
            setTshirtSize("")
            setSweatshirtsize("")
            setWarmTopSize("")
            setJacketSize("")
            setBaseBottomSize("")
            setShortsSize("")
            setSweatpantsSize("")
            setPantsSize("")
            setShoeSize("")
    }

    //Event handler for onChange when triggered by a change event in the input or select
    //We capture the event target values and set them to their related variables
    function handleChange(event) {
        let {name, value} = event.target

        switch(name) {
            case 'imageURL':   
                setImageURL(value);
                break;
            case 'teamName':
                setTeamName(value);
                break;
            case 'collegeYr':
                setCollegeYr(value);
                break;
            case 'athYr':
                setAthYr(value);
                break;
            case 'firstname':
                setFirstName(value);
                break;
            case 'lastname':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'baseTopSize':
                setBaseTopSize(value);
                break;
            case 'tshirtSize':
                setTshirtSize(value);
                break;
            case 'sweatshirtSize':
                setSweatshirtsize(value);
                break;
            case 'warmTopSize':
                setWarmTopSize(value);
                break;
            case 'jacketSize':
                setJacketSize(value);
                break;
            case 'baseBottomSize':
                setBaseBottomSize(value);
                break;
            case 'shortsSize':
                setShortsSize(value);
                break;
            case 'sweatpantsSize':
                setSweatpantsSize(value);
                break;
            case 'pantsSize':
                setPantsSize(value);
                break;
            case 'shoeSize':
                setShoeSize(value);
                break;
            default:
                break;
        }
    }

    return (
        <div className="AthleteForm">

            <h2>Athlete Form</h2>
                
            <form onSubmit={handleSubmit}>
                <div className="row1">
                    <h3>Team Info</h3>
                    <label className="imageURL" 
                           htmlFor="imageURL"
                    >  
                        Headshot URL
                    </label>
                        <input 
                            name="imageURL"
                            id="imageURL"
                            value={imageURL}
                            onChange={handleChange}
                        />

                    <label className="teamName" 
                           htmlFor="teamName"
                    >  
                        Team
                    </label>
                        <input 
                            name="teamName"
                            id="teamName"
                            value={teamName}
                            onChange={handleChange}
                        />
                </div>

                <div className="row2">
                    <label className ="collegeYr"
                           htmlFor="collegeYr"
                    >
                        College Status
                    </label>
                         <select    
                                name="collegeYr"  
                                value={collegeYr}
                                onChange={handleChange}  
                                id="collegeYr"
                         >
                             <option>Freshmen</option>
                             <option>Sophomore</option>
                             <option>Junior</option>
                             <option>Senior</option>
                         </select>   

                    <label className ="athYr"
                            htmlFor="athYr"
                    >
                        Athl. Year
                    </label>
                         <select
                                name="athYr" 
                                value={athYr}
                                onChange={handleChange}
                                id="athYr"
                         >
                             <option>1st</option>
                             <option>2nd</option>
                             <option>3rd</option>
                             <option>4th</option>
                             <option>5th</option>
                         </select> 
                </div>


                <div className="row3">
                    <h3>Contact Info</h3>
                     <label className="firstname" 
                           htmlFor="firstname"
                    >
                        First Name
                    </label>
                    <input 
                        name="firstname"
                        id="name"
                        value={firstname}
                        onChange={handleChange}
                    />

                    <label className ="lastname"
                           htmlFor="firstname"
                    >
                        Last Name
                    </label>
                        <input 
                            name="lastname"
                            value={lastname}
                            onChange={handleChange}
                        />

                </div>

                <div className="row4">
                <label className ="Email"
                        htmlFor="Email"
                    >
                        Email
                        <input type="email" 
                               name="email"
                               value={email}
                               onChange={handleChange}
                        />
                    </label>

                    <label className ="phone"
                        htmlFor="phone"
                    >
                        Phone
                        <input name="phone"
                               value={phone}
                               onChange={handleChange}
                               type="tel" 
                        />
                    </label>
                </div>

                <div className="row5">
                    <h3>Sizing Info for Tops</h3>
                    <label className ="basetop-size"
                            htmlFor="basetop-size"
                    >
                        Baselayer Top Size
                    </label>
                         <select name="baseTopSize"
                                 value={baseTopSize}
                                 onChange={handleChange}
                                 id="baseTopSize"
                         >
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 

                    <label className ="tshirt-size"
                            htmlFor="tshirt-size"
                    >
                        T-Shirt Size
                    </label>
                         <select name="tshirtSize"
                                 value={tshirtSize}
                                 onChange={handleChange}
                                 id="tshirtSize"
                         >
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 

                    <label className ="sweatshirt-size"
                            htmlFor="sweatshirt-size"
                    >
                        Sweatshirt Size
                    </label>
                         <select name="sweatshirtSize"
                                 value={ sweatshirtSize } 
                                 onChange={handleChange}
                                 id="sweatshirtSize"
                         >
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 
                </div>

                <div className="row6">
                    <label className ="warmtop-size"
                            htmlFor="warmtop-size"
                    >
                        Warmup Top Size
                    </label>
                         <select name="warmTopSize"
                                 value={warmTopSize}
                                 onChange={handleChange}
                                 id="warmTopSize">
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 

                    <label className ="jacket-size"
                            htmlFor="jacket-size"
                    >
                        Jacket Size
                    </label>
                         <select name="jacketSize"
                                 value={jacketSize}
                                 onChange={handleChange}
                                 id="jacketSize">
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 
                </div>

                <div className="row7">
                    <h3>Sizing Info for Bottoms</h3>
                    <label className ="basebottom-size"
                            htmlFor="basebottom-size"
                    >
                        Baselayer Bottom Size
                    </label>
                         <select name="baseBottomSize"
                                 value={baseBottomSize}
                                 onChange={handleChange}
                                 id="baseBottomSize"
                         >
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 

                    <label className ="shorts-size"
                            htmlFor="shorts-size"
                    >
                        Shorts Size
                    </label>
                         <select name="shortsSize"
                                 value={shortsSize}
                                 onChange={handleChange}
                                 id="shortsSize"
                         >
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 

                    <label className ="sweatpants-size"
                            htmlFor="sweatpants-size"
                    >
                        Sweatpants Size
                    </label>
                         <select name="sweatpantsSize"
                                 value={sweatpantsSize} 
                                 onChange={handleChange}
                                 id="sweatpantsSize"
                         >
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 
                </div>

                <div className="row6">
                    <label className ="pants-size"
                            htmlFor="pants-size"
                    >
                        Pants Size 
                    </label>
                         <select name="pantsSize"
                                 value={pantsSize}
                                 onChange={handleChange}
                                 id="pantsSize">
                             <option>Small</option>
                             <option>Medium</option>
                             <option>Large</option>
                             <option>X-Large</option>
                             <option>2XL</option>
                             <option>3XL</option>
                         </select> 

                    <label className ="shoe-size"
                            htmlFor="shoe-size"
                    >
                        Shoe Size
                    </label>
                         <select name="shoeSize"
                                 value={shortsSize}
                                 onChange={handleChange}
                                 id="shoeSize">
                             <option>M 4 / W 5.5</option>
                             <option>M 4.5 / W 6</option>
                             <option>M 5 / W 6.5</option>
                             <option>M 5.5 / W 7</option>
                             <option>M 6 / W 7.5</option>
                             <option>M 6.5 / W8</option>
                             <option>M 7 / W 8.5</option>
                             <option>M 7.5 / W 9</option>
                             <option>M 8 / W 9.5</option>
                             <option>M 8.5 / W 10</option>
                             <option>M 9 / W 10.5</option>
                             <option>M 9.5 / W 11</option>
                             <option>M 10 / W 11.5</option>
                             <option>M 10.5 / W 12</option>
                             <option>M 11 / W 12.5</option>
                             <option>M 11.5 / W 13</option>
                             <option>M 12 / W 13.5</option>
                             <option>M 12.5 / W 14</option>
                             <option>M 13 / W 15</option>
                             <option>M 13.5</option>
                             <option>M 14</option>
                             <option>M 15</option>
                         </select> 
                    
                </div>

                <button name="submit" 
                        type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}