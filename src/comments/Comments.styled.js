import styled from 'styled-components';

export const CommentsSection = styled.section`
  display: grid;
  place-content: center;
`;

export const CommentsList = styled.ul`
  display: grid;
  gap: 100px;
`;

export const CommentsMessage = styled.div`
  width: 300px;
  height: 70px;
  padding: 5px;
  border-radius: 5px;
  font-size: 20px;
  background-color: lightgrey;
`;

export const CommentsForm = styled.form``;

export const Label = styled.label`
  font-size: 20px;
  transition: 0.3s ease-in;
  &:focus-within {
    color: blue;
  }
`;

export const Input = styled.input`
  padding: 15px 0;
  display: block;
  border: none;
  border-bottom: 2px solid #333;
  font-size: 18px;
  font-family: 'Muli', sans-serif;
  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 7px;
  font-size: 20px;
  color: white;
  background-color: #77d2dc;
  cursor: pointer;
`;
