import { useEffect, useState } from "react";
import { Container, BoxRight, BoxLeft, FooterGrid } from "./styles";
import { MyTeams } from "../../Components/MyTeams";
import api from "../../Helper/Api";
import { TopFive } from "../../Components/Top5";
import { Player } from "../../Components/Player";
import ReactTooltip from "react-tooltip";
import { Footer } from "../../Components/Footer";
export const HomeScreen = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getTeams();
    getPlayers();
    ReactTooltip.rebuild();
  }, []);

  const deleteTeam = async (team) => {
    await api.deleteTeam(team);
    getTeams();
  };

  const getTeams = async () => {
    const teamsCopy = await api.getTeams();
    setTeams(teamsCopy);
  };

  const getPlayers = async () => {
    const players = await api.getPlayers();
    setPlayers(players);
  };

  return (
    <Container>
      <BoxLeft>
        <MyTeams data={teams} deleteTeam={deleteTeam} />
      </BoxLeft>

      <BoxRight>
        <TopFive data={teams} />
        <Player teams={teams} players={players} />
      </BoxRight>
      <FooterGrid>
        <Footer />
      </FooterGrid>
    </Container>
  );
};
