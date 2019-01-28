export const splitString = (string, location, index) => string.toString().split(location)[index];

export const formatName = (name) => (
  name.toLowerCase().startsWith('mr') ? `${name.split(' ')[1]}'s` : `${name.split(' ')[0]}'s`
)