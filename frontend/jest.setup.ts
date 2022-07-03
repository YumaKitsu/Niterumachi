import '@testing-library/jest-dom';
import * as fetch from "node-fetch";

import { server } from './src/mocks/server'
// Establish API mocking before all tests.
beforeAll(() => {
    server.listen()
    server.printHandlers()
})

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

module.exports = {
    moduleDirectories: [
        'node-modules',
        'utils'
    ]
}