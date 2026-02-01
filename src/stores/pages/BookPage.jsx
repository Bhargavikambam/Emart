import React, { useState } from "react";
import { Link } from "react-router-dom";
import { booksData } from "../data/books";      
import Navbar from "../components/Navbar";  

const BookPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        booksData : booksData.filter((orange)=>selectedProduct.includes(orange.title))

return (
<>
<Navbar />
<style>{`
  .fullpage {
    display: flex;
  }

  .pro-selected {
    position: fixed;
    width: 230px;
    top: 0; /* must have a unit, 0px works too */
    left: 0;
    height: 100vh;
    background-color: aliceblue;
    overflow-y: auto;
    padding: 20px;
    border-right: 1px solid black;
    margin-top: 130px;
  }

  .pageSection {
    margin-left: 250px; /* leave space for sidebar */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
  }

   .pageImg img {
    width: 200px;      
    height: 250px;    
    object-fit: cover; /* ensure image fits nicely */
    border-radius: 5px;
    }
   .proModel {
    text-align: center;
    margin-top: 30px;
    font-size: 18px;
    color: black;
  }

  .pro-input input {
    margin-right: 5px;
    margin-bottom: 10px;
  }

`}</style>
<div className="fullpage">
    
<div className="pro-selected">

{booksData.map((phone)=>{
    return(
        <div className='pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(phone.title)}
                onChange={()=>companyHandler(phone.title)}
                />
                {phone.title}
            </label>
        </div>
    )
})}

</div>

<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

            <Link to={`/book/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="proModel">
                    {item.title}, {item.author}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
};

export default BookPage;
