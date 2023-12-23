import { Card } from "react-bootstrap"

interface CardInfo {
    CardImage: string
    CardText: string
}

const ImageTextCard = ({CardImage, CardText}: CardInfo) => {
    return(
     <>
     <Card>
        <Card.Img variant="top" src={CardImage} />
        <Card.Body>
            <Card.Text>
                {CardText}
            </Card.Text>
        </Card.Body>
     </Card>
     </>   
    )
}

export default ImageTextCard