
import './App.css';
import 'antd/dist/antd.css';

import Appheader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';
import { Layout } from 'antd';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Appheader />
      </Header>

      <Content>
        <AppHome />
      </Content>

      <Footer>
        <AppFooter />
      </Footer>

    </Layout>
  );
}

export default App;
