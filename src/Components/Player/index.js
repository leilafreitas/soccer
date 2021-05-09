import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Line,
  Photos,
  Middle,
  Cicle,
  Titles,
  Percent,
} from "./styled";

import Avatar3 from "../../assets/avatar3.png";
import Avatar1 from "../../assets/avatar1.png";

export const Player = ({ teams, players }) => {
  const [mostPopular, setMostPopular] = useState({});
  const [lastPopular, setLastPopular] = useState({});

  useEffect(() => {
    setMostAndLess();
  }, [players]);

  const getNumberOnTeamsForPlayer = (playerId) => {
    let quantity = 0;
    teams.forEach(
      (team) =>
        (quantity =
          quantity +
          team.players.filter((player) => player.playerId === playerId).length)
    );
    return quantity;
  };

  const setPercentPlayers = () => {
    const playersQuantityTeams = players.map((player) => ({
      ...player,
      percent:
        (getNumberOnTeamsForPlayer(player.playerId) / teams.length) * 100,
    }));
    return playersQuantityTeams;
  };

  const setMostPicked = (lista) => {
    const ordenateH = lista.sort((x, y) => y.percent - x.percent)[0];
    setMostPopular(ordenateH);
  };

  const setLestPicked = (lista) => {
    const ordenateL = lista.sort((x, y) => x.percent - y.percent)[0];
    setLastPopular(ordenateL);
  };

  const setMostAndLess = () => {
    const playersWithPercent = setPercentPlayers();
    setMostPicked(playersWithPercent);
    setLestPicked(playersWithPercent);
  };

  return (
    <Container>
      <Box type="left">
        <Titles>Most Picked Player</Titles>
        <Photos type="left">
          <img src={Avatar3} />
          {mostPopular && (
            <Percent>
              {" "}
              <span>{mostPopular.percent}%</span>
            </Percent>
          )}
        </Photos>
      </Box>
      <Middle>
        <Line />
        <Cicle />
      </Middle>
      <Box type="right">
        <Titles>Less Picked Player</Titles>
        <Photos type="right">
          <img src={Avatar1} />
          {lastPopular && (
            <Percent>
              {" "}
              <span>{lastPopular.percent}%</span>
            </Percent>
          )}
        </Photos>
      </Box>
    </Container>
  );
};
