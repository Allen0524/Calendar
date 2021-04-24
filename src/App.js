import './sass/App.scss';
import Header from './components/Header.jsx';
import CalendarBody from './components/CalendarBody.jsx';
import Modal from './components/Modal.jsx';
import { connect } from 'react-redux';

function App({ show }) {
  return (
    <div className="app">
      <Header />
      <CalendarBody />

      <div className={`overlay ${!show ? 'active' : ''}`}></div>
      {show ? <Modal /> : null}
    </div>
  );
}

export default connect((state) => ({
  show: state.modal.show,
}))(App);
