
import { MainContainer } from '../styles'
import BarraLateral from '../containers/BarraLateral/BarraLateral'
import NovoContato from '../containers/NovoContato/NovoContato'

const Home = () => {
  return (
    <MainContainer>
        <BarraLateral/>
        <NovoContato/>
    </MainContainer>
  )
}

export default Home