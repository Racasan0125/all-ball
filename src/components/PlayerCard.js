import React from "react";

import styled from "styled-components";
import { teamHexFirstColors, teamHexSecondColors } from "../teamhexcolors";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import flipIcon from "../assets/flipIcon.png";

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 0.06rem;
  font-size: 1.2rem;

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FirstName = styled.h2`
  @media screen and (min-width: 600px) and (max-width: 1000px) {
    margin-bottom: 0.3rem;
  }
`;

const LastName = styled.h2`
  margin-left: 0.6rem;

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    margin-left: 0rem;
    margin-top: 0rem;
  }
`;

const TopFiveContainer = styled.div`
  flex: 1;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  text-align: center;
`;

const BackOfCardContainer = styled.div`
  white-space: nowrap;
`;

const FlipIcon = styled.img`
  bottom: 5px;
  display: block;
  filter: ${(props) =>
    props.teamAbbreviation !== "SAS" &&
    "invert(100%) sepia(0%) saturate(3167%) hue-rotate(130deg) brightness(95%) contrast(80%)"};
  height: 2rem;
  position: absolute;
  transform: scaleX(-1);
  right: 4px;
  width: 2rem;
  -webkit-transform: scaleX(-1);
  z-index: 10;
`;

const PointAndAssistContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (min-width: 600px) {
    font-size: 1.1rem;
  }
`;

const ReboundAndStealContainer = styled(PointAndAssistContainer)``;

const BlockContainer = styled(PointAndAssistContainer)``;

const BackSideStat = styled.h3`
  margin: 0.8rem 3rem;

  @media screen and (min-width: 600px) {
    margin: 0.8rem;
  }

  @media screen and (min-width: 950px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

const BackStatsContainer = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const FGContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FG3Container = styled(FGContainer)``;
const FTContainer = styled(FGContainer)``;
const RebContainer = styled(FGContainer)``;
const FoulAndTOContainer = styled(FGContainer)``;

function PlayerCard(props) {
  const teamAbbreviation = props.playerData.team.abbreviation;
  const playerCardColor = teamHexFirstColors[teamAbbreviation];
  const playerCardSecondColor = teamHexSecondColors[teamAbbreviation];
  const {
    pts,
    stl,
    ast,
    reb,
    blk,
    fg3a,
    fg3m,
    fga,
    fgm,
    fta,
    ftm,
    oreb,
    dreb,
    pf,
    turnover,
  } = props.playerData;

  return (
    <TopFiveContainer
      playerCardColor={playerCardColor}
      playerCardSecondColor={playerCardSecondColor}
      teamAbbreviation={teamAbbreviation}
    >
      <Flippy flipOnHover={false} flipOnClick={true} flipDirection="horizontal">
        <FrontSide
          className="frontAndBackCard"
          style={{
            background: playerCardColor,
            borderRadius: "2rem",
            border: `solid 0.35rem ${playerCardSecondColor}`,
            color: `${teamAbbreviation === "SAS" ? "#222" : "#fefefe"}`,
          }}
        >
          <FlipIcon
            teamAbbreviation={teamAbbreviation}
            src={flipIcon}
          ></FlipIcon>
          <NameContainer>
            <FirstName>{props.playerData.player.first_name} </FirstName>
            <LastName>{props.playerData.player.last_name}</LastName>
          </NameContainer>
          <PointAndAssistContainer>
            <h3>PTS: {pts}</h3>
            <h3>ASTS: {ast}</h3>
          </PointAndAssistContainer>
          <ReboundAndStealContainer>
            <h3>REBS: {reb}</h3>
            <h3>STLS: {stl}</h3>
          </ReboundAndStealContainer>
          <BlockContainer>
            <h3>BLKS: {blk}</h3>
          </BlockContainer>
        </FrontSide>
        <BackSide
          className="frontAndBackCard"
          style={{
            background: playerCardColor,
            borderRadius: "2rem",
            border: `solid 0.35rem ${playerCardSecondColor}`,
            color: `${teamAbbreviation === "SAS" ? "#222" : "#fefefe"}`,
            fontSize: "1.1rem",
          }}
        >
          <BackOfCardContainer>
            <FlipIcon
              teamAbbreviation={teamAbbreviation}
              src={flipIcon}
            ></FlipIcon>
            <BackStatsContainer>
              <FGContainer>
                <BackSideStat>FGA: {fga} </BackSideStat>
                <BackSideStat>FGM: {fgm}</BackSideStat>
              </FGContainer>
              <FG3Container>
                <BackSideStat>FG3A: {fg3a}</BackSideStat>
                <BackSideStat> FG3M: {fg3m}</BackSideStat>
              </FG3Container>
              <FTContainer>
                <BackSideStat>FTA: {fta} </BackSideStat>
                <BackSideStat>FTM: {ftm}</BackSideStat>
              </FTContainer>
              <RebContainer>
                <BackSideStat>OREB: {oreb} </BackSideStat>
                <BackSideStat>DREB: {dreb}</BackSideStat>
              </RebContainer>
              <FoulAndTOContainer>
                <BackSideStat>PF: {pf} </BackSideStat>
                <BackSideStat>TO: {turnover}</BackSideStat>
              </FoulAndTOContainer>
            </BackStatsContainer>
          </BackOfCardContainer>
        </BackSide>
      </Flippy>
    </TopFiveContainer>
  );
}

export default PlayerCard;
