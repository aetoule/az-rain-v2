import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setCatsList} from '../../redux/reducer';
import {Link} from 'react-router-dom';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gender: '',
            age: '',
            breed: '',
            filteredList: [],
            filtered: false
         }
    }

    componentDidMount(){
        axios.get('/api/cats').then(res => {
            console.log(res.data)
            this.props.setCatsList(res.data);
        }).catch(err => console.log('err', err))
    }
    render() { 
        const {catsList} = this.props;
        let mappedCatsList = catsList.map((cat, i) => {
            return (
                <Link to={`/catbio/${cat.id}`}>
                    <div className="mapped-cat-list" key={i}>
                        <img className="cat-profile-pic" src={cat.img}></img>
                        <h2 className="cat-name">{cat.name}</h2>
                        <p className="cat-age">{cat.age}</p>
                    </div>  
                </Link>    
            )
        })
        return ( 
            <div>
                Catalog
                {mappedCatsList}
                <Link to='/adminAdd'><button className="admin-button">Add a Cat</button></Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {catsList} = state;
    console.log(state);
    return {
        catsList
    }
}
export default connect (mapStateToProps, {setCatsList}) (Catalog)