import * as React from 'react'
import injectSheet from 'react-jss'
import {VelocityTransitionGroup} from 'velocity-react'
import Stroke from "../../components/Page/Stroke";
import Section from "../../components/Section/Section";
import SplitContent from "../../components/SplitContent/SplitContent";

import { Element } from 'react-scroll'
import SmallTestimonial from "../../components/SocialProof/smallTestimonial";

const styles = {
  discover: {

  },
  text: {
    margin: '48px 0',
    fontSize: '1.3rem',
    lineHeight: '1.5',
    fontWeight: '300',
    "& > p": {
      color: '#999',
      "& > strong": {
        color: '#409FBD'
      }
    }
  }
}

interface DiscoverProps {
  classes?: any
}

class Discover extends React.Component<DiscoverProps, {}> {
  render() {
    const { classes: c } = this.props;

    return (
      <Element name="discover" className={c.discover}>
        <Section>
          <Stroke title={"Discover the Features"}>
            <SplitContent
              textTitle={"Find everything in one central app"}
              textParagraphs={
                <div className={c.text}>
                  <p>
                    Stop wasting time searching for your documents.
                  </p>
                  <p>
                    HQ connects Dropbox, Drive, Gmail, Slack and all your other apps
                    and accounts in <strong>one central place</strong> to search
                    for documents. <strong>Instantly find</strong> what you’re
                    looking for, including attachments and shared files.
                  </p>
                  <SmallTestimonial
                    name={'Anne-Marie V.'}
                    sub={'Professor, UA'}
                    quote={'I love the ability to search across all my accounts in one go. So easy!'}
                    avatar={'anne_marie_v_thumb.jpeg'}
                    dark
                  />
                </div>
              }
              video={"https://player.vimeo.com/video/311425565"}
            />
          </Stroke>
          <Stroke dark>
            <SplitContent
              textTitle={"Organize one place and stay productive"}
              textParagraphs={
                <div className={c.text}>
                  <p>
                    Stop managing a gazillion different apps and accounts.
                  </p>
                  <p>
                    HQ unites <strong>all your documents</strong> so you have only <strong>one place to
                    organize</strong>. Quickly file recently created, shared and modified
                    documents as they appear in your feed. You can even re-organize
                    shared folders without impacting collaborators.
                  </p>
                  <SmallTestimonial
                    name={'Julie B.'}
                    sub={'Lawyer, Du Moulin & Partners'}
                    quote={'HQ helps me organize the endless sea of documents coming in.'}
                    avatar={'julie_b_thumb.jpg'}
                  />
                </div>
              }
              video={"https://player.vimeo.com/video/311425591"}
              reverse
            />
          </Stroke>
          <Stroke>
            <SplitContent
              textTitle={"Work efficiently and get more done"}
              textParagraphs={
                <div className={c.text}>
                  <p>
                    Stop breaking your workflow with endless tab-switching.
                  </p>
                  <p>
                    HQ centralizes <strong>all your apps</strong> so you have only <strong>one place to start
                    working</strong>. Create new documents directly in My Library or use the
                    Activity Feed to continue on recent work and newly shared or
                    modified documents.
                  </p>
                  <SmallTestimonial
                    name={'Giles V.'}
                    sub={'Founder, Timeless whatsapp'}
                    quote={'HQ seamlessly fits in to how I work already. I highly recommend it.'}
                    avatar={'giles_v_thumb.jpeg'}
                    dark
                  />
                </div>
              }
              video={"https://player.vimeo.com/video/311425610"}
            />
          </Stroke>
        </Section>
      </Element>
    )
  }
}

export default injectSheet(styles)(Discover)
