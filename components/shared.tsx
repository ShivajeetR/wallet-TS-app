/* eslint-disable @typescript-eslint/no-unused-vars */

import {Dimensions} from 'react-native';
import {colors} from './colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;
