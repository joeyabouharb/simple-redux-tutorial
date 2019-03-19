import React from 'react';
import { connect } from "react-redux";
import { deleteArticle } from '../services/actions/index';
const mapStateToProps = state => {
  return { articles: state.articles };
};

function mapDispatchToProps(dispatch){
  return {
    deleteArticle: (id) => dispatch(deleteArticle(id))
  }
} 

const MapListToDOM = ({ articles, deleteArticle }) => { 
  const onDeleteArticle = (id) => {
    deleteArticle({id})
  };
  return(
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
          <button onClick={onDeleteArticle.bind(this, el.id)}>Delete</button>
      
      </li>
    ))}
  </ul>
  )
}

const List = connect(mapStateToProps, mapDispatchToProps)(MapListToDOM);
export default List;