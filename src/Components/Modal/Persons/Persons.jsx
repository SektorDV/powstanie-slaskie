import React, {useState, useEffect} from 'react'
import Textfield from "../../Textfield/Textfield";
import './Persons.scss';

const Persons = props => {
  const [menuSelection, setMenuSelection] = useState(0);
  const [top, setTop] = useState();

  let menuRef =[];

  useEffect(() => {
      let arr = [];
      arr.push(
        menuRef[0].getBoundingClientRect().top-menuRef[2].getBoundingClientRect().height/2, 
        menuRef[1].getBoundingClientRect().top-menuRef[2].getBoundingClientRect().height/2, 
        menuRef[2].getBoundingClientRect().top-menuRef[2].getBoundingClientRect().height/2)
      setTop(arr);
      
  },[])


    return(
        <div className="ps__modalwindow__content">
        <div className="ps__modalwindow__content__personslist">
          {props.content.map((e, index) => {
            return (
              <div
                            
                key={index}
                onClick={() => {setMenuSelection(index);
                }}
                className="ps__modalwindow__content__personslist__personcontainer"
                name={props.content[index].name}
              >
                <div
                 ref={ref => (menuRef[index] = ref)}
                  className="ps__modalwindow__content__personslist__personcontainer__bg"
                  style={{
                    backgroundColor:
                      menuSelection === index ? "#f25a4b" : "#27262a",
                  }}
                />
                <img
                  src={e.img}
                  alt={e.name}
                  className={menuSelection === index ? 'selected' : null}
                />
              </div>
            );
          })}
        </div>
        <div className="ps__modalwindow__content__textcontainer">
          <div className="arrow" style={{top: top?`calc(${top[0]}px - 3.5rem)`:null, opacity: menuSelection===0?1:0}}></div>
          <div className="arrow" style={{top: top?`calc(${top[1]}px - 3.5rem)`:null, opacity: menuSelection===1?1:0}}></div>
          <div className="arrow" style={{top: top?`calc(${top[2]}px - 3.5rem)`:null, opacity: menuSelection===2?1:0}}></div>
          <h2>{props.content[menuSelection].name}</h2>
          <div className="ps__modalwindow__content__textcontainer__dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          <Textfield content={props.content[menuSelection].text} />
        </div>
      </div>
    )
}

export default Persons;