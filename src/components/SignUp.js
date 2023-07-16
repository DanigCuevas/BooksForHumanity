import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignUp() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center">Sign Up Form</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)} action="/DemoProject">

              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} {...register("firstName", { required: true })} />
                {errors.firstName && <div className="invalid-feedback">First name is required</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} {...register("lastName", { required: true })} />
                {errors.lastName && <div className="invalid-feedback">Last name is required</div>}
              </div>

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

              <div className="mb-3">
                <label htmlFor="retypePassword" className="form-label">Retype Password</label>
                <input type="password" className={`form-control ${errors.retypePassword ? 'is-invalid' : ''}`} {...register("retypePassword", { required: true, validate: (value) => value === watch('password') })} />
                {errors.retypePassword && <div className="invalid-feedback">Passwords must match</div>}
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" {...register("rememberMe")} />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>

              <button type="submit" className="btn btn-primary">Sign Up</button>

              <p className="small-xl pt-3 text-center">
                <span className="text-muted">Already a member? </span>
                <Link to="/profile">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

