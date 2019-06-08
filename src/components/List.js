import React, { Component } from "react";

class List extends Component {
  render() {
    const { title, data } = this.props;
    return (
      <div>
        <p className="list-title">{title}</p>
        <ul className="list">
          {data.map((item, ind) => (
            <li className="list-item" key={ind}>
              <p className="list-title">
                {ind + 1}. {item.name}
              </p>
              <p className="list-description">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
