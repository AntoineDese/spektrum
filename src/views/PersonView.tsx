import React, { useState, useEffect } from "react";
import { getPeople } from "../api/people";
import styled from "styled-components";

const Container = styled.div`
  width: 1130px;
  height: 1200px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Button = styled.button`
  width: 224.3px;
  height: 54.88px;
  background: #35660e;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding: 0.5px 10px 0.5px 10px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 100%;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MyName = styled.p`
  width: 580px;
  height: 77px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 100%;
  color: #000000;
  padding-left: 21px;
  text-align: left;
`;

const FormName = styled.button`
  width: 236px;
  height: 90px;
  margin-left: 267px;
  margin-top: 10px;
  background: #40483a;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding: 0.5px 20px 0.5px 20px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 100%;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const OuterContainer = styled.div`
  height: 739.83px;
  width: 800px;
  border-radius: 500px 60px 300px 100px;
  background-color: #c1c1c1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  align-content: center;
  `

const InnerContainer = styled.div`
  width: 534px;
  height: 383px;
  background: url("https://picsum.photos/534/383");
  border-radius: 200px 20px 100px 50px;
  background-color: lightgrey;
  margin-top: 100px;
  `

const ButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StarwarsDataContainer = styled.div`
  width: 100%;
  
`
const NameContainer = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 50px;
line-height: 61px;
text-align: center;
color: #000000;
margin-top: 26.39px;
margin-bottom: 10px;
text-align: center;

`
const AgeAndEyeContainer = styled.p`
font-family: 'Inter';
font-style: italic;
font-weight: 100;
font-size: 20px;
line-height: 24px;
color: #000000;
margin: 0;
text-align: left;
padding-left: 226px;
`

type PeopleData = { name: string; eye: string; birthYear: string };
type StarWarsData = { starname: string; created: string; vehicles: string };
type Props = {
  setStarwars: (starwars: string[]) => void;
  setLoggedIn: (loggedIn: boolean) => void;
};

export const PersonView = (props: Props) => {
  const [count, setCount] = useState<number>(1);
  const [name, setName] = useState<PeopleData["name"]>("");
  const [birthYear, setBirthYear] = useState<PeopleData["birthYear"]>("");
  const [eye, setEye] = useState<PeopleData["eye"]>("");

  const [created, setCreated] = useState<StarWarsData["created"]>("");
  const [vehicles, setVehicles] = useState<StarWarsData["vehicles"]>("");
  const [starname, setStarname] = useState<StarWarsData["starname"]>("");

  useEffect(() => {
    getPeople(count)
      .then((data) => {
        setName(data.name);
        setBirthYear(data.birth_year);
        setEye(data.eye_color);
        setCreated(data.created);
        setVehicles(data.vehicles);
        setStarname(data.name);
      })
      .catch((error) => console.error(error));
  }, [count]);

  const starwars: string[] = [created, vehicles, starname];

  //console.log(starwars);

  //console.log("name to ", name);
  //console.log("birthYear to ", birthYear);
  //console.log("eyecolor to ", eye);

  return (
    <Container>
      <MyName>Jakub Kosowski</MyName>
      <FormName
        onClick={() => {
          props.setStarwars(starwars);
          props.setLoggedIn(false);
        }}
      >
        Formularz rejestracyjny
      </FormName>
      <PhotoContainer>
        <OuterContainer>
          <InnerContainer>
            
          </InnerContainer>
          <StarwarsDataContainer><NameContainer>Name: {name}</NameContainer>
          <AgeAndEyeContainer>age: {birthYear}</AgeAndEyeContainer>
          <AgeAndEyeContainer>eye color: {eye}</AgeAndEyeContainer>
          </StarwarsDataContainer>
        </OuterContainer>
      </PhotoContainer>
      <ButtonContainer>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next profiles
        </Button>
      </ButtonContainer>
    </Container>
  );
};
