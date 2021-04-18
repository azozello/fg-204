let Exchange = {
  EUR: {
    USD: 1.20
  },
  USD: {
    EUR: 0.83
  }
};

const convert = async (from, to, amount) => {
  return Exchange[from] && Exchange[from][to] ? amount * Exchange[from][to] : amount
}

export {convert}