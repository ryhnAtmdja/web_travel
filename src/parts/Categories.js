import React from "react";
import Button from "components/Button";

const Categories = ({ data }) => {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <h5 className="text-gray-900" style={{ marginBottom: "20px" }}>
          {category.name}
        </h5>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There's no property to displat in this category...
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1},item-${index2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">choice</span>
                      </div>
                    )}
                    <div>
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                    </div>
                    <div className="meta-wrapper">
                      <Button
                        href={`/property/${item._id}`}
                        type="link"
                        className="d-block sterched-link text-gray-900"
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span className="text-gray-500 font-weight-light">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
};

export default Categories;
