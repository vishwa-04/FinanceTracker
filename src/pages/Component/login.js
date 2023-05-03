import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Login(){

    const initialValues = {
        email : "",
        password : "",
    }



    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();



    function submitHandle(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      }



    function handleChange(e){
        const {name,value}= e.target;
        setFormValues({...formValues,[name]:value})
    }






    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
          if (localStorage.getItem("login") !== null) {
            const data = JSON.parse(localStorage.getItem("login"));
    
          } else {
            
            localStorage.setItem("login", JSON.stringify([formValues]));
          }
          navigate("/");
        }
        //eslint-disable-next-line
      }, [formError]);




    function validate(values){
        const errors = {}
        if(values.username === ""){
            errors.username = "username is required!"
        }

        if(values.email === ""){
            errors.email = "email is required!"
        }

        if(values.password === ""){
            errors.password = "password is required!"
        }


        setIsSubmit(false)
        return errors;
    }
    return(
        <>
<form onSubmit={submitHandle}>
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{'border-radius': '1rem'}} >
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Login</h3>

            <div class="form-outline mb-4">
              <label class="form-label" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" name="email" onChange={handleChange}/>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="typePasswordX-2">Password</label>
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" name="password" onChange={handleChange}/>
            </div>

            
           

            <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <div>
              <p class="mb-0">Don't have an account? <Link to={'/registration'}>Register</Link>
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
        </>
    )
};
export default Login