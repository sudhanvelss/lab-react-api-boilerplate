import { useState } from 'react'
import './App.css'
import axios from "axios";
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect (() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => {
      setData(res.data.books)
      console.log(data)
    })
    
    .catch(err => {
      console.log('Status Code:' + err.response.status)
    })
  },[])
  
  return (
    <>
      {data.map((item) => {
        return(
          <div key={item.id}>
            <h4>{item.title}</h4>
            <div className='flex'>
              <img src={item.imageLinks.thumbnail} alt="thumbnail"/> 
              <p>{item.description}</p>
            </div>
            {item.authors.map((author,index)=> {
              return<span key={index}>{author}</span>
            })}
            <hr></hr>
          </div>
        )
      })}
    </>
  )
}

export default App
