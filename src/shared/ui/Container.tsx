'use client';

import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};
`;

export default Container;
