import React, { Component } from 'react'

import { Container, TypeDescription, TypeImage, TypeTile, RequestButton, RequestButtonText } from './styles'

import uberx from '../../assets/uberx.png'

export default class Details extends Component {
  render () {
    return (
      <Container>
        <TypeTile>Popular</TypeTile>
        <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

        <TypeImage source={ uberx }/>
        <TypeTile>UberX</TypeTile>
        <TypeDescription>R$6,00</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
        </RequestButton>
      </Container>
    )
  }
}