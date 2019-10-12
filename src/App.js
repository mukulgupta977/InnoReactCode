import React from 'react';
import './App.css';
import axios from 'axios';
import {SearchBox} from './Components/searchComp';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      books:[],
      searchField :'',
    };
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:8001/books-data/`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      })
  }


  
  render(){
    const {books,searchField} = this.state;
    const filteredBooks = books.filter(book=>book.book_name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>books list</h1>
        <SearchBox placeholder='Search Book' changeHandler={e=>
          this.setState({searchField:e.target.value})}/>
          <ul>
            { filteredBooks.map(item => <li>{item.book_name}</li>)}
          </ul>

          <form onSubmit={this.handleSubmit}>
          <label>
            Book Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        
     </div>
    )
  }
}
export default App;
