import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../../redux/postslice';
import SinglePost from './SinglePost/SinglePost';

function PostList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div className="w-1/4 h-2/3">
      {list.map((item) => (
        <SinglePost item={item} id={item.id} />
      ))}
      <br />
    </div>
  );
}

export default PostList;
