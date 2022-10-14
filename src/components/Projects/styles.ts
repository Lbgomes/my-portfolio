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
`
export const SliderContainer = styled.div`
  width: 100% !important;
  z-index: 20;
`
export const CardContainer = styled.div`
  width: 100%;
  display: flex !important;
  padding: 5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  gap: 1rem;
  @media (min-width: 768px) {
    padding: 11rem;
  }
`

export const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 30%;
  background-color: rgb(247 171 10 / 0.1);
  left: 0px;
  height: 500px;
  transform: translate(0, 0) rotate(-12deg) skewX(-12deg) skewY(0) scaleX(2)
    scaleY(1);
`
export const ImageContainer = styled.div`
  position: relative;
  width: 422px;
  aspect-ratio: 832/555;
`
