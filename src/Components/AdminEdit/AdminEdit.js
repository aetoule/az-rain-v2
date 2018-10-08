import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 

class AdminEdit extends Component {
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

    // get one cat
    componentDidMount() {
        console.log('fired-adminEdit');  
        axios.get(`/api/cats/${this.props.match.params.id}`).then(res => {
            console.log(res)
            this.setState({
                img: res.data[0].img,
                name: res.data[0].name,
                age: res.data[0].age,
                gender: res.data[0].gender,
                type: res.data[0].type,
                color: res.data[0].color,
                breed: res.data[0].breed,
                description: res.data[0].description
            })
        })
    }

    // upon hitting submit, edits should get saved to axios.put
    handleSubmitEdits(id, img, name, age, gender, type, color, breed, description){
        console.log('this is this.state', )
        axios.put(`/api/cats/${id}`, {img, name, age, gender, type, color, breed, description})
        .then(res => {
            window.location.href = "/catalog"
        })
        .catch(err => {
            console.log('err', err)
        })
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
        // window.location.replace('/catbio');
        this.props.history.goBack();

    }

    render() { 
        const {img, name, age, gender, type, color, breed, description} = this.state;
        return ( 
            <div>AdminEdit
                <h1>Edit {name}'s Bio</h1>
                <div className="input-area-container">
                    <img className="adminAdd-cat-img" src={img} />
                    <h2>Image URL</h2>
                    <input className="adminAdd-input-box" placeholder={img} type="text" onChange={(e) => this.handleChangeImg(e.target.value)} />
                    <h2>Name</h2>
                    <input className="adminAdd-input-box" placeholder={name} type="text" onChange={(e) => this.handleChangeName(e.target.value)} />
                    <h2>Age</h2>
                    <input className="adminAdd-input-box" placeholder={age} type="text" onChange={(e) => this.handleChangeAge(e.target.value)} />
                    <h2>Gender</h2>
                    <input className="adminAdd-input-box" placeholder={gender} type="text" onChange={(e) => this.handleChangeGender(e.target.value)} />
                    <h2>Type</h2>
                    <input className="adminAdd-input-box" placeholder={type} type="text" onChange={(e) => this.handleChangeType(e.target.value)} />
                    <h2>Color</h2>
                    <input className="adminAdd-input-box" placeholder={color} type="text" onChange={(e) => this.handleChangeColor(e.target.value)} />
                    <h2>Breed</h2>
                    <input className="adminAdd-input-box" placeholder={breed} type="text" onChange={(e) => this.handleChangeBreed(e.target.value)} />
                    <h2>Description</h2>
                    <input className="adminAdd-input-box" placeholder={description} type="text" onChange={(e) => this.handleChangeDescription(e.target.value)} />
                    <div className="admin-button-container">
                        <button onClick={() => this.handleCancel()}>Cancel</button>
                        <button onClick={() => this.handleSubmitEdits(this.props.params.id, img, name, age, gender, type, color, breed, description)}>Save Changes</button>
                    </div>
                </div>

            </div>
        );
    }    

}

export default AdminEdit;






    

    

    // handleCancel() {
    //     this.setState = {
    //         img: '',
    //         name: '',
    //         age: 0,
    //         gender: '',
    //         type: '',
    //         color: '',
    //         breed: '',
    //         description:''
    //     }
    //     window.location.replace('/catalog')
    // }

    // handleAddCat(img, name, age, gender, type, color, breed, description) {
    //     console.log('this is whats in state under handleAddCat method', this.state);
    //     axios.post(`/api/cats`, {img, name, age, gender, type, color, breed, description})
    //     .then(res => {
    //         window.location.replace('/catalog');
    //     }).catch(err => {
    //         console.log('err', err)
    //     })
    // }

    


