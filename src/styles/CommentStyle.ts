import styled from 'styled-components';

export const CommentBox = styled.div`
  height: 100vh;
  width: 100%;
  padding: 16px 8px;
  box-sizing: border-box;
`;
export const CommentViewBox = styled.div`
  box-sizing: border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  & > p {
    text-align: center;
    color: #aaaaaa;
  }
`;
export const CommentItem = styled.div<{ align: string; bgColor: string; border: string }>`
  margin-bottom: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => props.align};
  font-size: 12px;
  .commentMiniBox {
    display: flex;
    align-items: flex-start;
    & > img {
      width: 28px;
      height: 28px;
      margin-right: 9px;
      border-radius: 50%;
    }
    .username {
      font-size: 10px;
      margin-bottom: 4px;
    }
    .userComment {
      max-width: 280px;
      margin-right: 4px;
      padding: 8px 14px;
      box-sizing: border-box;
      border-radius: 8px;
      border: ${(props) => props.border};
      color: ${(props) => props.color};
      background-color: ${(props) => props.bgColor};
      cursor: pointer;
    }
  }
  .date {
    margin-right: 4px;
    font-size: 8px;
  }
`;
export const InputBox = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 359px;
  padding: 16px 0;
  box-sizing: border-box;
  background-color: white;
  & > form {
    width: 342px;
    height: 36px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-radius: 1000px;
    background-color: #f1f1f1;
    & > input {
      width: 90%;
      padding-left: 16px;
      background-color: #f1f1f1;
      outline: none;
    }
    & > input::placeholder {
      color: #aaaaaa;
    }
  }
`;
