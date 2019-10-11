import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="kjpmj" name="김명진"/>);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<Profile username="kjpmj" name="김명진"/>);
    utils.getByText('kjpmj'); // kjpmj 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(김명진)') // (김명진) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/김/) // 정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
  });
});

