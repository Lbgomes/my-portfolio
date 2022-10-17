import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 100%;
  justify-content: space-evenly;
  margin: 0 auto;
  align-items: center;
  z-index: 0;
  background: #242424;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 832px;
  aspect-ratio: 832/555;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin: 0 5% 5rem;
`
export const TextContainer = styled.div`
  color: #fff;
`

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
`
export const Content = styled.p`
  font-size: 1.125rem;
`
