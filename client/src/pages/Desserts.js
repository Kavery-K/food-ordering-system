import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Desserts() {

  const [desserts, setDesserts] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    axios
      .get("http://localhost:5000/api/desserts")
      .then((res) => {
        setDesserts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);



  // Add To Cart

  const addToCart = (dessert) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    const existingItem = cart.find(
      (item) => item._id === dessert._id
    );


    if(existingItem){

      existingItem.quantity += 1;

    } 
    else {

      cart.push({
        ...dessert,
        quantity:1
      });

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


    alert("Dessert Added to Cart Successfully");

  };



  // Buy Now

  const buyNow = (dessert) => {

    localStorage.setItem(
      "buyNow",
      JSON.stringify({
        ...dessert,
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
        🍰 Desserts Menu
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
        desserts.map((dessert)=>(


          <div
          key={dessert._id}
          style={{
            width:"250px",
            background:"#fff",
            borderRadius:"15px",
            overflow:"hidden",
            boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
          }}
          >


            <img
            src={dessert.image}
            alt={dessert.name}
            style={{
              width:"100%",
              height:"180px",
              objectFit:"cover"
            }}
            />



            <div style={{padding:"15px"}}>


              <h3>
                {dessert.name}
              </h3>


              <p>
                {dessert.description}
              </p>



              <h3 style={{color:"#2E7D32"}}>
                ₹{dessert.price}
              </h3>



              <div
              style={{
                display:"flex",
                gap:"10px",
                marginTop:"15px"
              }}
              >


                <button
                onClick={()=>addToCart(dessert)}
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
                onClick={()=>buyNow(dessert)}
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


export default Desserts;