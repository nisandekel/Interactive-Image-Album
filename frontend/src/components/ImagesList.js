import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './ImageList.css';

function ImagesList(props) {

    let list = props.list.map((img, index) => {

        return (
            <Col className="col" key={index}>
                <Card className="card">
                    <Card.Body>
                        <Card.Img className="card-img" variant="top" src={img.photoBase64} />
                        <Card.Text className="card-text">{img.hashtags.join("#")}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    if(list.length===0 && props.DidFirstMount){
        list = <h3 className="not-found-msg">Did not find photo with such hashtags</h3>
    }

    else if (list.length % 3 !== 0) {
        list.push(<Col key={list.length}></Col>);
    }

    return (
        <Container type="none">
            <Row>{list}</Row>
        </Container>
    );
}

export default ImagesList;