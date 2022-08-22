import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import Profile from '../Header/Profile';
import {ScreenWidth} from '../shared';

const SendMoneyItemContainer = styled.TouchableHighlight`
height: 130px;
width: ${ScreenWidth * 0.27}px
padding: 10px;
border-radius: 15px;
justify-content: space-around;
margin: 0px 10px 10px 0px;
`;

import {SendMoneyProps} from './types';

const SendMoneyItem: FunctionComponent<SendMoneyProps> = props => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.secondary}
      style={{backgroundColor: props.background}}
      onPress={() => {
        alert('Send Money!');
        <View>
          <Profile img={props.img} imgContainerStyle={{marginBottom: 10}} />
          <SmallText
            textStyles={{textAlign: 'left', color: colors.white, fontSize: 12}}>
            {props.name}
          </SmallText>
          <RegularText
            textStyles={{color: colors.white, textAlign: 'left', fontSize: 13}}>
            {props.amount}
          </RegularText>
        </View>;
      }}></SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
