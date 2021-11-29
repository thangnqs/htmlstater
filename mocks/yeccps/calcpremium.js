const data = {
  age: '28',
  sex: 1,
  product_info: [
    { shohimCd: '10L', planCd: 'M1' },
    { shohimCd: '10L', planCd: 'M5' },
    { shohimCd: '10L', planCd: 'M3' },
    { shohimCd: '10L', planCd: 'M8' },
  ],
}

export default {
  post() {
    return [200, data]
  },
}
