import React from 'react'
import Container from '../components/container'
import Text from '../components/text'
import Spacer from '../components/spacer'
import CustomLink from '../components/custom-link'
import ProjectsMenu from '../components/projects-menu'
import Dropdown from '../components/dropdown'
import Header from '../components/header'
import Animate from '../components/animate'
import styled from 'styled-components'
import { breakpoints } from '../styles/variables'

const ProjectContainer = styled.div`
  min-height: 70vh;
`

const SubtitleWrapper = styled.div`
  max-width: 664px;
`

const PageContainer = styled.div`
  padding: 0 64px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 0 32px;
	}
`

const ProjectsDropdownTrigger = () => {
  return(
    <CustomLink lineOnHover>Projects /</CustomLink>
  )
}

let getVisibleUrl = (url) => {
	let finalUrl

	if (url && url.includes('http://')) {
		finalUrl = url.replace('http://', '')
	} else if (url && url.includes('https://')) {
		finalUrl = url.replace('https://', '')
	} else {
		finalUrl = url
	}

	return finalUrl
}

const Project = (props) => {
	return(
    <div>
  		<ProjectContainer>
  			<Header />
  			<Spacer bottom={32} smBottom={16} />

        <Animate duration={0.8}>
    			<Container fullPage>
            <Spacer bottom={16} smBottom={8}>
      				<Spacer bottom={1}>
      					<Dropdown triggerContent={<ProjectsDropdownTrigger />}>
      						<Spacer top={1}>
      							<ProjectsMenu />
      						</Spacer>
      					</Dropdown>
      				</Spacer>

      				<Spacer bottom={2}>
      					<Text size='size3' weight='bold' tag='h1'>
									{props.title}
      					</Text>
								<SubtitleWrapper>								
                <Text size='size3' dimmed tag='h2'>
      						{props.subtitle}
      					</Text>
								</SubtitleWrapper>
      				</Spacer>

      				<Container width='lg'>
      					<Spacer bottom={2}>
      						<Text tag='p'>
      							{props.description}
      						</Text>
      					</Spacer>

                {props.role
                  ? <Spacer bottom={2}>
        							<Text dimmed>my role{props.inTeam ? ' (in team)' : ''}:</Text>
        							<Text>{props.role}</Text>
        					</Spacer>
                  : null
								}



                {props.contributors && (
									<Text dimmed>main contributors:</Text>
								)}
								
								{props.contributors && props.contributors.map(( contributor ) => (
									<Spacer>
										<CustomLink target='_blank' href={'https://github.com/' + contributor.githubUsername}>@{contributor.githubUsername}</CustomLink> — <Text tag='span' dimmed>{contributor.role}</Text>
									</Spacer>
								))}

                {props.link
                  ? <CustomLink href={props.link} target='_blank' lineOnHover={false} withArrow>{getVisibleUrl(props.link)}</CustomLink>
                  : null
								}
								
								{props.links && (
									<div>
										{props.links.map((item, index) => (
											<div>
												<CustomLink href={item} key={index} target='_blank' lineOnHover={false} withArrow>{getVisibleUrl(item)}</CustomLink>
												<br />
											</div>
										))}
									</div>
								)}
      				</Container>
            </Spacer>
    			</Container>

					{props.children}
					
					<PageContainer>
						<Spacer top={8} bottom={8}>
							<ProjectsMenu />
						</Spacer>
					</PageContainer>

        </Animate>
  		</ProjectContainer>

      <Spacer bottom={4}>
				<Header notFixed hideName hideProjects contactLabel='Contact' aboutLabel='About' dimmed />
			</Spacer>
    </div>
	)
}

export default Project
