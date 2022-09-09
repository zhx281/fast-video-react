import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Nav, Footer, NotFound} from './components';
import {Actors, Videos, VideoPlayer} from './pages'

function App() {
  return (
    <>
    <Router>
    <Nav />
      <Routes>
        <Route path='/' element={<Actors />} />
        <Route path='/video/:actor' element={<Videos />} />
        <Route path='/videoplayer/:title' element={<VideoPlayer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
