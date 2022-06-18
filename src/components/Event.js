import temp1Img from '../images/bgimg-1.jpg'
import temp2Img from '../images/bgimg-2.jpg'
import {Card,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Event() {
 
  let navigate=useNavigate()

  return (
    <>
      <div className="row">
      <div className="m-3 p-5 justify-content-center template-1 col-12 col-sm-4 col-md-4">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={temp1Img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Button variant="primary" onClick={()=>navigate('/template1')}>Try This</Button>
      </div>

      <div className="p-5 m-3 justify-content-center template-2 col-12 col-sm-4 col-md-4">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={temp2Img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Button variant="primary" onClick={()=>navigate('/template2')}>Try This</Button>
      </div>

      <div className="p-5 m-3 justify-content-center template-3 col-12 col-sm-4 col-md-4">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={temp1Img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo eos culpa nisi nemo doloribus.
            </Card.Text>
          </Card.Body>
        </Card>
        <Button variant="primary" onClick={()=>navigate('/template3')}>Try This</Button>
      </div>
      </div>
      
    </>
  );
}

export default Event;
