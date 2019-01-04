import React from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SideBar = () => {
   
    return (
      <Sidebar.Pushable as={Segment} attached="bottom">
      <Sidebar width='thin' as={Menu} animation="uncover"  icon="labeled">
        <Menu.Item><Icon name="home" />Home</Menu.Item>
        <Menu.Item><Icon name="block layout" />Topics</Menu.Item>
        <Menu.Item><Icon name="smile" />Friends</Menu.Item>
        <Menu.Item><Icon name="calendar" />History</Menu.Item>    
      </Sidebar>
       <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src='//unsplash.it/800/480' />
            </Segment>
       </Sidebar.Pusher>
    </Sidebar.Pushable>
        
      );
    

};
export default SideBar;