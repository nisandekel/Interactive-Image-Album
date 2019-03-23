import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Banner from './Banner';
import './UploadPhoto.css';


class UploadPhoto extends React.Component {

    state = { photoBase64: "", hashtags: ""};
    bannerMsg ="";
    textInputRef = React.createRef();
    imgInputRef = React.createRef();

    changeHashtagsInputValue = (event) => {
        const hashtags = event.target.value;
        this.setState({ hashtags });
    }

    convertImgToBase64 = (event) => {
        const img = event.target.files[0];
        getBase64(img).then(data => this.setState({ photoBase64: data}));
    }

    checkValidation = () => {
        if(this.imgInputRef.current.value===""){
            this.bannerMsg = "please choose photo to upload";
        }
        else if(this.textInputRef.current.value.charAt(0)!=='#'){
            this.bannerMsg ="text input must start with an hashtag";
        }
        else{
            this.uploadPhotoToServer();
        }
        this.setState(this.state);
    }

    uploadPhotoToServer = () => {
        fetch(route("public/images"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res => res)
          .catch(err => console.log(err));
    }

    componentDidUpdate(){
        this.bannerMsg ="";
    }

    render() {
        return (
            <div id="upload-photo">
                <h4>Upload photo</h4>
                <Form>
                    <Form.Control className="form-element" ref={this.imgInputRef} onChange={this.convertImgToBase64} type="file"/>
                    <Form.Control className="form-element text-input" ref={this.textInputRef} onChange={this.changeHashtagsInputValue} value={this.state.hashtags} type="text" placeholder="Enter hashtags.." />
                    <Button className="form-element" onClick={this.checkValidation} variant="primary">Submit</Button>
                </Form>
                <Banner msg={this.bannerMsg}></Banner>
            </div>
        );
    }
}

const baseUrl = "http://localhost:3000";

function route(path) {
    return baseUrl + "/" + path;
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

export default UploadPhoto;

