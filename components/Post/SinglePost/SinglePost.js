import { useDispatch } from 'react-redux';
import { deleteTodos } from '../../../redux/postslice';

function SinglePost({ title, creator, tags, message, image, id }) {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodos({ id }));
  };

  return (
    <div className="text-center  mt-8 bg-red-200">
      <p className="h-12">{creator}</p>
      <p className="h-12">{title}</p>
      <p className="h-12">{message}</p>
      <img src={image} className="object-cover" />
      <p className="h-12">{tags}</p>
      <button
        onClick={removeTodo}
        className="bg-blue-500 rounded-sm h-12 w-full"
      >
        Delete
      </button>
      <br />
    </div>
  );
}

export default SinglePost;
