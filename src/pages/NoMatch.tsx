import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NoMatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NoMatch = () => (
  <NoMatchWrapper>
    <h2>Nothing to see here</h2>
    <Link to='/'>Go to the home page</Link>
  </NoMatchWrapper>
)

export default NoMatch