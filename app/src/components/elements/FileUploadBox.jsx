import React from 'react';
import Dropzone from 'react-dropzone';

export default class Basic extends React.Component {
  constructor(props) {
    super(props)
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Arrastrá un archivo o hacé click aquí para elegir uno.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)}
          </ul>
        </aside>
      </section>
    );
  }
}