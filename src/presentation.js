/* eslint jsx-a11y/accessible-emoji: 0 */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  ListItem,
  List,
  Image,
  Slide,
  Text,
  Heading,
  CodePane,
  Code,
  Link,
} from 'spectacle';

// Spectacle Theme & Layout components
import { theme, colors, size } from './theme';
import * as Layout from './layout';
import Timeline from './timeline';

// Prism plugins
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-graphql';

// Server & client code samples
import * as hoc from './code/hoc';
import * as renderProp from './code/render-prop';

// Preload images
import preloader from 'spectacle/lib/utils/preloader';
import images from './images';

preloader(images);

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        contentWidth={1500}
        contentHeight={800}
        controls={false}
        progress="none"
        theme={theme}
      >
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <Image src={images.rocket} width="400px" />
            <Layout.Column>
              <Text
                margin="10px 0px 0px 30px"
                caps
                textSize={size.medium}
                textColor="primary"
                style={{ letterSpacing: '4px' }}
              >
                A journey through
              </Text>
              <Text
                margin="10px 0px 0px 30px"
                caps
                bold
                textSize={size.large}
                textColor="primary"
                style={{ letterSpacing: '7.5px' }}
              >
                React Apollo
              </Text>
            </Layout.Column>
          </div>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              alignSelf: 'center',
            }}
          >
            <Image src={images.spacePeggy} height="500px" />
            <Layout.Column>
              <Text margin="20px 0px 0px 0px" bold textColor="quartenary">
                @peggyrayzis
              </Text>
              <Text margin="20px 0px 0px 0px" textColor="primary">
                Open Source Engineer
              </Text>
            </Layout.Column>
          </div>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              alignSelf: 'center',
            }}
          >
            <Image src={images.spacePeggy} height="500px" />
            <Layout.Column>
              <Text margin="20px 0px 0px 0px" bold textColor="quartenary">
                @peggyrayzis
              </Text>
              <Text margin="20px 0px 0px 0px" textColor="primary">
                Time Traveling Astronaut
              </Text>
            </Layout.Column>
          </div>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.5}>
          <Timeline position="flex-start" />
        </Slide>
        <Slide>
          <Heading>What is Apollo Client?</Heading>
          <Image src={images.dataFlow} width="100%" />
        </Slide>
        <Slide bgColor="quartenary">
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            React Apollo manages updating React with the state of your GraphQL
            query.
          </Heading>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.5}>
          <Timeline position="flex-start" showLabel />
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <Heading>2016</Heading>
          <Layout.Row align="center">
            <Appear>
              <Image
                src={images.pokemon}
                height="500px"
                style={{
                  borderRadius: '6px',
                  maxWidth: '700px',
                }}
              />
            </Appear>
            <Appear>
              <Layout.Column align="center">
                <Image
                  src={images.css2016}
                  height="275px"
                  margin="30px"
                  style={{ borderRadius: '6px', maxWidth: '600px' }}
                />
                <Image
                  src={images.hocEverywhere}
                  height="350px"
                  margin="30px"
                  style={{ borderRadius: '6px' }}
                />
              </Layout.Column>
            </Appear>
            <Appear>
              <Image
                src={images.summedUp}
                height="400px"
                style={{
                  borderRadius: '6px',
                  maxWidth: '700px',
                }}
              />
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide>
          <CodePane
            theme="light"
            source={hoc.definition}
            lang="jsx"
            textSize="1.05em"
          />
        </Slide>
        <Slide>
          <Heading>graphql()</Heading>
          <Layout.Row>
            <CodePane
              theme="light"
              source={hoc.hocQuery}
              lang="jsx"
              textSize="1em"
            />
            <List style={{ maxWidth: '500px' }}>
              {[
                'Returns a HOC that binds your query to the wrapped component',
                'Map props to HOC options and map GraphQL data to props',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            As apps grow, the problems with higher order components become more
            apparent. 📈
          </Heading>
        </Slide>
        <Slide>
          <Heading>Prop indirection 🤷‍♀️</Heading>
          <CodePane
            theme="light"
            source={hoc.propIndirection}
            lang="jsx"
            textSize="1.05em"
          />
        </Slide>
        <Slide>
          <Heading>Static composition 😕</Heading>
          <Text textSize={size.small} margin="0px 0px 40px 0px">
            The graphql function is executed outside of React's render method,
            so you can't change its query based on props or state.
          </Text>
          <CodePane
            theme="light"
            source={hoc.noDynamic}
            lang="jsx"
            textSize="1.05em"
          />
        </Slide>
        <Slide>
          <Heading>Render props to the rescue!</Heading>
          <CodePane
            theme="light"
            source={renderProp.definition}
            lang="jsx"
            textSize="1.05em"
          />
        </Slide>
        <Slide>
          <Layout.Row align="center">
            <Text
              textColor="quartenary"
              margin="0px"
              bold
              textSize={size.medium}
              style={{ textAlign: 'left', flex: 1 }}
            >
              A render prop is a function that tells your component<br />what to
              render.
            </Text>
            <CodePane
              theme="light"
              source={renderProp.click}
              lang="jsx"
              textSize="1.2em"
              style={{ flex: 1 }}
            />
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Using render props isn't new.</Heading>
          <Layout.Row>
            <Layout.Column align="center">
              <Image
                margin="0px 70px 0px 0px"
                src={images.reactMotion}
                height="500px"
                style={{ borderRadius: '30px' }}
              />
              <Text margin="0px 70px 0px 0px">react-motion</Text>
            </Layout.Column>
            <Layout.Column align="center">
              <Image
                src={images.listView}
                height="500px"
                style={{ borderRadius: '30px' }}
              />
              <Text>React Native</Text>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Layout.Row align="center">
            <Image
              src={images.reactTraining}
              width="50%"
              style={{ alignSelf: 'center', flex: 1, borderRadius: '30px' }}
            />
            <Heading style={{ flex: 1 }}>
              React Router made render props mainstream.
            </Heading>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Render props + Apollo = 😍</Heading>
          <Layout.Row align="flex-end">
            <Layout.Column align="center">
              <Image src={images.khan} height="500px" />
              <Text textSize="1em">@BrianGenisio, Khan Academy</Text>
            </Layout.Column>
            <Layout.Column align="center">
              <Layout.Column align="center">
                <Image src={images.apolloTote} height="200px" />
                <Text margin="0px 0px 30px 0px" textSize="1em">
                  @peterpme, Orchard.ai
                </Text>
              </Layout.Column>
              <Layout.Column align="center">
                <Image src={images.alexey} height="275px" />
                <Text textSize="1em">@kureevalexey, Werkspot</Text>
              </Layout.Column>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.5}>
          <Timeline position="center" showLabel />
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <Heading>2018</Heading>
          <Layout.Row align="center">
            <Appear>
              <Image
                src={images.pokemon}
                height="500px"
                style={{
                  borderRadius: '6px',
                  maxWidth: '700px',
                }}
              />
            </Appear>
            <Appear>
              <Image
                src={images.css2018}
                height="600px"
                margin="30px"
                style={{ borderRadius: '6px', maxWidth: '600px' }}
              />
            </Appear>
            <Appear>
              <Image
                src={images.rpsEverywhere}
                height="350px"
                margin="30px"
                style={{ borderRadius: '6px' }}
              />
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            React Apollo 2.1:<br />
            New component API with render props 🎉
          </Heading>
        </Slide>
        <Slide>
          <Heading>Dynamic composition 😍</Heading>
          <CodePane
            theme="light"
            source={renderProp.dynamic}
            lang="jsx"
            textSize="1em"
          />
        </Slide>
        <Slide>
          <Heading>New mutation result handling</Heading>
          <CodePane
            theme="light"
            source={renderProp.mutation}
            lang="jsx"
            textSize="1.05em"
          />
        </Slide>
        <Slide>
          <Heading>No more prop indirection 🙌</Heading>
          <CodePane
            theme="light"
            source={renderProp.combined}
            lang="jsx"
            textSize=".9em"
          />
        </Slide>
        <Slide>
          <Heading>Compose with react-adopt</Heading>
          <CodePane
            theme="light"
            source={renderProp.adopt}
            lang="jsx"
            textSize=".9em"
          />
          <Text textSize={size.small} margin="0px 0px 20px 0px">
            Thanks @pedronauck!
          </Text>
        </Slide>
        <Slide>
          <Heading>react-apollo/test-utils</Heading>
          <Layout.Row>
            <CodePane
              theme="light"
              source={renderProp.testUtils}
              lang="jsx"
              textSize=".9em"
            />
            <Text
              textSize={size.small}
              style={{ width: '20%', alignSelf: 'center' }}
            >
              Check out @wesbos' Advanced React/GraphQL course coming 🔜!
            </Text>
          </Layout.Row>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            Our work isn't done yet! 💪
          </Heading>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.5}>
          <Timeline position="flex-end" showLabel />
        </Slide>
        <Slide>
          <Heading>Async rendering</Heading>
          <Layout.Row>
            <Layout.Column align="center" style={{ flex: 1 }}>
              <Image src={images.asyncRendering} height="700px" />
              <Text textSize={size.extraSmall}>Andrew Clark (@acdlite)</Text>
            </Layout.Column>
            <List margin="0px 0px 0px 30px" style={{ flex: 1 }}>
              {[
                'Rendering can be interrupted',
                'State updates can be prioritized',
              ].map(item => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Suspense 😱</Heading>
          <div style={{ width: '100%' }}>
            {[
              {
                emoji: '⏸',
                text: `Pause rendering a component while it's loading async data`,
              },
              {
                emoji: '🛁',
                text: `Bubble the pending promise up the tree to a placeholder`,
              },
              {
                emoji: '⏰',
                text: `If the request time exceeds a threshold, display fallback UI`,
              },
            ].map(({ emoji, text }) => (
              <Text
                key={text}
                textSize={size.small}
                style={{ lineHeight: 1.8 }}
              >
                <span style={{ marginRight: '40px' }}>{emoji}</span>
                {text}
              </Text>
            ))}
          </div>
          <Appear>
            <Image src={images.asyncApollo} margin="40px 0 0 0" width="100%" />
          </Appear>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <Image src={images.rocket} width="400px" />
            <Text
              margin="10px 0px 0px 30px"
              caps
              bold
              textSize={size.large}
              textColor="primary"
              style={{ letterSpacing: '7.5px' }}
            >
              Demo Time!
            </Text>
          </div>
        </Slide>
        <Slide>
          <Heading>React Apollo + Suspense</Heading>
          // insert recap/diagram here
        </Slide>
        <Slide>
          <Heading>The future of React Apollo</Heading>
          <List>
            {[
              'Avoiding a double pass render with async server-side rendering',
              'Ensuring a mutation completes before a page transition',
              'Unlocks the potential for an async Apollo cache',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            We're here to help you manage data in your React apps. 🚀
          </Heading>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              alignSelf: 'center',
            }}
          >
            <Image src={images.rocket} height="500px" margin="40px" />
            <Layout.Column>
              <Text bold textColor="quartenary">
                @peggyrayzis
              </Text>
              <Text bold textColor="primary">
                @apollographql
              </Text>
            </Layout.Column>
          </div>
        </Slide>
      </Deck>
    );
  }
}
