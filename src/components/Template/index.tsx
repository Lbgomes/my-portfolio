import React from 'react'

import Image from 'next/future/image'
import Link from 'next/link'

import * as S from './styles'

type Contents = {
  project: {
    title: string
    content: string
  }
  role: {
    title: string
    content: string
  }
  Tech: {
    title: string
    content: string
  }
  Link: {
    title: string
    content: string
    link: string
  }
}
interface TemplateProps {
  image: string
  content: Contents
}
export default function Template({ image, content }: TemplateProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={image} alt="project" fill className="relative" />
      </S.ImageContainer>

      <S.GridContainer>
        <S.TextContainer>
          <S.Title>{content.project.title}</S.Title>
          <S.Content>{content.project.content}</S.Content>
        </S.TextContainer>
        <S.TextContainer>
          <S.Title>{content.role.title}</S.Title>
          <S.Content>{content.role.content}</S.Content>
        </S.TextContainer>
        <S.TextContainer>
          <S.Title>{content.Tech.title}</S.Title>
          <S.Content>{content.Tech.content}</S.Content>
        </S.TextContainer>
        <Link href={content.Link.link}>
          <S.TextContainer>
            <S.Title>{content.Link.title}</S.Title>
            <S.Content>{content.Link.content}</S.Content>
          </S.TextContainer>
        </Link>
      </S.GridContainer>
    </S.Container>
  )
}
