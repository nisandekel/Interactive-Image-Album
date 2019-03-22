import React from 'react';
import ImagesList from './ImagesList';
import {Form,Button} from 'react-bootstrap';
import './SearchPhotos.css'

const baseUrl = "http://localhost:3000";

class SearchPhotos extends React.Component{

    state = {imgList:[], hashtags:[]};
    allImagesFromServer=[];

    componentDidMount(){

        fetch(baseUrl+"/images")
            .then( res => res.json())
            .then(res=> {
                this.setState({imgList:res});
                this.allImagesFromServer=Object.freeze(res);
            })
            .catch(err =>console.log(err));
    }

    changeHashtagsInputValue = (event) => {
        const hashtags = event.target.value.split("#");
        this.setState({hashtags});
    }

    filterCards = () => {
        const imgList = this.allImagesFromServer.filter(img =>{
            return isArr1ContainsArr2(img.hashtags, this.state.hashtags);
        });

        this.setState({imgList});
    }

    render(){
        return(
            <div id="search-photo">
                <h4>Search photos</h4>
                <Form>
                    <Form.Control className="form-element text-input" onChange={this.changeHashtagsInputValue} type="text" value={this.state.hashtags.join("#")} placeholder="Enter hashtags..."/>
                    <Button className="form-element" onClick={this.filterCards}>Search</Button>
                </Form>
                <ImagesList list={this.state.imgList}/>
            </div>
        );
    }
}

function isArr1ContainsArr2(arr1,arr2){

    for(let i=0;i<arr2.length;i++){
        if(!arr1.includes(arr2[i])){
            return false;
        }
    }
    return true;
}

export default SearchPhotos;