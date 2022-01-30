import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

export default function Signup() {

    const [userDetails,setUserDetails] = useState({
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        address:'',
        password:''
    });
    const history = useHistory();

   // Signup Handler
    async function handleSignup(e) {
        e.preventDefault();
        console.log(userDetails);
        try{
            let res = await fetch('http://localhost:8080/register', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    first_name:userDetails.first_name,
                    last_name:userDetails.last_name,
                    email:userDetails.email,
                    phone:userDetails.phone,
                    address:userDetails.address,
                    password:userDetails.password
                })
            });
            let resJson = await res.json();
            if(resJson.status === "ok"){
                alert('Signup Successfull !! \n Login With your Username and password');
                history.push('/login');
            }
            else{
                alert(`Error ${resJson.message}`);
            }
           setUserDetails({});
        }
        catch(e){
            alert(`Error ${e}`);
        } 
    }


    return (
        <div className="container signupPage">
            <form onSubmit={handleSignup}>
                <div className="card" >
                    <div className="card-header ">
                        Register <i className="bi bi-person-plus-fill"></i>
                    </div>
                    <div className="list-group list-group-flush">
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your First Name <span className="star">*</span></label>
                            <input type="text" className="form-control" onChange={(e)=>setUserDetails({...userDetails,[e.target.name]:e.target.value})} value={userDetails.first_name} name="first_name" id="first_name" placeholder="Enter your First Name" required/> 
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Enter your Last Name <span className="star">*</span></label>
                            <input type="text" className="form-control" onChange={(e) => setUserDetails({...userDetails,[e.target.name]:e.target.value})} value={userDetails.last_name} name="last_name" id="last_name" placeholder="Enter Your Last Name" required/> 
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Enter your Email <span className="star">*</span></label>
                            <input type="email" className="form-control" onChange={(e) => setUserDetails({...userDetails,[e.target.name]:e.target.value})} value={userDetails.email} name="email" id="email" placeholder="Enter Your Email" required/> 
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Enter your Phone Number <span className="star">*</span></label>
                            <input type="text" className="form-control" onChange={(e) => setUserDetails({...userDetails,[e.target.name]:e.target.value})} value={userDetails.phone} name="phone" id="phone" placeholder="Enter Your Phone" required/> 
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Enter your Address <span className="star">*</span></label>
                            <input type="text" className="form-control" onChange={(e) => setUserDetails({...userDetails,[e.target.name]:e.target.value})} value={userDetails.address} name="address" id="address" placeholder="Enter Address" required/> 
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">Enter your Password <span className="star">*</span></label>
                            <input type="password" className="form-control" onChange={(e) => setUserDetails({...userDetails,[e.target.name]:e.target.value})} value={userDetails.password} name="password" id="password" placeholder="Your Passwords are hashed !!" required/> 
                        </div>
                    </div>
                </div>
                <div className='signup'>
                    <button type="submit"  className="btn btn-outline-primary"> Signup </button>
                    <p>Already Signed Up ? <Link to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    )
}