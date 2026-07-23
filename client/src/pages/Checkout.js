import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {

  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");


  useEffect(() => {

    const buyNow = JSON.parse(localStorage.getItem("buyNow"));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    if (buyNow) {

      setItems([
        {
          ...buyNow,
          quantity: 1
        }
      ]);

      setTotal(buyNow.price);

    } else {

      setItems(cart);

      let amount = 0;

      cart.forEach((item) => {
        amount += item.price * item.quantity;
      });

      setTotal(amount);
    }

  }, []);



  const placeOrder = async () => {


    if (!name || !phone || !address || !location || !pincode) {

      alert("Please fill all details");
      return;

    }



    const orderData = {

      customerName: name,

      phone: phone,

      address: address,

      location: location,

      pincode: pincode,

      items: items,

      totalAmount: total,

      paymentMethod: payment

    };



    try {


      const response = await axios.post(
        "http://localhost:5000/api/orders",
        orderData
      );


      console.log(response.data);


      localStorage.removeItem("buyNow");
      localStorage.removeItem("cart");


      navigate("/order-success");


    } catch (error) {


      console.log(
        error.response?.data || error.message
      );


      alert(
        "Order Failed : " +
        (error.response?.data?.message || error.message)
      );


    }

  };



  return (

    <div
      style={{
        maxWidth:"700px",
        margin:"30px auto",
        padding:"20px"
      }}
    >


      <h1 style={{
        textAlign:"center",
        color:"green"
      }}>
        Checkout
      </h1>



      <h2>Customer Details</h2>


      <input
        placeholder="Full Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"10px"
        }}
      />



      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"10px"
        }}
      />



      <textarea
        placeholder="Address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"10px"
        }}
      />



      <input
        placeholder="Location"
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"10px"
        }}
      />



      <input
        placeholder="Pincode"
        value={pincode}
        onChange={(e)=>setPincode(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"20px"
        }}
      />



      <h2>Payment</h2>


      <select
        value={payment}
        onChange={(e)=>setPayment(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"20px"
        }}
      >

        <option>
          Cash on Delivery
        </option>

        <option>
          UPI
        </option>

      </select>




      <h2>Order Summary</h2>


      {
        items.map((item,index)=>(

          <div
            key={index}
            style={{
              display:"flex",
              justifyContent:"space-between"
            }}
          >

            <span>
              {item.name} × {item.quantity}
            </span>


            <span>
              ₹{item.price * item.quantity}
            </span>


          </div>

        ))
      }



      <hr/>


      <h2>
        Total Amount : ₹{total}
      </h2>



      <button
        onClick={placeOrder}
        style={{
          width:"100%",
          padding:"12px",
          background:"green",
          color:"white",
          border:"none",
          borderRadius:"8px",
          fontSize:"18px"
        }}
      >

        Place Order

      </button>



    </div>

  );

}


export default Checkout;