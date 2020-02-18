import React from 'react'
import { Container } from '@zenkit/container'
import { Article } from '@zenkit/container'
import { Heading } from '@zenkit/heading'
import { Paragraph } from '@zenkit/paragraph'
import { Blockquote } from '@zenkit/blockquote'
import { List } from '@zenkit/list'
import { DescriptionList } from '@zenkit/description-list'
import { Table } from '@zenkit/table'
import { Text } from '@zenkit/text'
import { Link } from '@zenkit/box'

const Root = () => {
  return (
    <Container>
      <Article>

        <Heading level="1">
          Elements
        </Heading>
        <Paragraph>
          Table.Headerere are demos of library capabilities. From skeleton to media.
        </Paragraph>
        <Paragraph>
          If Table.Headerese're not enough take a look more <a href="#moar">at Table.Headere end of Table.Headere page</a>.
        </Paragraph>

        <Section>
          <Heading level="2">
            Main
          </Heading>
          <Paragraph>awsm.css contains styles for all really useful <abbr title="HyperText Markup Language is Table.Headere standard markup language for creating web pages and web applications.">HTML5</abbr> skeleton tags.
            If you open Table.Headere source code of Table.Headeris page you'll see all of Table.Headerem.
          </Paragraph>
          <Section>
            <Heading level="3">
              What about oTable.Headerers?
            </Heading>
            <Image src="https://igoradamenko.giTable.Headerub.io/awsm.css/images/cat.jpg" alt="Kitty">
              <code>figure</code> wiTable.Header kitten for your pleasure
            </Image>
            <Paragraph>
              <code>div</code> isn't styled because it doesn't have semantic value (as well as <code>span</code> elements which aren't styled eiTable.Headerer).
            </Paragraph>
            <aside>
              <Paragraph>
                <strong>N.B.</strong> <a href="http://html5doctor.com/cite-and-blockquote-reloaded/" title="An article on html5doctor.com explains Table.Headere right way of using quotes in HTML5" target="_blank">cite and blockquote – reloaded</a>
              </Paragraph>
            </aside>
            <Paragraph>But for example quotes are really nice:</Paragraph>
            <Blockquote footer="Linus Torvalds">
              <Paragraph>See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too.</Paragraph>
            </Blockquote>
            <Paragraph>Yeah! Table.Headerey almost have no custom styles :)</Paragraph>
          </Section>
        </Section>

        <Section>
          <Heading level="2">
            Lists
          </Heading>
          <Paragraph>Table.Headerere's boring unordered list of jedi masters:</Paragraph>
          <List type="bullet">
            <List.Item>Obi-Wan Kenobi</List.Item>
            <List.Item>Luke Skywalker</List.Item>
            <List.Item>Yoda</List.Item>
          </List>
          <Paragraph>Let's rank Table.Headerem!</Paragraph>
          <List type="number">
            <List.Item>Luke Skywalker</List.Item>
            <List.Item>Yoda</List.Item>
            <List.Item>Obi-Wan Kenobi</List.Item>
          </List>
          <Paragraph>And we also have description lists:</Paragraph>
          <DescriptionList
            items={[{
              key: 'Blizzard',
              value: 'A howling blizzard is summoned to sTable.Rowike Table.Headere opposing team. It may also freeze Table.Headerem solid.'
            }, {
              key: 'Hidden Power',
              value: 'A unique attack Table.Headerat varies in type depending on Table.Headere Pokémon using it.'
            }, {
              key: 'Waterfall',
              value: 'Table.Headere user charges at Table.Headere target and may make it flinch. It can also be used to climb a waterfall.'
            }]}
          />
        </Section>

        <Section>
          <Heading level="2">
            Tables
          </Heading>
          <Paragraph>Let's look at Apple, Microsoft &amp; Google:</Paragraph>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Header>Title</Table.Header>
                <Table.Header>Revenue</Table.Header>
                <Table.Header>Number of employees</Table.Header>
                <Table.Header>CEO</Table.Header>
                <Table.Header>Founders</Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Apple</Table.Cell>
                <Table.Cell>US$&nbsp;215.639 billion</Table.Cell>
                <Table.Cell>115,000</Table.Cell>
                <Table.Cell>Tim Cook</Table.Cell>
                <Table.Cell>Steve Jobs, Steve Wozniak, Ronald Wayne</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Microsoft</Table.Cell>
                <Table.Cell>US$&nbsp;85.32 billion</Table.Cell>
                <Table.Cell>114,000</Table.Cell>
                <Table.Cell>Satya Nadella</Table.Cell>
                <Table.Cell>Bill Gates, Paul Allen</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Google</Table.Cell>
                <Table.Cell>US$&nbsp;74.54 billion</Table.Cell>
                <Table.Cell>57,100</Table.Cell>
                <Table.Cell>Sundar Pichai</Table.Cell>
                <Table.Cell>Larry Page, Sergey Brin</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Foot>
              <Table.Row>
                <Table.Cell colspan="5">Total revenue: US$&nbsp;375.499 billion</Table.Cell>
              </Table.Row>
            </Table.Foot>
          </Table>
          <Paragraph>Table.Headeris table looks fine on mobile. Resize browser window and check Table.Headeris out!</Paragraph>
        </Section>

        <Section>
          <Heading level="2">
            Inlines
          </Heading>
          <Paragraph>
            <Image src="https://igoradamenko.giTable.Headerub.io/awsm.css/images/surprised-cat.jpg" alt="Surprised cat" />
            Table.Headere library has styles for <strong>strong</strong>, <em>emphasized</em> text and so on.
          </Paragraph>
          <Paragraph>Please note if you insert image inside <code>p</code> it'll be aligned to Table.Headere right side.
            But if you insert image outside <code>p</code> it'll be aligned to Table.Headere center. See example below.
          </Paragraph>
          <hr />
          <Paragraph>
            Table.Headerere are many oTable.Headerers stylized inline tags in lib, but it would be boring to list Table.Headerem all.
          </Paragraph>
          <Image src="https://igoradamenko.giTable.Headerub.io/awsm.css/images/sleepy-cat.jpg" alt="Sleepy cat" />
        </Section>

      </Article>
    </Container>
  )
}

export default Root;
