import React from 'react'
import { Link } from 'react-router-dom'
import { booksData } from '../data/books'

const Books = () => {
  const firstFiveImages = booksData.slice(0, 5)

  return (
    <>
      <div className="proTitle">
        <h2>Books</h2>
      </div>

      <div className="proSection">
        {firstFiveImages.map((item) => (
          <div className="imgBox" key={item.id}>
            <Link to={`/book/${item.id}`}>
              <img
                className="proImage"
                src={item.image}
                alt={item.model}
                style={ {padding:"20px", margin:"10px"}}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books
