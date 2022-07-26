import fs from 'fs-extra';

const heightIsValid = function (height: number): boolean {
  var h: number = +height;
  if (h) {
    return true;
  }
  return false;
};

const WidthIsValid = function (width: number): boolean {
  var w: number = +width;
  if (w) {
    return true;
  }
  return false;
};
const validateImageExsits = function (image_name: string): boolean {
  const path = './images/' + image_name + '.jpg';
  if (fs.existsSync(path)) {
    return true;
  }
  return false;
};

const validateResizedImageExsits = function (
  image_name: string,
  width: number,
  height: number
): boolean {
  const resized_image_name: string = image_name + '_' + width + '_' + height;
  const path = './images/resized_images/' + resized_image_name + '.jpg';
  if (fs.existsSync(path)) {
    return true;
  }
  return false;
};

export default {
  heightIsValid,
  WidthIsValid,
  validateImageExsits,
  validateResizedImageExsits,
};
