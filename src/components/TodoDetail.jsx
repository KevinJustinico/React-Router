import { Link } from 'react-router-dom';
import '../styles.css'

function TodoDetail() {

  const todo = {  
    title: '', 
    description: '', 
    createdAt: '' 
  };

  return (
    <div className='container'>
      <h1>Todo Detail</h1>
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <p>Created At: {todo.createdAt}</p>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

export default TodoDetail;

