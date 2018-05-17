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
  Notes,
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
          <Notes>
            You may not know this about me, but by night I'm actually a time
            traveling astronaut as you can see by my super official helmet.
            Today we're going to use my time traveling powers to take a journey
            through the past present and future of React Apollo. Who wants to
            come with me?
          </Notes>
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
          <Notes>
            This journey will start two years ago in 2016. Throughout this talk,
            we're going to travel back in time to learn where React Apollo came
            from and where it's headed. You're going to learn about why Apollo
            adoped popular patterns such as higher order components and render
            props for the React Apollo API. We're also going to discuss the
            future of React and how async rendering will allow for some exciting
            new features in React Apollo. Before we begin our journey, let's
            talk about Apollo Client and the problems it solves.
          </Notes>
          <Timeline position="flex-start" />
        </Slide>
        <Slide>
          <Notes>
            Data management in React is hard. There's a lot of concepts that you
            have to worry about in order to build a production ready data
            solution for React. The complexity of managing data in React has
            sparked hundreds of conference talks, including some on this very
            stage.
            <br />
            With Apollo Client, you suddenly don't have to worry about any of
            that because we take care of it for you. Just write a query for the
            data you need, bind it to your UI with a Query component, and we'll
            take care of all the hard parts of data management so you can focus
            on building UI.
            <br />
            Switching to Apollo Client doesn't mean you have to completely
            abandon everything that you've learned. React and GraphQL make
            really good partners. There's not another set of APIs that you have
            to learn - instead, we're just enhancing how you already build apps
            today.
          </Notes>
          <Heading>What is Apollo Client?</Heading>
          <Layout.Row>
            <Image src={images.reduceComplexity} width="65%" />
            <Image
              src={images.query}
              width="35%"
              style={{ borderRadius: '10px' }}
            />
          </Layout.Row>
        </Slide>
        <Slide bgColor="quartenary">
          <Notes>
            Not only do we take care of the data management piece, we help you
            keep up with all the latest trends in the react community with how
            you interact with your data. You've probably heard about how you can
            delete all your existing data management code by switching to Apollo
            - not only can you delete all your code, you can get on the hype
            train of render props and async rendering without having to
            implement these APIs yourself.
            <br />
            Just like React manages updating your UI, Apollo manages updating
            your data. The rest of this presentation will cover some xamples of
            how we're always trying to stay ahead of the game to make sure data
            management doesn't get in your way
            <br />
          </Notes>
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            Apollo manages updating<br />your data just like React manages
            updating your UI.
          </Heading>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.5}>
          <Notes>
            Now we're ready to embark on the first phase of our mission. First,
            we're going to travel back in time to 2016 to see where React Apollo
            came from and how that's influenced where it's heading.
            <br />
          </Notes>
          <Timeline position="flex-start" showLabel />
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <Notes>
            In case 2016 feels fuzzy in your mind, I prepared a couple images to
            jog your memory. Ok! The year is 2016. Everyone was running around
            trying to catch Pokemon on their smartphone. In the JavaScript
            community, everyone was up in arms about CSS in JS and higher order
            components were everywhere. 2016 was an interesting year, especially
            for us Americans post election day. You probably felt like this guy
            by the end.
          </Notes>
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
          <Heading>Declarative data fetching</Heading>
          <Notes>
            2016 was also the year we released the graphql function in React
            Apollo to declaratively fetch data and display it in your UI. The
            graphql function looked a lot like Redux connect. This was
            intentional. The first version of Apollo Client was based on Redux,
            so we wanted to make the API feel as familiar as possible for
            developers just getting their feet wet with GraphQL. What was so
            revolutionary about the graphql function is that it gave you all the
            benefits of connect without having to manually write action creators
            and reducers.
          </Notes>
          <Layout.Row>
            <CodePane
              theme="light"
              source={hoc.hocQuery}
              lang="jsx"
              textSize="1em"
            />
            <List style={{ maxWidth: '500px' }}>
              {[
                'Apollo made using GraphQL data just as easy as connecting a Redux store',
                'We replaced connect() with graphql() and eliminated all action creators and reducers',
              ].map(item => (
                <ListItem textSize="1.3em" key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Server-side rendering</Heading>
          <Notes>
            We also pioneered the double pass render, which still remains the
            most popular way to do server side rendering with data fetching in
            React. The getDataFromTree function takes your React tree,
            determines which queries are needed to render them, and then fetches
            them all. After we fetch the data, it's stored in the Apollo cache
            and we render the UI tree using the data we just fetched. The cool
            part about getDataFromTree is that it isn't Apollo specific, which
            makes it applicable to any library that has to execute a double pass
            render either for data fetching or styling.
          </Notes>
          <CodePane
            theme="light"
            source={hoc.ssr}
            lang="jsx"
            textSize="1.1em"
          />
        </Slide>
        <Slide>
          <Notes>
            One of the best features of Apollo client is that it intelligently
            normalizes and caches your data for you. You don't have to mess
            around with normalizr. So you understand what's going on under the
            hood, I'm going to try and demystify the Apollo cache's
            normalization process for you. First, we have our articles query.
            You'll also see we have our response payload, which comes back as
            the shape of the query, with the addition of a meta field called
            __typename which specifies the data's type. For each nested part of
            the query with a typename and id, we split those objects out into
            their own entry in the cache stored as a flattened map. Then, the
            cache reconstructs each query result from the flattened nodes in the
            cache. If this sounds a little complex, don't worry. You get this
            out of the box with Apollo Client without having to set it up
            yourself.
          </Notes>
          <Heading>Intelligent normalized cache</Heading>
          <Image
            src={images.normalization}
            width="100%"
            style={{ borderRadius: '6px', border: '15px solid #3a3c4b' }}
          />
        </Slide>
        <Slide>
          <Notes>
            Around 2017, the community was already coming up with cool new ways
            to connect their Apollo data to their UI. We saw the emergence of
            Query components, which used a render prop API over top of our
            graphql function API. We're about to get into render props, but
            here's a taste of how people at Khan Academy and other companies
            were already thinking about it back then.
          </Notes>
          <Heading>Driven by the community 🙌</Heading>
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
          <Notes>
            This brings us to the next point in our journey - 2018. The tide
            shifted from higher order components to render props, and so did we
            in order to ensure Apollo Client would work great with the rest of
            your React application.
          </Notes>
          <Timeline position="center" showLabel />
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.3}>
          <Notes>
            The year is 2018. Everyone's eating laundry detergent, the
            JavaScript community is still hotly debating CSS-in-JS and render
            props are everywhere. After drawing inspiration from the Apollo
            community and experimenting with render props ourselves, we finally
            released
          </Notes>
          <Heading>2018</Heading>
          <Layout.Row align="center">
            <Appear>
              <Image
                src={images.tidePod}
                height="600px"
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
                style={{ borderRadius: '6px' }}
              />
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide bgColor="quartenary">
          <Notes>
            React Apollo 2.1 officially in March. React Apollo 2.1 is completely
            backwards compatible - so you can migrate from the higher order
            component API incrementally - but introduces three new components in
            the mix for Query, Mutation, and Subscription. These new components
            feature a render prop API using a function as the component's child.
          </Notes>
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
          <Notes>
            I think one of the coolest things about the new render prop API is
            that a query is now just a component. You render it directly in your
            React tree just like you would for any ordinary piece of UI. This is
            in contrast to higher order components which despite the name are
            functions that we try to make behave like components. Since a query
            is just a component, you have full access to React's props and
            state. When composing multiple queries and mutations, you also know
            exactly which component your props are coming from.
          </Notes>
          <Heading>It's just a component.</Heading>
          <CodePane
            theme="light"
            source={renderProp.combined}
            lang="jsx"
            textSize=".9em"
          />
        </Slide>
        <Slide>
          <Notes>
            Switching to the render prop API not only better reflected how
            developers are building their apps today, but it also solved a lot
            of problems with higher order components at scale. Before,
            composition happened outside of the render method so you didn't have
            access to React state inside the graphql function. Now that a query
            is just a component, you have access to everything that makes React
            so dynamic.
            <br />
            When composing multiple higher order components, it sometimes became
            confusing to know which props came from which higher order
            components. Now, you don't have to memorize a higher order
            component's API to know where your props are coming from. Everything
            is explicit.
            <br />
            Finally, you're not subject to the naming collisions that inevitably
            arise when working with multiple higher order components. You can
            name the props of your wrapped component whatever you'd like.
            <br />
            These are just a few of the ways we're actively working to improve
            the developer experience surrounding data fetching. We love how
            forward thinking the React community is when adopting new patterns
            like render props, which inspires us to keep pushing the boundaries
            every day.
          </Notes>
          <Layout.Row>
            {[
              {
                header: 'Problem',
                items: [
                  'Static composition',
                  'Prop indirection',
                  `Naming collisions`,
                ],
              },
              {
                header: 'Solution',
                items: [
                  'Dynamic composition',
                  'Explicitly defined props',
                  `No collisions`,
                ],
              },
            ].map(({ header, items, time }) => (
              <div key={header} style={{ width: '46%' }}>
                <Text bold textColor="quartenary">
                  {header}
                </Text>
                {items.map(item => (
                  <Layout.Cell
                    color={colors.lightGrey}
                    margin="40px 0px 40px 0px"
                    key={item}
                  >
                    <Text textSize="1.7em">{item}</Text>
                  </Layout.Cell>
                ))}
              </div>
            ))}
          </Layout.Row>
        </Slide>
        <Slide bgColor="quartenary">
          <Notes>
            Even thought the render prop API was a huge leap forward, we're not
            done yet. We couldn't be more excited about all of the innovation
            happening in React with async rendering. I don't want to keep you in
            suspense any longer, so let's travel to our final stop in our
            journey: the future.
          </Notes>
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            Our work to improve managing data in React isn't done yet! 💪
          </Heading>
        </Slide>
        <Slide bgImage={images.starrySky} bgDarken={0.5}>
          <Notes>
            It's hard to say exactly what the next year will look like, but two
            things are for sure: we're all still going to be arguing about
            CSS-inJS, and that React suspense is the future.
          </Notes>
          <Timeline position="flex-end" showLabel />
        </Slide>
        <Slide>
          <Notes>
            Before we talk about what suspense is, let's first talk about async
            rendering in React. This diagram by Andrew Clark is a super helpful
            visualization to contrast the two. With the current synchronous
            rendering model, the render phase can't be interrupted until it's
            finished. With async rendering, the render phase can be interrupted
            at any point. We interrupt the render phase by throwing an
            exception. This allows React to pause the render of one component
            and switch to rendering another component if the update is a higher
            priority. The two most important things to keep in mind here is that
            with async, state updates can be paused and prioritized.
          </Notes>
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
          <Notes>
            Now that we've learned about async rendering, let's talk about how
            it enables React suspense. Suspense allows you to pause rendering a
            component while it's loading async data. You do this by throwing the
            promise that will eventually resolve to your data in the render
            method. It sounds a little strange the first time you see it, but
            it's what allows the promise to bubble up the tree until it's caught
            by a placeholder component. You'll pass a time in milliseconds for
            the promise to resolve. If the request time exceeds this threshold,
            we want to display our fallback UI. If not, display our data once
            the promise resolves.
            <br />
            <br />
            So we've actually built a version of React Apollo that's already
            compatible with suspense. Here's a code snippet from the canary we
            released two months ago, where we trigger an exception in the render
            method by throwing.
          </Notes>
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
          <Notes>
            Suspense is super cool but I think I can show you better than I can
            tell you. It's demo time.
          </Notes>
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
          <Image src={images.dog} width="100%" />
        </Slide>
        <Slide>
          <Heading>The future of React Apollo 🚀</Heading>
          <List>
            {[
              'Avoiding a double pass render with async server-side rendering',
              'Ensuring a mutation completes before a page transition',
              'Creating an async Apollo cache',
            ].map(item => (
              <Appear key={item}>
                <ListItem textSize={size.medium}>{item}</ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            We're here to help you manage data in your React apps.
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
