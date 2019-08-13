import React, { useState, useEffect } from "react";
import Navmenu from "./Navmenu";
import "./Statistics.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Statistics = props => {
  const [menuSelection, setMenuSelection] = useState(0);
  const [backgrounds, setBackgrounds] = useState([]);
  const menuSelectionHandler = select => {
    setMenuSelection(select);
  };
  useEffect(() => {
    props.tabs.forEach(e => {
      let buffer = backgrounds;
      buffer.push(e.layout.props.bg);
      setBackgrounds(buffer);
    });
  }, []);

  return (
    <div
      className="ps__modalwindow__stats__content"
      style={{ backgroundImage: `url(${backgrounds[menuSelection]})` }}
      author={props.tabs[menuSelection].bgImgAuthor}
    >
      {props.tabs.length > 1 ? <Navmenu
        menuItems={props.tabs}
        handler={menuSelectionHandler}
        selected={menuSelection}
      /> : null }
      <TransitionGroup className="modal-transition-group">
        <CSSTransition key={menuSelection} classNames="modalfade" timeout={{enter: 600, exit: 300}}>
            <section className="statistics-section">
                {props.tabs[menuSelection].layout}
            </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Statistics;
