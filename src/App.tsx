import {  Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
  return (
    <Grid padding={4}  templateAreas={{
      base: '"nav" "main"',
      md: '"nav nav" "aside main"',
    }}>
      <Show above='md'>
        <GridItem area='aside' >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='nav'  >
        <NavBar />
      </GridItem>
      <GridItem area='main' >
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
