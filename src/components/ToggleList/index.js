import React from "react";
import "./styles.css";

class ToggleList extends React.Component {
    render() {
        const { handleToggleList } = this.props;

        return (
            <ul className="toggle-list">
                <li>
                    <button className="btn" onClick={() => handleToggleList(true, true)}>All</button>
                </li>
                <li>
                    <button className="btn" onClick={() => handleToggleList(true, false)}>Active</button>
                </li>
                <li>
                    <button className="btn" onClick={() => handleToggleList(false, true)}>Completed</button>
                </li>
            </ul>
        );
    }
}

export default ToggleList;
