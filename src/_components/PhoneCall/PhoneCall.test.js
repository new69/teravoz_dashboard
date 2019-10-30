import React from 'react';
import { cleanup, render, waitForElement } from '@testing-library/react';

import PhoneCall from './PhoneCall';

describe('Test PhoneCall component', () => {
  afterEach(cleanup);

  it('should render call information', async () => {
    const data = {
      'data-testid': 'phone-call',
      callId: '123',
      type: 'call.new',
      theirNumber: '11987354966',
      ourNumber: '080000000'
    };

    const { getByTestId, getByText } = render(<PhoneCall {...data} />);
    const phoneCall = await waitForElement(() => getByTestId('phone-call'));
    const callId = await waitForElement(() => getByText(`Call ID: ${data.callId}`));
    const type = await waitForElement(() => getByText(`Status: ${data.type}`));
    const theirNumber = await waitForElement(() => getByText(`Their number: ${data.theirNumber}`));
    const ourNumber = await waitForElement(() => getByText(`Our Number: ${data.ourNumber}`));

    expect(phoneCall.className).toEqual('phone-call');
    expect(callId).toBeDefined();
    expect(type).toBeDefined();
    expect(theirNumber).toBeDefined();
    expect(ourNumber).toBeDefined();
  });
});
