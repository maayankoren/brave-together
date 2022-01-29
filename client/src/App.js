import React from 'react';
import './App.css';
import './app.scss';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';
//import { NativeRouter, BackButton } from 'react-router-native';
import Search from './search/Search'
import Template from './template/template';
import StoryCheck from './storyCheck/storyCheck';
import Testimony from './testimony/testimony.jsx';
import UnAuthorizedPage from './errors/UnAuthorizedPage'
// import Testimony from './testimony/testimony';
import TextEdit from './text/text';
import StoryUpload from './StoryUploadNew/StoryUpload';
import TemplateEdit from './templateEdit/template-edit';
import Share from './share/share';
import About from './about/about';
import Footer from './footer/footer'
import Homepage from './homepage/homepage';
//import BackButton from './backButton/backButton';
import ThankYouForComing from './thankYouForComing/thankYouForComing';
import Header from './header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignup from './auth/LoginSignup';
// import SignUp from './auth/SignUp';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import Quotes from './quotes/Quotes';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/storyCheck' component={StoryCheck} />
        <Route exact path='/testimony/:storyId' component={Testimony} />
        <Route exact path='/textEdit' component={TextEdit} />
        <ProtectedRoute exact path='/storyUpload' component={StoryUpload} />
        <Route exact path='/unauthorized' component={UnAuthorizedPage}/>
        <Route exact path='/templateEdit' component={TemplateEdit} />
        <Route exact path='/share' component={Share} />
        <Route exact path='/thankYouForComing' component={ThankYouForComing} />
        <Route exact path='/About' component={About} />
        <Route exact path='/login' component={LoginSignup} />
          <Route exact path='/signup' render={()=><LoginSignup isSignup={true}></LoginSignup>} />
        <Route exact path='/quotes' component={Quotes} />
        <Route exact path='/search' component={Search}/>
        <Route path='*' component={() => '404 Not Found'} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
