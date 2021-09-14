import styled from 'styled-components'

export const QuestionWrapper = styled.div`
  max-width: 1100px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  //border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  
  p {
    font-size: 1.2rem;
  }
    `

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
  
  :hover {
    opacity: 0.8;
  }
  
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked}) => 
       correct ? 'linear-gradient(90deg, #75FF33, #33FF57)'
               : !correct && userClicked 
               ? 'linear-gradient(90deg, #d9534f, #e60000)'
               : 'linear-gradient(90deg, black, black)'};
    border: 1px solid burlywood;
    //box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
`
