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

  console.log(list);
  return (
    <div className="w-1/4 h-2/3">
      {list.map((item) => (
        <SinglePost
          id={item._id}
          title={item.title}
          image={item.selectedFile}
          creator={item.creator}
          tags={item.tags}
          message={item.message}
        />
      ))}
      <br />
    </div>
  );
}

export default PostList;
