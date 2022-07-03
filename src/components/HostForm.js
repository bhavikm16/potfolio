import React,{useState} from "react";
import {useForm} from 'react-hook-form'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import login11 from "../images/logo11.svg"
import axios from "axios";
import {useSelector} from 'react-redux'

function HostEvent() {

  let {userObj}=useSelector(state=>state.user);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate()

  //state for image
  let [img,setImg]=useState(null)

  //on image select
  const onImageSelect=(event)=>{
    setImg(event.target.files[0]);
  }

  //submit form
  const onFormSubmit=(Obj)=>{
    //console.log(userObj)
    Obj.key=userObj._id
    //create Formdata object
    let formData=new FormData()
    //append values to it
    formData.append("Obj", JSON.stringify(Obj))
    formData.append("photo", img)

    //HTTP POST request
    axios.post('http://localhost:4000/admin/CreateProducts', formData)
    .then(response=>{
      //console.log(response)
      alert(response.data.message)
      //if user created
      if(response.data.message==="YOUR FORM HAS BEEN SUBMITTED EXPLORE THE TEMPLATES!!"){
        //navigate to login
        navigate('/Event')
      }
    })
    .catch(error=>{
      console.log(error)
      alert("Something went wrong!! Please try again after sometime..")
    })
  }


  return (
    <>
      <div className="display-2 text-center text-success m-3">
        Enter The Details...
      </div>
      <img src={login11} alt="image" width="300px" className='d-block mx-auto border border-2 border-light p-3 m-3'/>
    <div className="row mt-3">
      
      <div className="col-9 col-sm-10 col-md-6 mx-auto mt-3">
      <Form onSubmit={handleSubmit(onFormSubmit)}>


          {/* username */}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" {...register('username',{required:true})} />
             {/* validation error message for username */}
             {errors.username && <p className='text-danger'>*Username is required</p>}
          </Form.Group>


          {/* email */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register('email',{required:true})} />
             {/* validation error message for city */}
             {errors.email && <p className='text-danger'>*Email is required</p>}
          </Form.Group>


           <div className="row">
            <div className="col-12 col-md-6">
                  {/* city */}
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" {...register('city',{required:true})} />
                {/* validation error message for city */}
                {errors.city && <p className='text-danger'>*City is required</p>}
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              {/* phone */}
              <Form.Group className="mb-3">
                <Form.Label>Phone no.</Form.Label>
                <Form.Control type="number" placeholder="Enter number" {...register('phone',{required:true})} />
                {/* validation error message for username */}
                {errors.username && <p className='text-danger'>*Phone no. is required</p>}
              </Form.Group>
            </div>
           </div>

          {/* Profile image */}
          <Form.Group className="mb-3">
            <Form.Label>Select Profile Pic</Form.Label>
            <Form.Control 
              type="file" 
              {...register("photo",{required:true})} 
              onChange={(event)=>onImageSelect(event)}
            />
            {/* validation error message for photo */}
            {errors.photo && <p className='text-danger'>*Profile pic is required</p>}
          </Form.Group>

          {/* Education */}
          <Form.Group className="mb-3">
            <Form.Label>Educational details</Form.Label>
              {/* btech */}
            <Form.Group>
              <Form.Label>Institution Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" {...register('instiname',{required:true})} />
          
             <div className="row">
                <div className="col-12 col-md-6">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control type="text" placeholder="Enter branch" {...register('branch',{required:true})} />
                </div>
                <div className="col-12 col-md-6">
                  <Form.Label>GPA</Form.Label>
                  <Form.Control type="number" placeholder="Enter gpa" {...register('gpa',{required:true})} />
                </div>
             </div>
            
            </Form.Group>
              
          </Form.Group>

          {/* skills */}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Skills</Form.Label>
            <Form.Check type="checkbox" label="HTML" {...register('skill1',{required:true})}/>
            <Form.Check type="checkbox" label="CSS" {...register('skill2',{required:true})}/>
          </Form.Group>

          {/* Button */}
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
         {/* Button */}
      <Button className="mt-2" variant="warning" type="submit" onClick={()=>navigate('/Event')}>
            VIEW PREVIOUS CV's
      </Button>
      </div>
    </div>
    </>
  );
}

export default HostEvent;
