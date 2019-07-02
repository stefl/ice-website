import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"
import Cocktail from '../../svgs/icons/black/Cocktail.svg'
import Global from '../../svgs/icons/black/Global.svg'
import Cutlery from '../../svgs/icons/black/Cutlery.svg'
import Location from '../../svgs/icons/black/Location.svg'
import Bus from '../../svgs/icons/black/Bus.svg'
import Img from 'gatsby-image'
import dateFormat from 'dateformat'

const SkySpan = styled.span`
  ${tw`text-sky`};
`

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-gap: 2rem;
  width: 100%;
  border-top: 1px solid;
  ${tw`border-black pt-4`};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const RoundedDiamond = styled.div`
  border-radius: 24px;
  transform: rotate(-45deg) scale(0.533);
  overflow: hidden;
  width: 320px;
  height: 320px;
`

const RoundedImg = styled(Img)`
  transform: rotate(45deg) scale(1.406);
`

const DiamondHolder = styled.div`
  transform: translate(32px, -32px);
  overflow: hidden;
`

const EventIcon = styled.div`
  ${tw`w-24 m-auto`};
`

class EventItem extends Component {
  render() {
    const { event } = this.props
    let Icon
    switch (event.node.data.event_type) {
      case 'Annual trip':
        Icon = Global
        break
      case 'Mini-trip':
        Icon = Bus
        break
      case 'Local event':
        Icon = Global
        break
      case 'ICE feast':
        Icon = Cutlery
        break
      case 'ICE party':
        Icon = Cocktail
        break
    }
    return (
      <EventGrid>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
            <EventIcon>
              <Icon />
            </EventIcon>
          </div>
          {event.node.data.image && event.node.data.image.localFile && event.node.data.image.localFile.childImageSharp && (
            <DiamondHolder>
              <RoundedDiamond>
                <RoundedImg resolutions={event.node.data.image.localFile.childImageSharp.resolutions} />
              </RoundedDiamond>
            </DiamondHolder>
          )}
        </div>
        <div>
          <h2>{event.node.data.title.text}</h2>
          {(event.node.data.rough_date && event.node.data.rough_date.text) ?
            <h3><SkySpan>{event.node.data.rough_date.text}</SkySpan></h3>
          :
            <h3>
              <SkySpan>{dateFormat(event.node.data.date_from, 'd mmm ‘yy')}</SkySpan>
              {event.node.data.date_to &&
                event.node.data.date_to !== event.node.data.date_from && (
                  <SkySpan> – {dateFormat(event.node.data.date_to, 'd mmm ‘yy')}</SkySpan>
                )}
            </h3>
          }
          <div
            dangerouslySetInnerHTML={{
              __html: event.node.data.description.html,
            }}
          />
        </div>
      </EventGrid>
    )
  }
}

export default EventItem