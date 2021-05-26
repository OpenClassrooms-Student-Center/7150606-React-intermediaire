import styled from 'styled-components'
import colors from '../../utils/style/colors'
import EmptyIllustration from '../../assets/empty.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const SubTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: normal;
`

const Illustration = styled.img`
  margin: 30px 0;
`

function EmptyList({ theme }) {
  return (
    <Container theme={theme}>
      <Title theme={theme}>Dommage...</Title>
      <Illustration src={EmptyIllustration} />
      <SubTitle theme={theme}>
        Il semblerait que vous n’ayez besoin d’aucune compétence
      </SubTitle>
    </Container>
  )
}

export default EmptyList
