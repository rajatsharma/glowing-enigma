import React, { Component } from 'react';
import {
  Flex,
  Grid,
  Text,
  Button,
  Fixed,
  Absolute
} from '@elementary/components';
import './App.css';
import howto from './howto.gif';

export default class Main extends Component {
  state = { modal: false };

  render() {
    return (
      <Grid
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gridTemplateRows="auto"
        placeItems="stretch"
        p="100px"
        className="template"
      >
        {this.state.modal && (
          <>
            <Absolute
              z="96"
              w="100%"
              h="100%"
              top="0"
              left="0"
              bg="rgba(0,0,0,0.5)"
            />
            <Flex
              w="100%"
              h="100%"
              is={Fixed}
              onClick={_ => this.setState({ modal: false })}
              justifyContent="center"
              alignItems="center"
              style={{ top: '0', left: '0' }}
            >
              <img src={howto} alt="howto" />
            </Flex>
          </>
        )}
        <Flex
          bg="#FEFEFE"
          className="hero"
          alignItems="center"
          justifyContent="center"
          direction="column"
          boxShadow="0 6px 15px rgba(36,37,38,0.08)"
        >
          <Text f="36px" is="h1" pb="20px">
            Autoreadme
          </Text>
          <Text pb="20px">
            Creates A readme file as soon as you create a new Repo
          </Text>
          <Button
            onClick={_ => window.open('https://github.com/apps/autoreadme')}
            f="16px"
            my="50px"
            h="40px"
            w="120px"
            style={{
              cursor: 'pointer',
              'background-image':
                'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)'
            }}
          >
            Get It
          </Button>
          <Text f="14px" fontStyle="italics">
            Choose `<b>All repositories</b>` while installing.
          </Text>
        </Flex>
        <Flex
          className="footer"
          boxShadow="0 6px 15px rgba(36,37,38,0.08)"
          bg="#FEFEFE"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            style={{ cursor: 'pointer' }}
            onClick={_ => this.setState({ modal: true })}
          >
            How To?
          </Text>
        </Flex>
        <Flex className="text2" justifyContent="center" alignItems="center">
          © {new Date().getFullYear()} Rajat Sharma
        </Flex>
      </Grid>
    );
  }
}
