import React, { Component } from 'react';
import axios from 'axios';
import {setCatsList} from '../../redux/reducer';
import {Link} from 'react-router-dom';

// gets cat 
class CatBio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            catData: []
        }
    }

    componentDidMount() {
        axios.get(`/api/cats/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                catData: res.data[0]
            })
        })
        .catch(err => {
            console.log('err', err)
        })
    }

    handleDelete() {
        axios.delete(`/api/cats/${this.props.match.params.id}`)
        .then(res => {
            this.props.history.goBack();
        })
    }

    render() {
        let {img, name, age, gender, type, color, breed, description} = this.state; 
        return ( 
            <div>Catbio
                <div className="entirePage?"></div>

                <div className="admin-button-container">
                    <Link to="/adminEdit"><button>Edit</button></Link>
                    <button onClick={() => this.handleDelete()}>Delete</button>
                </div>
            </div>
        );
    }
}


export default CatBio;