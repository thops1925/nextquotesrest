import { useSelector } from 'react-redux';
import SinglePost from './SinglePost/SinglePost';

function PostList() {
  const list = useSelector((state) => state.post);
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
