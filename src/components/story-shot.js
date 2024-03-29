import React from 'react'
import styled from 'styled-components'
import { breakpoints, textSizesStyles } from '../styles/variables'

const ShotWrapper = styled.div`
	margin-top: 24px;
	margin-bottom: 64px;
	${props => props.backgroundImage && `background-image: url(${props.backgroundImage})`};
	background-size: 100%;

	@media (max-width: ${breakpoints.sm}) {
		margin-top: 16px;
	}
`
const Image = styled.img`
	display: block;
`
const ImageWrapper = styled.div`
	max-width: 1280px;
	margin: 0 auto;
`
const ImageRow = styled.div`
  display: grid;
	grid-template-columns: repeat(${props => props.rows}, 1fr);
	grid-gap: 4px;

	@media (max-width: ${breakpoints.md}) {
		grid-gap: 4px;
	}
`
const ImageColumn = styled.div`
`
const Caption = styled.figcaption`
	max-width: 640px;
  ${textSizesStyles.sizeN1};
`
const CaptionWrapper = styled.div`
	margin: 16px auto 0 auto;
	max-width: 1280px;

	@media (max-width: ${breakpoints.md}) {
		margin: 16px auto 0 auto;
	}
`

const StoryShot = (props) => {
	const srcListAmount = () => {
		if(props.srcList) {
			return props.srcList.length
		} else {
			return null
		}
	}

	return(
		<ShotWrapper className='ShotWrapper' srcList={props.srcList} backgroundImage={props.backgroundImage}>
			{props.src && (
				<ImageWrapper>
					<Image src={props.src} alt='hayk-an-design' noShadow={props.noShadow} />
				</ImageWrapper>
			)}

      <ImageRow rows={props.rows || srcListAmount()}>
        {props.srcList && props.srcList.map(( srcListItem, index ) => (
					<ImageColumn rows={props.rows || srcListAmount()} key={index}>
						<Image src={srcListItem} alt='hayk-an-design' noShadow={props.noShadow} />
					</ImageColumn>
        ))}
      </ImageRow>

			{props.caption
				? <CaptionWrapper>
					<Caption>
						{props.caption}
					</Caption>
				</CaptionWrapper>
				: null
			}
		</ShotWrapper>
	)
}

export default StoryShot
