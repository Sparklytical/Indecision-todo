class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visibility: false
    }; //
  }

  handleVisibilityToggle() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey, These are some details about the visibility</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
