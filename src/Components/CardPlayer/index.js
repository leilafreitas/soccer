import { PlusCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Container, Info, Title, Box, Add, Content } from "./styled";
import { Draggable } from "react-beautiful-dnd";

export const Card = ({ data, setPlayers, index }) => {
  return (
    <Draggable draggableId={`${data.playerId}`} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Content>
            <Box side="left">
              <p>
                <Title>Name:</Title>
                <Info>{data.name}</Info>
              </p>
              <p>
                <Title>Nationality:</Title>
                <Info>{data.nationality}</Info>
              </p>
            </Box>
            <Box side="right">
              <p>
                <Title>Age:</Title>
                <Info>{data.age}</Info>
              </p>
            </Box>
          </Content>
          <Add onClick={() => setPlayers(data)}>
            <PlusCircleOutlined style={{ color: "#B31256" }} />
          </Add>
        </Container>
      )}
    </Draggable>
  );
};
