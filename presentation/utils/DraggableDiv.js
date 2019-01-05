import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DraggableDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0
    };
    this.initialLeft = 0;
    this.initialTop = 0;
    this.initialClientX = 0;
    this.initialClientY = 0;
  }
  handleMouseDown = ({ clientX, clientY }) => {
    document.body.style.userSelect = 'none';
    this.initialLeft = this.state.left;
    this.initialTop = this.state.top;
    this.initialClientX = clientX;
    this.initialClientY = clientY;
    document.addEventListener('mousemove', this.handleMouseMove);
  };
  handleMouseMove = ({ clientX, clientY }) => {
    this.setState({
      top: this.initialTop + clientY - this.initialClientY,
      left: this.initialLeft + clientX - this.initialClientX
    });
  };
  handleMouseUp = () => {
    document.body.style.userSelect = 'initial';
    document.removeEventListener('mousemove', this.handleMouseMove);
  };
  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
  }
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
  }
  render() {
    const { background, height, width } = this.props;
    const { top, left } = this.state;
    return (
      <div
        onMouseDown={this.handleMouseDown}
        style={{
          background,
          cursor: 'move',
          height,
          width,
          top,
          left,
          position: 'absolute'
        }}
      />
    );
  }
}

DraggableDiv.defaultProps = {
  background: '#1e1e1e',
  height: 100,
  width: 100
};

DraggableDiv.propTypes = {
  background: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

export default DraggableDiv;
