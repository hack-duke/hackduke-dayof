import React from 'react'
import classes from './EventInfo.scss'
import { Col, Row } from 'react-bootstrap'
import EventInfoSection from 'components/EventInfoSection'
import AlertBubble from 'components/AlertBubble'
import DelimitedStackedInfo from 'components/DelimitedStackedInfo'
import { lighterGrey, acceptedBlue, shirtPink, shirtGray, shirtMaroon, shirtPurple } from 'extensions/colorUtils'

class EventInfo extends React.Component {

  render () {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.title}>
            EVENT INFO
          </div>
          <Row>
            <Col md={6}>
              <DelimitedStackedInfo header={'WIFI INFORMATION'}
                leftArray={['ssid: ']}
                rightArray={['HackDuke']}
                rightColor={acceptedBlue}
                alignment={'center'} />
              <DelimitedStackedInfo header={'SHIRT COLOR LEGEND'}
                leftArray={['pink: ', 'gray: ', 'maroon: ', 'purple: ']}
                rightArray={['organizer', 'volunteer', 'sponsor/mentor', 'hacker']}
                rightColors={[shirtPink, shirtGray, shirtMaroon, shirtPurple]}
                // rightColor={shirtPink}
                alignment={'center'} />
              <EventInfoSection header={'DEVPOST'}
                text={'View prizes and submit your hacks to devpost by 1:30 PM on Sunday, 11/20!'}
                linkText={'HACKDUKE-2016.DEVPOST.COM'}
                url={'https://hackduke-2016.devpost.com'} />
              <DelimitedStackedInfo header={'EMERGENCY CONTACTS'}
                leftArray={['911 ', '919-684-2444 ', '240-778-4399 ', '510-730-0186 ', '913-748-1682 ', '254-716-0605 ']}
                rightArray={['| Duke Police (emergency)', '| Duke Police', '| Yoon Ko', '| Yixin Lin', '| Michelle Chen', '| Harvey Shi']}
                rightColor={lighterGrey}
                alignment={'center'} />
            </Col>
            <Col md={6}>
              <EventInfoSection header={'SLACK'}
                text={'Slack will be used for announcements, team formation, and mentorship.'}
                linkText={'HACKDUKE16.SLACK.COM'}
                url={'https://hackduke16.slack.com'} />
              <AlertBubble firstText={'Need mentorship during the event?'}
                secondText={'Direct message '}
                boldText={'@mentorbot'}
                thirdText={' on Slack to pair up with a mentor!'} />
              <EventInfoSection header={'HARDWARE'}
                text={'Check out hardware at Telcom. Log in to see what\'s available and what you\'ve checked out.'}
                linkText={'MY.HACKDUKE.ORG'}
                url={'https://my.hackduke.org'} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default EventInfo
