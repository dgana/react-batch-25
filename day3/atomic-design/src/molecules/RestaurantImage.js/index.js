import React from "react";
import Text from "../../atoms/Text/Text";
import "./styles.css";

const RestaurantImage = ({
  image,
  deliveryDuration,
  rightLabels = [],
  leftLabels = [],
  closed
}) => {
  return (
    <div className="restaurantImage container">
      <img
        src={
          image
            ? image
            : "https://uploads.codesandbox.io/uploads/user/7057e602-9a4b-48e2-a956-a6a83661dbe2/lUkO-download.png"
        }
        alt={image}
      />

      <div className={"deliveryDuration"}>
        <Text type="subheading" text={deliveryDuration} />
      </div>

      <div className="rightLabelsGroup">
        {rightLabels.map((label, index) => (
          <div key={index} className={"rightLabel"}>
            {label}
          </div>
        ))}
      </div>

      <div className="leftLabelsGroup">
        {leftLabels.map((label, index) => (
          <div key={index} className={"leftLabel"}>
            {label}
          </div>
        ))}
      </div>

      {closed && <button>Closed</button>}
    </div>
  );
};

export default RestaurantImage;
