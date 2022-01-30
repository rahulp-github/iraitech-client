import React, { useEffect,useState } from 'react';

export default function Profile() {

  const [userDetails,setUserDetails] = useState({})

  async function getUserDetails(){
    const token = localStorage.getItem("token");
    let user = await fetch("https://iraitech-server.herokuapp.com/profile",{
        method:"GET",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
    })
    let details = await user.json();
    if(details.status === "ok")
        setUserDetails(details.profile);
    else alert(`Error: ${details.message}`);
  }

  useEffect( () => {
    getUserDetails() 
  },[]);

  return (
    <div className="container signupPage">
        <div className="card">
                <div className="card-header login">
                    Your Profile <i class="bi bi-person-circle"></i>
                </div>
                <div className="list-group list-group-flush">
                    <div className="mb-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                        <input type="text" className="form-control" value={userDetails.first_name} disabled/> 
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Last Name </label>
                        <input type="text" className="form-control" value={userDetails.last_name} disabled/> 
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Email</label>
                        <input type="text" className="form-control" value={userDetails.email} disabled/> 
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Phone </label>
                        <input type="text" className="form-control" value={userDetails.phone} disabled/> 
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Address </label>
                        <input type="text" className="form-control" value={userDetails.address} disabled/> 
                    </div>
                </div>
            </div>
    </div>
  )
}
