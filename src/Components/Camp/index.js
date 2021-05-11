import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Box, Cell, Container, Content } from "./styled";
import { formacoes } from "../../Helper/Positions";
import { Droppable } from "react-beautiful-dnd";

export const Camp = ({ formation }) => {
  const teste = formacoes[formation];
  const [posicoes, setPosicoes] = useState([]);

  const setPosition = (forma) => {
    return (
      <>
        {forma.map((forma, key) => {
          return (
            <Box key={key} row={forma.row} column={forma.col}>
              <Content>
                <Cell>
                  <PlusOutlined style={{ color: "#F7F3F7" }} />
                </Cell>
              </Content>
            </Box>
          );
        })}
      </>
    );
  };

  const initial = () => {
    return (
      <>
        {teste.map((forma) => {
          return <>{setPosition(forma)}</>;
        })}
      </>
    );
  };

  return (
    <Droppable droppableId={"cell"} row={"9"} column={"3"}>
      {(provided) => (
        <Container ref={provided.innerRef}>
          {initial()}
          <Box row="9" column="3">
            <Content>
              <Cell>
                <PlusOutlined style={{ color: "#F7F3F7" }} />
              </Cell>
            </Content>
          </Box>
        </Container>
      )}
    </Droppable>
  );
};
