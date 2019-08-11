import React, { useState, useEffect } from "react";
import "./Page.scss";
import Buttons from '../Buttons/Buttons';
import Textfield from '../Textfield/Textfield';
import { connect, dispatch } from 'react-redux';
import { parallax } from '../../functions/parallax';
import styled from 'styled-components';

const RightHalf = styled.div`
  width: 50%;
  display: grid;
  padding: 50px;
  grid-template: 30% 50% 5% / 50% 50%;
  grid-row-gap: 5%;
`

const Menu = styled.div`
  text-transform: uppercase;
  font-family: 'poppinsregular', sans-serif;
  font-weight: 700;
  color: #6a8594;
  grid-area: 1 / 1 / 1 / 1;

  & > div {
    cursor: pointer;
    user-select: none;
  }
`

const SmallImg = styled.div`
  background-image: url(${props => props.bg});
  grid-area: 1 / 2 / 2 / 3;
  background-repeat: no-repeat;
  background-size: contain;
`

const ButtonsLabel = styled.div`
  font-family: 'poppinsregular', sans-serif;
  font-weight: 700;
  position: relative;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  &::before {
      content: '';
      z-index: 1;
      position: absolute;
      height:1.2rem;
      top: -0.2rem;
      right: 40%;
      width: 50rem;
      background-color: #f25a4b;
  }
  span {
      z-index: 2;
      position: absolute;
  }
`

const GridTextField = styled.div`
grid-area: 2 / 1 / 3 / 3;
`


const Page = props => {
  const content = [];

  const audioContent = [];
  props.content.multimediaItems.forEach(el => el.type === "audio" ? audioContent.push(el) : false);

  const videoContent = [];
  props.content.multimediaItems.forEach(el => el.type === "video" ? videoContent.push(el) : false);

  const mapContent = [];
  props.content.multimediaItems.forEach(el => el.type === "map" ? mapContent.push(el) : false);

  props.content.menuItems.forEach(e => {
    if (e.content != "") content.push(e.content);
  });
  const [menuSelection, setMenuSelection] = useState(0);
  const [imgStyle, setImgStyle] = useState({ X: 0, Y: 0 })
  const [x, updatePositionX] = useState();

  useEffect(() => {
    parallax(x, setImgStyle)

  }, [x]);

  return (
    <div className="ps__page__main" onMouseMove={e => updatePositionX(e.clientX)}>
      <div
        className={`ps__page__left ${props.content.titleLeft ? '' : 'right-align'}`}
        style={{
          backgroundImage: `url(${props.content.bg})`, backgroundPositionX: -142 + imgStyle.X + 'px',
          backgroundPositionY: 0 + imgStyle.Y + 'px'
        }}
      >
        <div className="ps__page__left__title">
          <div className="ps__page__left__title__headline">
            <h2>{props.content.headline}</h2>
          </div>
          <hr />
          <div className="ps__page__left__title__subheadline">
            <p>{props.content.subheadline}</p>
          </div>
        </div>
        <div className="ps__page__left__photoAuthor">
          {props.content.bgAuthor}
        </div>
      </div>
      <RightHalf>
        <Menu>
          {props.content.menuItems.map((e, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  if (e.type === "text") setMenuSelection(index);
                  else {
                    props.sendDataToModal(e.content.img || null, e.content.author || null, e.content.content || null, e.type, e.content.modalTabs || null)
                    props.showModal();
                  }

                }}
                style={menuSelection === index ? { color: "black" } : null}
              >
                {e.label}
              </div>
            );
          })}
          <ButtonsLabel><span>POSŁUCHAJ I ZOBACZ</span></ButtonsLabel>
          <Buttons
            audio={audioContent.length > 0}
            audioContent={audioContent}
            video={videoContent.length > 0}
            videoContent={videoContent}
            map={mapContent.length > 0}
            mapContent={mapContent}
          />
        </Menu>
        
        <SmallImg
          bg={props.content.smallImg}
        />
        <GridTextField>
          <Textfield content={content[menuSelection]} />
        </GridTextField>
      </RightHalf>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendDataToModal: (img, imgAuthor, content, type, modalTabs) => {
      dispatch({
        type: 'SET_MODAL_DATA',
        payload: {
          img: img,
          imgAuthor: imgAuthor,
          content: content,
          type: type,
          modalTabs: modalTabs
        }
      })
    },
    showModal: () => dispatch({ type: 'SWITCH_ON_MODAL' })
  }
}

export default connect(null, mapDispatchToProps)(Page);
