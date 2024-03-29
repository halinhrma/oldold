import styled from 'styled-components'
import { breakpoints } from '../styles/variables';

const Container = styled.div`
	${props => props.top ? `margin-top: ${props.top * 8}px` : ''};
	${props => props.bottom ? `margin-bottom: ${props.bottom * 8}px` : ''};
	${props => props.left ? `margin-left: ${props.left * 8}px` : ''};
	${props => props.right ? `margin-right: ${props.right * 8}px` : ''};

	${props => props.width === 'lg' ? 'max-width: 640px' : ''};
	${props => props.contain ? 'max-width: 1216px; padding: 0 32px; margin: 0 auto' : ''};
	${props => props.fullPage ? 'padding: 0 64px' : ''};

	${props => props.bgColor ? `background-color: ${props.bgColor}` : ''};

	@media (max-width: ${breakpoints.sm}) {
		${props => props.fullPage ? 'padding: 0 32px' : ''};
	}
`

export default Container
