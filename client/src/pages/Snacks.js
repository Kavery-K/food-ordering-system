import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Snacks() {

  const [snacks, setSnacks] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    axios
      .get("http://localhost:5000/api/snacks")
      .then((res) => {
        setSnacks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);



  // Add To Cart

  const addToCart = (snack) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    const existingItem = cart.find(
      (item) => item._id === snack._id
    );


    if(existingItem){

      existingItem.quantity += 1;

    } else {

      cart.push({
        ...snack,
        quantity:1
      });

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


    alert("Snack Added to Cart Successfully");

  };



  // Buy Now

  const buyNow = (snack) => {

    localStorage.setItem(
      "buyNow",
      JSON.stringify({
        ...snack,
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
        🍟 Snacks Menu
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
        snacks.map((snack)=>(


          <div
          key={snack._id}
          style={{
            width:"250px",
            background:"#fff",
            borderRadius:"15px",
            overflow:"hidden",
            boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
          }}
          >


            <img
            src={snack.image}
            alt={snack.name}
            style={{
              width:"100%",
              height:"180px",
              objectFit:"cover"
            }}
            />



            <div style={{padding:"15px"}}>


              <h3>
                {snack.name}
              </h3>


              <p>
                {snack.description}
              </p>



              <h3 style={{color:"#2E7D32"}}>
                ₹{snack.price}
              </h3>



              <div
              style={{
                display:"flex",
                gap:"10px",
                marginTop:"15px"
              }}
              >


                <button
                onClick={()=>addToCart(snack)}
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
                onClick={()=>buyNow(snack)}
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


export default Snacks;