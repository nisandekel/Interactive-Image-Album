import React from 'react';
import ImagesList from './ImagesList';
import { Form, Button } from 'react-bootstrap';
import './SearchPhotos.css'
import Banner from './Banner';


class SearchPhotos extends React.Component {

    state = { imgList: [], hashtags: "", DidFirstMount: false };

    componentDidMount() {
        fetch(route("public/images/?results=" + this.props.imgNumToDisplay))
            .then(res => res.json())
            .then(res => {
                this.setState({ imgList: res, DidFirstMount: true });
            })
            .catch(err => console.log(err));
    }

    changeHashtagsInputValue = (event) => {
        const hashtags = event.target.value;
        this.setState({ hashtags });
    }

    filterCards = () => {
        const hashtagsArr = this.state.hashtags.split("#");
        const hashtags = hashtagsArr.join("-");
        fetch(route("public/images/byHashtags/?hashtags=" + hashtags))
            .then(res => res.json())
            .then(res => this.setState({ imgList: res }));
    }

    render() {
        return (
            <div id="search-photo">
                <h4>Search photos</h4>
                <Form>
                    <Form.Control className="form-element text-input" type="text" onChange={this.changeHashtagsInputValue} value={this.state.hashtags} placeholder="Enter hashtags..." />
                    <Button className="form-element" onClick={this.filterCards}>Search</Button>
                </Form>
                <ImagesList DidFirstMount={this.state.DidFirstMount} list={this.state.imgList} />
                <Banner></Banner>
            </div>
        );
    }
}

const baseUrl = "http://localhost:3000";

function route(path) {
    return baseUrl + "/" + path;
}

export default SearchPhotos;