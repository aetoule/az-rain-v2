import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 

class AdminAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img: '',
            name: '',
            age: 0,
            gender: '',
            type: '',
            color: '',
            breed: '',
            description:''
         }
    }

    componentDidMount() {
        console.log('fired');  
              
    }

    handleChangeImg(value) {
        this.setState({
            img: value
        })
    }
    handleChangeName(value) {
        this.setState({
            name: value
        })
    }
    handleChangeAge(value) {
        this.setState({
            age: value
        })
    }
    handleChangeGender(value) {
        this.setState({
            gender: value
        })
    }
    handleChangeType(value) {
        this.setState({
            type: value
        })
    }
    handleChangeColor(value) {
        this.setState({
            color: value
        })
       
    }
    handleChangeBreed(value) {
        this.setState({
            breed: value
        })
    }
    handleChangeDescription(value) {
        this.setState({
            description: value
        })
            
    }

    handleCancel() {
        this.setState = {
            img: '',
            name: '',
            age: 0,
            gender: '',
            type: '',
            color: '',
            breed: '',
            description:''
        }
        window.location.replace('/catalog')
    }

    handleAddCat(img, name, age, gender, type, color, breed, description) {
        console.log('this is whats in state under handleAddCat method', this.state);
        axios.post(`/api/cats`, {img, name, age, gender, type, color, breed, description})
        .then(res => {
            window.location.replace('/catalog');
        }).catch(err => {
            console.log('err', err)
        })
    }

    render() { 
        const {img, name, age, gender, type, color, breed, description} = this.state;
        return ( 
            <div>AdminAdd
                <h1>Add a Cat</h1>
                <div className="input-area-container">
                    <img className="adminAdd-cat-img" src={img} />
                    <h2>Image URL</h2>
                    <input className="adminAdd-input-box" placeholder="https://image.photography.com/photo" type="text" onChange={(e) => this.handleChangeImg(e.target.value)} />
                    <h2>Name</h2>
                    <input className="adminAdd-input-box" placeholder="Sniffles" type="text" onChange={(e) => this.handleChangeName(e.target.value)} />
                    <h2>Age</h2>
                    <input className="adminAdd-input-box" placeholder="1 years old" type="text" onChange={(e) => this.handleChangeAge(e.target.value)} />
                    <h2>Gender</h2>
                    <input className="adminAdd-input-box" placeholder="Female" type="text" onChange={(e) => this.handleChangeGender(e.target.value)} />
                    <h2>Type</h2>
                    <input className="adminAdd-input-box" placeholder="Cat or Kitten" type="text" onChange={(e) => this.handleChangeType(e.target.value)} />
                    <h2>Color</h2>
                    <input className="adminAdd-input-box" placeholder="Gray" type="text" onChange={(e) => this.handleChangeColor(e.target.value)} />
                    <h2>Breed</h2>
                    <input className="adminAdd-input-box" placeholder="DSH" type="text" onChange={(e) => this.handleChangeBreed(e.target.value)} />
                    <h2>Description</h2>
                    <input className="adminAdd-input-box" placeholder="Sniffles is a 1 year old gray kitten who loves playing in the sunlight" type="text" onChange={(e) => this.handleChangeDescription(e.target.value)} />
                    <div className="admin-button-container">
                        <button onClick={() => this.handleCancel(img, name, age, gender, type, color, breed, description)}>Cancel</button>
                        <button onClick={() => this.handleAddCat(img, name, age, gender, type, color, breed, description)}>Add Cat</button>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default AdminAdd;