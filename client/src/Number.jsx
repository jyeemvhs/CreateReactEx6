
import React, { Component } from 'react';

class Number extends Component {
        constructor(props) {
          super(props);
          this.save = this.save.bind(this);
        }

        save() {
          this.props.updateCommentNumber(this.refs.newNumber.value);
        }

        renderForm() {
          return (
            <div className="commentContainer">
              <div className="commentContainer">{this.props.children}</div>

              <input ref="newNumber" type="number" defaultValue={this.props.children}></input>

              <button onClick={this.save} className="button-success">Save</button>
            </div>
          );
        }

        render() {
            return this.renderForm();
        }
      }

export default Number;
