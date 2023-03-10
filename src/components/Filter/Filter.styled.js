import styled from 'styled-components';

export const FilterInput = styled.input`

  width: 350px;
  padding: ${p => p.theme.space[3]}px;
  margin: 0 auto;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: ${p => p.theme.radii.normal};
  :focus,
  :hover {
    border-color: ${p => p.theme.colors.accentColor};
    outline: none;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: 8px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;