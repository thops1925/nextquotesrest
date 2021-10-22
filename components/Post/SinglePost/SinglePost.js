import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../redux/postslice';
function SinglePost({ item, id }) {
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <div className="text-center  mt-8 bg-red-200" key={id}>
      <p className="h-12">{item.creator}</p>
      <p className="h-12">{item.title}</p>
      <p className="h-12">{item.message}</p>
      <img src={item.selectedFile} />
      <p className="h-12">{item.tags}</p>
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
