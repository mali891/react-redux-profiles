export const splitString = (string, location, index) => string.toString().split(location)[index];

export const formatName = (name) => (
  name.toLowerCase().startsWith('mr') 
    ? splitString(name, ' ', 1) 
    : splitString(name, ' ', 0)
)


