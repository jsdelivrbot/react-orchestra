import React from 'react';
//eslint-disable-next-line
import { render } from 'react-dom';
// import 'animate.css';
import 'bulma/css/bulma.css';

import './index.css';
// import { Instrument, Orchestra, Note } from '../../src';
import StaticInstrumentExample from './components/static-instrument-example';
import InteractiveInstrumentExample from './components/interactive-instrument-example';
import StaticOrchestraExample from './components/static-orchestra-example';


class Demo extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                React Orchestra Web Demo
              </h1>
              <h2 className="subtitle">
                Better with headphones on.
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="heading">
              <h1 className="title">Static Instrument</h1>
              <h2 className="subtitle">
                A non-interactive instrument that plays by updating note props.
              </h2>
              <hr />
              <StaticInstrumentExample />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="heading">
              <h1 className="title">Interactive Instrument</h1>
              <h2 className="subtitle">
                Play it by clicking or tapping notes
              </h2>
              <hr />
              <InteractiveInstrumentExample />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="heading">
              <h1 className="title">Interactive Orchestra From Midi</h1>
              <h2 className="subtitle">
                An orchestra that plays a midi file and syncs ui
              </h2>
              <hr />
              <StaticOrchestraExample />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
