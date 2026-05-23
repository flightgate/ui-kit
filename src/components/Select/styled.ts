import styled from 'styled-components/native';

interface StyledSelectTriggerProps {
  hasError?: boolean;
}

const StyledSelectTrigger = styled.TouchableOpacity<StyledSelectTriggerProps>`
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  border-width: ${({ theme, hasError }) =>
    hasError ? theme.borderWidths.md : theme.borderWidths.none}px;
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.colors.danger : theme.colors.transparent};
  padding-left: ${({ theme }) => theme.spacings.md}px;
  padding-right: ${({ theme }) => theme.spacings.md}px;
`;

export type { StyledSelectTriggerProps };
export { StyledSelectTrigger };
