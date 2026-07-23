import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";

function Home() {

  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([]);


  useEffect(() => {

    const fetchItems = async () => {

      try {

        const food = await axios.get("http://localhost:5000/api/foods");
        const snacks = await axios.get("http://localhost:5000/api/snacks");
        const juices = await axios.get("http://localhost:5000/api/juices");
        const desserts = await axios.get("http://localhost:5000/api/desserts");


        setItems([
          ...food.data,
          ...snacks.data,
          ...juices.data,
          ...desserts.data
        ]);

      }
      catch(error){

        console.log(error);

      }

    };


    fetchItems();

  }, []);



  const filteredItems = items.filter((item)=>


    item.name
    .toLowerCase()
    .includes(searchText.toLowerCase())


  );



  return (

    <div>

      <Hero />


      <SearchBar onSearch={setSearchText} />


      {
        searchText && (

          <div
          style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            gap:"20px"
          }}
          >

          {
            filteredItems.map((item)=>(

              <div
              key={item._id}
              style={{
                width:"250px",
                padding:"15px",
                background:"#fff",
                borderRadius:"15px",
                boxShadow:"0 3px 10px #ccc"
              }}
              >

                <img
                src={item.image}
                alt={item.name}
                style={{
                  width:"100%",
                  height:"160px",
                  objectFit:"cover"
                }}
                />


                <h3>
                  {item.name}
                </h3>


                <p>
                  {item.description}
                </p>


                <h3 style={{color:"green"}}>
                  ₹{item.price}
                </h3>


              </div>

            ))
          }

          </div>

        )

      }



      <div
      style={{
        display:"flex",
        justifyContent:"center",
        gap:"30px",
        flexWrap:"wrap",
        marginTop:"40px"
      }}
      >

        <CategoryCard
          title="Food"
          emoji="🍛"
          link="/food"
        />


        <CategoryCard
          title="Snacks"
          emoji="🍟"
          link="/snacks"
        />


        <CategoryCard
          title="Juices"
          emoji="🥤"
          link="/juice"
        />


        <CategoryCard
          title="Desserts"
          emoji="🍰"
          link="/desserts"
        />


        <CategoryCard
          title="My Orders"
          emoji="📦"
          link="/orders"
        />

      </div>


    </div>

  );

}


export default Home;