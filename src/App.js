import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Nav, Header, Footer, NotFound} from './components';
import {Actors, Add, Edit, Videos, VideoPlayer} from './pages'

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Routes>
        <Route path='/' element={ <Actors /> } />
        <Route path='/videos' element={ <Videos /> } />
        <Route path='/videoplayer' element={ <VideoPlayer /> } />
        <Route path='/add' element={ <Add /> } />
        <Route path='/edit' element={ <Edit /> } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
