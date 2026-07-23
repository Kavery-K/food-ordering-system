import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Juice() {

  const [juices, setJuices] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    axios
      .get("http://localhost:5000/api/juices")
      .then((res) => {
        setJuices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);



  const addToCart = (juice) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    const existingItem = cart.find(
      (item) => item._id === juice._id
    );


    if(existingItem){

      existingItem.quantity += 1;

    } else {

      cart.push({
        ...juice,
        quantity:1
      });

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


    alert("Juice Added to Cart Successfully");

  };



  const buyNow = (juice) => {

    localStorage.setItem(
      "buyNow",
      JSON.stringify({
        ...juice,
        quantity:1
      })
    );


    navigate("/checkout");

  };



  return (

    <div style={{padding:"30px"}}>


      <h1
      style={{
        textAlign:"center",
        color:"#2E7D32",
        marginBottom:"30px"
      }}
      >
        🥤 Juice Menu
      </h1>



      <div
      style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        gap:"25px"
      }}
      >


      {
        juices.map((juice)=>(


          <div
          key={juice._id}
          style={{
            width:"250px",
            background:"#fff",
            borderRadius:"15px",
            overflow:"hidden",
            boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
          }}
          >


            <img
            src={juice.image}
            alt={juice.name}
            style={{
              width:"100%",
              height:"180px",
              objectFit:"cover"
            }}
            />



            <div style={{padding:"15px"}}>


              <h3>
                {juice.name}
              </h3>


              <p>
                {juice.description}
              </p>



              <h3 style={{color:"#2E7D32"}}>
                ₹{juice.price}
              </h3>



              <div
              style={{
                display:"flex",
                gap:"10px",
                marginTop:"15px"
              }}
              >


                <button
                onClick={()=>addToCart(juice)}
                style={{
                  flex:1,
                  padding:"10px",
                  background:"#2E7D32",
                  color:"white",
                  border:"none",
                  borderRadius:"8px",
                  cursor:"pointer"
                }}
                >
                  Add to Cart
                </button>



                <button
                onClick={()=>buyNow(juice)}
                style={{
                  flex:1,
                  padding:"10px",
                  background:"#FF9800",
                  color:"white",
                  border:"none",
                  borderRadius:"8px",
                  cursor:"pointer"
                }}
                >
                  Buy Now
                </button>


              </div>


            </div>


          </div>


        ))
      }


      </div>


    </div>

  );

}


export default Juice;