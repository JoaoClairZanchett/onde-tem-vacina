import React from 'react';
import DayCard from '../DayCard';

import { Container } from './styles';

const RightBar: React.FC = () => {
  return (
    <Container>
      <DayCard/>
    </Container>
  );
}

export default RightBar;