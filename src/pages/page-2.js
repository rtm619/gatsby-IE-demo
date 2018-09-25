import React from 'react'
import { Link } from 'gatsby'
import Axios from 'axios'

import Layout from '../components/layout'

class SecondPage extends React.Component{

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response =>{
      console.log(response.data);
    })
    let array = [{ name: "ABC", job: "DEF" }, { name: "GHI", job: "JKL" }, { name: "MNO", job: "PQR" }];
    array.forEach(ele => console.log(ele) )
  }

  render(){
    
    return (
      <Layout>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage
