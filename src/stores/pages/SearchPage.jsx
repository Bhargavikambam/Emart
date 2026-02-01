import React from "react";
import { useLocation, Link } from "react-router-dom";

// Import all your data
import { mobileData } from "../data/mobiles";
import { booksData } from "../data/books";
import { tvData } from "../data/tv";
import { speakerData } from "../data/speaker";
import { acData } from "../data/ac";
import { computerData } from "../data/computers";
import { menData } from "../data/men";
import { womanData } from "../data/woman";
import { furnitureData } from "../data/furniture";
import { kitchenData } from "../data/kitchen";
import { watchData } from "../data/watch";
import { fridgeData } from "../data/fridge";
// ... add other categories if needed

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase();

  // Combine all products into one array
  const allProducts = [
    ...mobileData.map((item) => ({ ...item, category: "mobiles" })),
    ...computerData.map((item) => ({ ...item, category: "computers" })),
    ...watchData.map((item) => ({ ...item, category: "watches" })),
    ...menData.map((item) => ({ ...item, category: "mens" })),
    ...womanData.map((item) => ({ ...item, category: "womens" })),
    ...furnitureData.map((item) => ({ ...item, category: "furnitures" })),
    ...kitchenData.map((item) => ({ ...item, category: "kitchen" })),
    ...fridgeData.map((item) => ({ ...item, category: "fridges" })),
    ...booksData.map((item) => ({ ...item, category: "books" })),
    ...speakerData.map((item) => ({ ...item, category: "speaker" })),
    ...tvData.map((item) => ({ ...item, category: "tv" })),
    ...acData.map((item) => ({ ...item, category: "ac" })),
  ];

  // Filter based on query
  const filteredProducts = allProducts.filter((item) => {
    const valuesToSearch = Object.values(item)
      .filter((v) => typeof v === "string")
      .map((v) => v.toLowerCase());
    return valuesToSearch.some((val) => val.includes(query));
  });

  return (
    <div className="searchResults">
      {/* Inline CSS */}
      <style>{`
        .searchResults {
          padding: 20px;
        }
        .proSection {
          display: grid;
          grid-template-columns: repeat(5, 1fr); /* 5 items per row */
          gap: 15px;
          margin-top: 20px;
        }
        .imgBox {
          text-align: center;
        }
        .imgBox img {
          width: 100%;
          height: auto;
          border-radius: 5px;
          transition: transform 0.3s;
        }
        .imgBox img:hover {
          transform: scale(1.05);
        }
        .imgBox p {
          margin-top: 5px;
          font-size: 14px;
        }
        @media screen and (max-width: 1200px) {
          .proSection {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media screen and (max-width: 900px) {
          .proSection {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media screen and (max-width: 600px) {
          .proSection {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <h2>Search results for "{query}"</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="proSection">
          {filteredProducts.map((item) => (
            <div className="imgBox" key={`${item.category}-${item.id}`}>
              <Link to={`/${item.category}/${item.id}`}>
                <img src={item.image} alt={item.model || item.name} />
              </Link>
              <p>{item.company || item.title || item.brand || item.name} - {item.model || item.author || item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
