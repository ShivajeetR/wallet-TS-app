import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

//custom components
import {colors} from '../components/colors';
import {Container} from '../components/shared';
import CardSection from '../components/Cards/CardSection';
import TransactionSection from '../components/Transactions/TransactionSection';

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

  const TransactionData = [
    {
      id: 1,
      amount: '-86.00',
      date: '14 Sept 2021',
      title: 'Taxi',
      subtitle: 'Uber Car',
      art: {
        background: colors.primary,
        icon: 'car',
      },
    },
    {
      id: 2,
      amount: '-236.00',
      date: '20 Sept 2021',
      title: 'Shopping',
      subtitle: 'Amazon',
      art: {
        background: colors.tertiary,
        icon: 'cart',
      },
    },
    {
      id: 3,
      amount: '-786.00',
      date: '14 Sept 2021',
      title: 'Travel',
      subtitle: 'Emirates',
      art: {
        background: colors.accent,
        icon: 'airplane',
      },
    },
  ];

  return (
    <HomeContainer>
      <StatusBar barStyle={'dark-content'} />
      <CardSection data={CardData} />
      <TransactionSection data={TransactionData} />
    </HomeContainer>
  );
};

export default Home;
