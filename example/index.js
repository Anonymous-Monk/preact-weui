import {h, render} from 'preact';

//styles:
import './styles/example.scss';

// pages:
import Button from './components/button/index';
import Home from './components/home/index';
import Icons from './components/icons/index';
import Input from './components/input/index';
import SearchBar from './components/search-bar/index';
import Msg from './components/msg/index';
import MsgSuccess from './components/msg-success/index';
import MsgWarn from './components/msg-warn/index';
import Cells from './components/cells/index';
import Mask from './components/mask/index';
import ActionSheet from './components/actionsheet/index';
import Dialog from './components/dialog/index';
import List from './components/list/index';
import Article from './components/article/index';
import Badge from './components/badge/index';
import Flex from './components/flex/index';
import Footer from './components/footer/index';
import Gallery from './components/gallery/index';
import Grid from './components/grid/index';
import Loadmore from './components/loadmore/index';
import Panel from './components/panel/index';

// routes:
import { Link } from 'preact-router/match';
import Router from 'preact-router';

render(
  <Router>
    <Home path="/" />
    <Button path="/button" />
    <Input path="/input" />
    <Icons path="/icons" />
    <List path="/list" />
    <Article path="/article" />
    <Badge path="/badge" />
    <Flex path="/flex" />
    <Footer path="/footer" />
    <Gallery path="/gallery" />
    <Grid path="/grid" />
    <Loadmore path="/loadmore" />
    <Panel path="/panel" />
    <SearchBar path="/searchbar" />
    <Msg path="/msg" />
    <MsgSuccess path="/msg-success" />
    <MsgWarn path="/msg-warn" />
    <Cells path="/cells" />
    <Mask path="/mask" />
    <ActionSheet path="/actionsheet" />
    <Dialog path="/dialog" />
  </Router>,
  document.getElementById('app')
);
