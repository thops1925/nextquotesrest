import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addApi } from '../../redux/postslice';
import FileBase64 from 'react-file-base64';

function Form() {
  const [value, setValue] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addApi(value));
    setValue({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };
  console.log(value);
  return (
    <div className="fixed top-0 right-32 bg-gray-100 sm:w-1/5 h-42 items-center mt-8">
      <h1 className="text-3xl">Your Daily Quotes</h1>

      <form
        className="flex flex-col space-y-2 w-full px-8"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Creator"
          type="text"
          name="creator"
          className="h-12 px-2"
          onChange={(e) => setValue({ ...value, creator: e.target.value })}
          value={value.creator}
        />
        <input
          placeholder="Title"
          type="text"
          name="title"
          className="h-12 px-2"
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          value={value.title}
        />
        <textarea
          placeholder="Message"
          type="text"
          name="message"
          className="resize-none h-64"
          onChange={(e) => setValue({ ...value, message: e.target.value })}
          value={value.message}
        />
        <input
          placeholder="tags"
          type="text"
          name="tags"
          className="h-12 px-8"
          onChange={(e) => setValue({ ...value, tags: e.target.value })}
          value={value.tags}
        />
        <div>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setValue({ ...value, selectedFile: base64 })
            }
          />
        </div>
        <button type="submit" className="bg-blue-600 rounded-sm h-12">
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
