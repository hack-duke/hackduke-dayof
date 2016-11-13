import React from 'react'
import classes from './Speakers.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import SpeakersElement from 'components/SpeakersElement'
import { Col, Row } from 'react-bootstrap'

let talkTitles = ['DEVELOPING NEW TECHNOLOGIES', 'DEVELOPING NEW TECHNOLOGIES', 'DEVELOPING NEW TECHNOLOGIES']
let talkTimes = ['Sunday Nov 20, 10:00 am', 'Sunday Nov 20, 10:00 am', 'Sunday Nov 20, 10:00 am']
let talkLocations = ['Schiciano Auditorium', 'Schiciano Auditorium', 'Schiciano Auditorium']
let talkSpeakers = ['YU ZHOU LEE', 'YU ZHOU LEE', 'YU ZHOU LEE']
let talkText = ['is a software engineer @ twitter and a cool person who basically founded hackduke. he works in san francisco. More text here i dont konw how long their blurb will be but i will keep typing to fill up space yay yu zhou yu hzou is awesome and coming again even though he came like two weeks ago does he even work let me know.',
'is a software engineer @ twitter and a cool person who basically founded hackduke. he works in san francisco. More text here i dont konw how long their blurb will be but i will keep typing to fill up space yay yu zhou yu hzou is awesome and coming again even though he came like two weeks ago does he even work let me know.',
'is a software engineer @ twitter and a cool person who basically founded hackduke. he works in san francisco. More text here i dont konw how long their blurb will be but i will keep typing to fill up space yay yu zhou yu hzou is awesome and coming again even though he came like two weeks ago does he even work let me know.']

class Speakers extends React.Component {

  render () {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
            SPEAKERS
          </div>
          <h3 className={classes.header}>HEALTH</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  {talkTitles.map((title, index) => {
                    return <SpeakersElement title={title} key={index}
                      time={talkTimes[index]}
                      location={talkLocations[index]}
                      speaker={talkSpeakers[index]}
                      text={talkText[index]} />
                  }
                  )}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  {talkTitles.map((title, index) => {
                    return <SpeakersElement title={title} key={index}
                      time={talkTimes[index]}
                      location={talkLocations[index]}
                      speaker={talkSpeakers[index]}
                      text={talkText[index]} />
                  }
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Speakers

