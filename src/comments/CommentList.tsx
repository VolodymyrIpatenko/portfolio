import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Label,
  Input,
  SubmitBtn,
  CommentsList,
  CommentsMessage,
  CommentsSection,
} from './Comments.styled';

type Comment = {
  name: string;
  message: string;
};

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [data, setData] = useState({
    name: '',
    message: '',
  });

  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  const { name, message } = data;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = { name, message };
    setComments([...comments, newData]);
    setData({ name: '', message: '' });
    toast.success('Thanks for your comment');
    localStorage.setItem('comments', JSON.stringify([...comments, newData]));
  };

  const handleDelete = (index: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);

    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onMouseOver = (): void => {
    if (comments.length > 0) {
      toast.warning('You have posted your comment');
    }
  };

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  return (
    <CommentsSection>
      <ToastContainer />
      <h2>Feel free to leave a comment down below</h2>
      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        <CommentsList>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}:</strong>
              <pre>{`Posted ${date}   ${time}`}</pre>
              <CommentsMessage>{comment.message}</CommentsMessage>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </CommentsList>
      )}
      <form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            value={name}
            name="name"
            onChange={handleValue}
            required
          />
        </Label>

        <Label>
          Message:
          <Input
            value={message}
            name="message"
            onChange={handleValue}
            required
          ></Input>
        </Label>

        <div onMouseEnter={onMouseOver}>
          <SubmitBtn disabled={comments.length > 0 ? true : false}>
            Submit
          </SubmitBtn>
        </div>
      </form>
    </CommentsSection>
  );
};

export default App;
