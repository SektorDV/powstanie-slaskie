import React, {useState} from 'react'
import Textfield from "../../Textfield/Textfield";
import './Video.scss';
import ResponsiveEmbed from 'react-responsive-embed';

const Video = props => {
  const [menuSelection, setMenuSelection] = useState(0);
    return(
        <div className="ps__modalwindow__content">
        <div className="ps__modalwindow__content__videolist">
          {props.content[0].content.content.map((e, index) => {
            return (
              <div className='ps__modalwindow__content__videocontainer'>
                  <ResponsiveEmbed src={`//embed.polskieradio.pl/video/${e.source}`}  allowFullScreen />

                  {/* <iframe 
                  width="460" 
                  height="260" 
                  src= {`//embed.polskieradio.pl/video/${e.source}`} 
                  scrolling="no" 
                  frameborder="0" 
                  allowfullscreen="">
                </iframe> */}
                <div  className='ps__modalwindow__content__videotext'>
                    <p>{e.text}</p>
                </div>>
              </div>
            );
          })}
        </div>
        
      </div>
    )
}

export default Video;