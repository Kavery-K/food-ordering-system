import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);


  return (
    <div style={{ padding: "30px" }}>

      <h1
        style={{
          textAlign: "center",
          color: "green"
        }}
      >
        📦 My Orders
      </h1>


      {
        orders.length === 0 ? (

          <h2 style={{textAlign:"center"}}>
            No Orders Found
          </h2>

        ) : (

          orders.map((order) => (

            <div
              key={order._id}
              style={{
                background:"#fff",
                padding:"20px",
                margin:"20px auto",
                maxWidth:"600px",
                borderRadius:"15px",
                boxShadow:"0 4px 10px #ccc"
              }}
            >

              <h3>
                👤 Name : {order.customerName}
              </h3>

              <p>
                📞 Phone : {order.phone}
              </p>

              <p>
                📍 Address : {order.address}
              </p>


              <h3>
                🍴 Items
              </h3>


              {
                order.items.map((item,index)=>(

                  <p key={index}>
                    {item.name} × {item.quantity}
                    {"  "}
                    ₹{item.price * item.quantity}
                  </p>

                ))
              }


              <hr />


              <h3>
                Total Amount : ₹{order.totalAmount}
              </h3>


              <p>
                💳 Payment : {order.paymentMethod}
              </p>


              <p>
                🚚 Status : {order.status}
              </p>
              <p>
  📅 Order Date : {new Date(order.createdAt).toLocaleDateString()}
</p>

<p>
  ⏰ Order Time : {new Date(order.createdAt).toLocaleTimeString()}
</p>


            </div>

          ))

        )
      }


    </div>
  );
}


export default Orders;