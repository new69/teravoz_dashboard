import React from 'react';
import { cleanup, render, waitForElement, within } from '@testing-library/react';
import axiosMock from 'axios';

import App from './App';

describe('Test App component', () => {
  afterEach(cleanup);

  it('should render all active calls', async () => {
    const data = [{
      call_id: 123,
      type: 'call.new',
      their_number: '11987354966',
      our_number: '080000000'
    }];

    axiosMock.get.mockResolvedValueOnce({
      data: {
        data
      }
    });
    const { getByTestId, getAllByTestId } = render(<App />);
    const containerDiv = await waitForElement(() => getByTestId('app-container'));
    const phoneCall = await waitForElement(() => within(containerDiv).getAllByTestId('phone-call'));

    expect(phoneCall.length).toBe(data.length);
  });
});

