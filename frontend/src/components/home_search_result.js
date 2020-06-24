import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { useHistory, useLocation} from "react-router-dom";
export default function HomeSearchResult({id, imgUrl, text, isYoutube, fadeInMillis}){
  //used for routing the url when this item is clicked
  const history = useHistory();

  //used to acquire context as to where to route given the parameters
  const location = useLocation()
  //used for fading in after fadeInMillis
  const [opacity, setOpacity] = useState(0)
  const routeURL = () => {
      const url = location.pathname
      //route from home to either the page of the YouTube or Genius page
      if (url === '/'){
        history.push(isYoutube ? `/y/${id}` : `/g/${id}` )
      }
      //replace the null id (0) with the supplied id
      else if (url.substring(0,3) === '/s/'){
        const zeroLocation = url.indexOf('/0/')
        history.push(url.substring(0, zeroLocation) + `/${id}/` + url.substring(zeroLocation + 3))
      }
  }
  useEffect(() => {
    async function sleepBeforeAppear(millis){
      await new Promise(resolve => setTimeout(resolve, millis));
      setOpacity(1)
    }
    sleepBeforeAppear(fadeInMillis)
  }, [])
  return(
    <Col xs = {5} style = {{transition: 'opacity 0.5s', opacity:opacity, marginTop: '10px', paddingLeft: '0px', paddingRight: '10px'}}>
      <Button style = {{minWidth:'100%'}} onClick={() => routeURL()}>
        <Col>
          <Image src={imgUrl} style={{width: '50%', height: '50%'}} />
        </Col>
        <Col>
          <p style = {{fontSize: '20px'}}>
            {text}
          </p>
        </Col>
      </Button>
    </Col>
  )
}
