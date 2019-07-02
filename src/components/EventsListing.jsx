import React, {Component} from 'react'
import {
  Hero,
  Layout,
  Listing,
  Wrapper,
  Title,
  Heading,
  Section,
  Narrow,
  Page,
  Thirds,
  ThirdCol,
  StandardIcon,
  SimpleHeader,
  PaddedCol,
} from './'

import EventItem from './EventItem'

class EventsListing extends Component {
  state = {
    filter: 'future',
  }

  render() {
    const {
      events, title
    } = this.props
    const { filter } = this.state
    const yesterday = new Date(Date.now() - 864e5)
    const sortedEvents = events.edges
      .sort((a, b) => {
        if (filter == 'future') {
          return new Date(a.node.data.date_from) - new Date(b.node.data.date_from)
        }
        return new Date(b.node.data.date_from) - new Date(a.node.data.date_from)
      })
      .filter(e => {
        if (filter == 'future') {
          return new Date(e.node.data.date_from) > yesterday
        }
        return new Date(e.node.data.date_from) < yesterday
      })
    console.log({ sortedEvents })
    return (        
      <Section flexible bg="white" color="black">
          <Page>
            { title &&
              <Narrow>
                <Heading
                  size={3}
                  color="white"
                  bg="sky"
                  text={title}
                />
              </Narrow>
            }
            {sortedEvents.map(event => (
              <EventItem event={event} />
            ))}
          </Page>
      </Section>
    )
  }
}

export default EventsListing