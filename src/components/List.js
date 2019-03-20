import React from 'react';
import { connect } from "react-redux";
import { deleteArticle } from '../services/actions/index';
import '../list.css';
const mapStateToProps = state => {
  return { articles: state.articles, err: state.err};
};

function mapDispatchToProps(dispatch){
  return {
    deleteArticle: (id) => dispatch(deleteArticle(id))
  }
} 

const MapListToDOM = ({ articles, err, deleteArticle }) => { 
  const onDeleteArticle = (id) => {
    deleteArticle({id})
  };
  return(
    <div>
        <div>
    <p> {err} </p>
  </div>
  <ul className="list-group">
    {articles.map(el => (
      <li className="list-item" key={el.id}>
      <div>
        {el.title}
      </div>
        
        <div>
        <button className="form-button" onClick={onDeleteArticle.bind(this, el.id)}>Delete</button>
        </div> 
         
      
      </li>
    ))}
  </ul>
  </div>
  )
}

const List = connect(mapStateToProps, mapDispatchToProps)(MapListToDOM);
export default List;