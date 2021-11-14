import React from "react";
import "./Subscription.css";
import { useForm } from "react-hook-form";
const Subscription = () => {
  const {reset, register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
    alert("Thanks for being with us");
  };

  console.log(watch("example"));
  return (
    <div className="newsletter text-white mt-5">
      <h1 className="mb-4 text-primary">
        Click here to see our upcoming bikes
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <input className="w-50 border-2 me-2  rounded p-2" {...register("exampleRequired", { required: true })} placeholder="your email" />
      <input type="submit" value="subscribe" className="btn btn-danger mb-2 px-5  rounded p-2" />
      <br />
      {errors.exampleRequired && <span className="text-danger fw-1 fs-3">This field is required</span>}
      
    </form>
    </div>
  );
};
export default Subscription;
