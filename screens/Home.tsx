import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

//custom components
import {colors} from '../components/colors';
import {Container} from '../components/shared';
import CardSection from '../components/Cards/CardSection';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

//card logos
import logo1 from './../assets/visa_white.png';
import logo2 from './../assets/mc.png';

const Home: FunctionComponent = () => {
  const CardData = [
    {
      id: 1,
      accountNo: '3845757744',
      balance: 2000.15,
      alias: 'Work Debit',
      logo: logo1,
    },
    {
      id: 2,
      accountNo: '3845753023',
      balance: 1450.73,
      alias: 'Personal Prepaid',
      logo: logo1,
    },
    {
      id: 3,
      accountNo: '3845737198',
      balance: 740.39,
      alias: 'School Prepaid',
      logo: logo2,
    },
  ];
  return (
    <HomeContainer>
      <StatusBar barStyle={'dark-content'} />
      <CardSection data={CardData} />
    </HomeContainer>
  );
};

export default Home;
