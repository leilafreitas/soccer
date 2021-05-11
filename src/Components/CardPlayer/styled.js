import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 4em;
  border-radius: 0.3em;
  border: ${(props) =>
    props.isDragging ? "0.2em dashed #b31256" : "0.15em dashed #f7f3f7"};
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 0.1rem;
  margin-bottom: ${(props) => (props.isDragging ? "0" : "0.3em")};
`;

export const Content = styled.div`
  background-image: linear-gradient(#f9f9f9, #e7e7e7);
  flex: 1;
  border-radius: 0.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const Add = styled.div`
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Box = styled.div`
  width: ${(props) => (props.side === "left" ? "70%" : "30%")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    display: flex;
    margin: 0;
    justify-content: ${(props) =>
      props.side === "left" ? "flex-start" : "flex-end"};
  }
  z-index: 92;
`;

export const Title = styled.span`
  color: #000000;
  margin-right: 0.2rem;
`;

export const Info = styled.map`
  color: #b31256;
  font-weight: 400;
`;
