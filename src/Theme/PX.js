import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';

export const PX = value => {
  let ratio = PixelRatio.get();
  // console.log('ratio :::::', ratio);
  let size = value / ratio;
  // console.log('Size ::', size);
  return PixelRatio.getPixelSizeForLayoutSize(size);
};
