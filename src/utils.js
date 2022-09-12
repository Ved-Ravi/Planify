import {Dimensions, Platform} from 'react-native';

const standardWidth = 375.0;
const standardHeight = 667.0;
const {height, width} = Dimensions.get('window');

export const screenHeight = height;
export const screenWidth = width;

export function widthScale(dimensions) {
  return (dimensions / standardWidth) * width;
}

export function heightScale(dimensions) {
  return (dimensions / standardHeight) * height;
}
