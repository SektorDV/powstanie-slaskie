import React, {useState} from 'react'
import './Video.scss';
import ResponsiveEmbed from 'react-responsive-embed'

const Video = props => {
  const [visible, setVisible] = useState(false);
    return(
        <div className="ps__modalwindow__content">
        <div className={props.content[0].content.content.length > 1?"ps__modalwindow__content__videolist more": "ps__modalwindow__content__videolist"}>
          
          {props.content[0].content.content.map((e, index) => {
            return (
              <div className='ps__modalwindow__content__videocontainer' style={{opacity: visible? '1':'0', transition: 'opacity 1s ease-in'}}>
                  <ResponsiveEmbed src={`//embed.polskieradio.pl/video/${e.source}`} onLoad={()=>{setVisible(true)}} allowFullScreen />

                 <div  className='ps__modalwindow__content__videotext'>
                    <p>{e.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    )
}

export default Video;