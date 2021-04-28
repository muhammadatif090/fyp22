import React,{useEffect,useState} from 'react';
import './AppointmentForm.css'
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';



function Appointmentform() {

  const history = useHistory();
 
   const [userData,setUserData] = useState({});
  //user authentication
  const callAboutPage = async() => {
    try{

      const res = await fetch('/appointmentform',{
        method:"GET",
        headers:{
         
          "Content-Type": "application/json"
        },
        
      });

      const data = await res.json();
      //console.log(data);
      setUserData(data);

      if(await res.status !==200)
      {
        const error = new Error(res.error);
        throw error;
      }
    }catch(err) {
            console.log(err);
            alert("Please sign in to continue");
            history.push("/signup");
            
    }
}


useEffect(() => {
callAboutPage();
}, [])

/*  const history = useHistory();
  //for sign up
  
  const [user,setUser] = useState({
    name:"",
    email:"",
    pnumber:"",
    gender:"",
    symptom:"",
    date:"",
    time:""
  });

  let name, value;
  const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
            e.preventDefault();
            const { name, email , pnumber , gender , symptom , date , time } = user;

           const res = await fetch("/register" , {

              method: "POST",
              headers: {
                 "Content-Type" : "application/json"
              },

              body: JSON.stringify({
              name , email , pnumber , gender , symptom , date , time
              })

           });

           const data = await res.json();

           if(data.status == 422 || !data)
           {
             window.alert("Registration failed");
             console.log("Registration failed");
           }

           else
           {
            //swal("Congratulations", "Registration Successfull!");
            window.alert("Appointment Booked Successfully");
            console.log("Registration Successfull");

            history.push("/");

           } 
  }*/
  return (
  
    <div id="container" class="body5">
    
        <div id="body_header">
        <br/><br/><Link class="backbtn5" to="/diabetes">Back</Link>
                  <Link class="homebtn5" to="/home">MedTech</Link>
                <h1 class="apph1">Patient Appointment Form</h1>

        </div>
        <form  method="POST" class="form5">
      <fieldset class="fldset5">
        
        <label class="label5" for="name"> Patient Name</label>
        <input class="inp5" id="name" name="name" type="text"
         value={userData.name}
         />

        <label class="label5" for="mail">Email</label>
        <input class="inp5" type="email" id="email" name="email"
        value={userData.email}
        
        />

        <label class="label5" for="tel">Contact No</label>
        <input class="inp5" id="pno" name="pnumber" type="number"  autoComplete="off"
                    value={userData.pnumber}/>
        
        <label class="label5" for="appointment_for"> Gender</label>
        <select class="slct5" id="gender" name="gender" >
          <option value="Sex">Select Your Gender</option>
		   <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label class="label5" for="appointment_description">Symptoms</label>
        <textarea class="textarea5" id="symptoms" name="symptoms" 
         ></textarea>
        <label class="label5" for="date">Date</label>
        <input class="inp5" type="date" name="date" />
     
        <label class="label5" for="appointment_for"> Time</label>
        <select class="slct5" id="time" name="time">
          <option value="time">Select Appointment Time</option>
		   <option value="ten">10:00 AM</option>
          <option value="one">1:00 PM</option>
          <option value="eight">8:00 PM</option>
      
        </select>
      
       
  </fieldset>
      <button class="bttn5" type="submit" >Request For Appointment</button>
    </form>
    
       
    </div>



   
  );
}

export default Appointmentform;