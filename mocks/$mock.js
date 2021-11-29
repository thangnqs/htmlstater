import mockServer from 'axios-mock-server'
import mock0 from './yeccps/calcpremium'

export default (client) =>
  mockServer(
    [
      {
        path: '/yeccps/calcpremium',
        methods: mock0,
      },
    ],
    client,
    ''
  )
