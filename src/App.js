import React from "react";
import { Header } from "./components/UI/Header";
import { Container } from "./components/UI/Container";
import { Content } from "./components/UI/Content";
import { Panel } from "./components/UI/Panel";
import { SideBar } from "./components/UI/SideBar";
import { Footer } from "./components/UI/Footer";
import { ListBox } from "./components/UI/ListBox";
import { Tabs } from "./components/UI/Tabs";

function App() {
  let Items = [];
  Array.from(Array(100).keys()).map((i) =>
    Items.push({ id: i, title: `List View Item ${i + 1}` })
  );

  return (
    <div className="App">
      <Header>Header</Header>
      <Container>
        <SideBar>
          <ListBox items={Items} title="Hello List" />
        </SideBar>
        <Content>
          <SideBar>
            <ListBox items={Items} />
          </SideBar>
          <Panel>
            <Tabs id="tabs">
              <div title="Tab 1">Tab content 1</div>
              <div title="Tab 2">Tab content 2</div>
              <div title="Tab 3">Tab content 3</div>
            </Tabs>
          </Panel>
        </Content>
      </Container>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
