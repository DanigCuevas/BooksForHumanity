import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h1 className="text-center">Sign In Form</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)} action="/demoProfile" method="post">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <div className="invalid-feedback">Email is required and must be valid</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register("password", { required: true })} />
                {errors.password && <div className="invalid-feedback">Password is required</div>}
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" {...register("rememberMe")} />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>

              {isFormSubmitted ? (
                <Link to="/demoProfile" className="btn btn-primary">
                  Sign In
                </Link>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              )}

              <p className="small-xl pt-3 text-center">
                <span className="text-muted">Not a member? </span>
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

