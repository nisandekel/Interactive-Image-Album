import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './UploadPhoto.css';

const baseUrl = "http://localhost:3000";

class UploadPhoto extends React.Component{

    state = {photoUrl:"",hashtags:[]};

    changeHashtagsInputValue = (event) => {
      const hashtags = event.target.value.split("#");
      this.setState({hashtags});
    }

    changeImgInputValue = (event) => {
        // TOOD-update the state
        this.setState({photoUrl:"https://www.israelbmx.co.il/wp-content/uploads/2017/09/wtp-2018-arcade-blue.jpg"});
    }
   
    uploadPhotoToServer = () => {

        fetch(baseUrl+"/images",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log("success"))
          .catch(err=>console.log(err));
    }

    render(){
        return(
            <div id="upload-photo">
                <h4>Upload photo</h4>
                <Form>
                    <Form.Control className="form-element" onChange={this.changeImgInputValue} type="file"/>
                    <Form.Control className="form-element text-input" onChange={this.changeHashtagsInputValue} value={this.state.hashtags.join("#")} type="text" placeholder="Enter hashtags.."/>
                    <Button className="form-element" onClick={this.uploadPhotoToServer} variant="primary">Submit</Button> 
                </Form>
            </div>
        );
    }
}

export default UploadPhoto;

