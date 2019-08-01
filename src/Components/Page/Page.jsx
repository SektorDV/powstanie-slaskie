import React from "react";
import "./Page.scss";

const Page = props => {
  return (
    <div className="ps__page__main">
      <div
        className="ps__page__left"
        style={{ backgroundImage: `url(${props.content.bg})`,
      justifyContent: props.content.titleLeft ? null : 'flex-end',
      alignItems: props.content.titleLeft ? null : 'flex-end'
      }}
      >
        <div className="ps__page__left__title">
          <div className="ps__page__left__title__headline">
            <h2>{props.content.headline}</h2>
          </div>
          <hr />
          <div className="ps__page__left__title__subheadline">
            {props.content.subheadline}
          </div>
        </div>
      </div>
      <div className="ps__page__right" />
    </div>
  );
};

export default Page;
