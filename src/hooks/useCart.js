import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [bookedBike, setBookedBike] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        if (data.length) {
          setBookedBike(data);
        }
      });
  }, [uid]);

  // adding to cart

  function addToCart(bike) {
    delete bike._id;
    bike.email = user?.email;
    bike.displayName = user?.displayName;
    bike.uid = uid;
    bike.status = "pending";

    fetch("http://localhost:5000/cart", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bike),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const newBooked = [...bookedBike, bike];
          setBookedBike(newBooked);
          alert("Successfully Added To Cart")
        }
      });
  }

  // cancelFromCart from cart

  const cancelFromCart = (id) => {
    const confirm = window.confirm("are you sure?");
    if(confirm) {
      fetch(`http://localhost:5000/cart/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const restAfterDelete = bookedBike.filter((bike) => bike._id !== id);
          setBookedBike(restAfterDelete);
        }
        alert("Order canceled");
        // window.location.reload(true);
      });
    }
  };
   const cancelFromBikes = (id) => {
    const confirm = window.confirm("are you sure?");
    if(confirm) {
      fetch(`http://localhost:5000/bikes/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const restAfterDelete = bookedBike.filter((bike) => bike._id !== id);
          setBookedBike(restAfterDelete);
        }
        alert("Bike Deleted");
        window.location.reload(true);
      });
    }
  };

  return { setBookedBike, cancelFromCart,cancelFromBikes, addToCart, bookedBike };
};

export default useCart;