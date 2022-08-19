import React from "react";

import Button from "components/Button";

const MostPicked = props => {
  return (
    <section className="container" ref={props.mostPickedRef}>
      <h5 className="text-gray-900" style={{ marginBottom: "20px" }}>
        Most Picked
      </h5>
      <div className="container-grid">
        {props.data.map((item, i) => {
          return (
            <div
              key={i}
              className={`item column-4 ${i === 0 ? "row-2" : "row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price} <span>per {item.unit}</span>
                </div>
                <div>
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                </div>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="text-white d-block streched-link"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span className="font-weight-light">
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPicked;
