import React from 'react';
import { useForm } from "react-hook-form";
import './AddANewBike.css';
import useAuth from './../../../hooks/useAuth';

const AddANewBike = () =>{
    const { user } = useAuth();
    const {
      register,
      reset,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      fetch("https://polar-meadow-16185.herokuapp.com/bikes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      console.log(data);
      alert("New bike Successfully added")
      reset();
    };
    return (
      <div>
        <h1 className="mt-5 text-center text-info"> Add A New Bike</h1>
        <div className=" mt-5 text-center ">
          <div className=" justify-content-center">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                  {...register("name")}
                  placeholder="Bike Name"
                  className="p-2 me-1 mb-2 input-style border border-2 rounded border-dark"
                />
                <input
                  {...register("fuelType")}
                  placeholder=" Fuel Name"
                  className="p-2 ms-1 mb-2 input-style border border-2 rounded border-dark"
                />
                <br />

                <input
                  {...register("description")}
                  placeholder="Description"
                   className="p-2 pb-5  w-50 border border-2 rounded border-dark"
                />
                <br />
  
                <input
                  {...register("img", { required: true })}
                  placeholder="Image Link"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-dark"
                />
                
                <input
                  {...register("price")}
                  type="number"
                  placeholder="price"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-dark"
                />

                 <br />
                <input
                  {...register("transmission")}
                  placeholder="transmission"
                  type="text"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-dark"
                />
                <input 
                  {...register("tankCapacity")}
                  type="number"
                  placeholder="tank capacity"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-dark"
                />
                <br />
                <input
                  {...register("weight")}
                  placeholder="weight"
                  type="number"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-dark"
                />
                <input 
                  {...register("seatHeight")}
                  type="number"
                  placeholder="Bike seat height"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-dark"
                />
                <br />
                <input
                  {...register("engine")}
                  placeholder="Engine capacity"
                  type="text"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-dark"
                />
                <input 
                  {...register("maxPower")}
                  type="number"
                  placeholder="Bike Maximum power"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-dark"
                />
                 <br />
                <input
                  {...register("rating")}
                  placeholder="Bike Rating  "
                  type="number"
                  className="p-2 me-1 mt-2 input-style border border-2 rounded border-dark"
                />
                <input 
                  {...register("color")}
                  type="text"
                  placeholder="Bike color"
                  className="p-2 ms-1 mt-2 input-style border border-2 rounded border-dark"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Add" className="btn btn-info text-white  m-3 w-25" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AddANewBike;