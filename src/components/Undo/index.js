import React from "react";
import "./styles.css";

class Undo extends React.Component {
    render() {
        const { undo, handleUndoTodoRemove } = this.props

        return (
            <> 
                { undo &&
                    <div className="undo">
                        <button onClick={handleUndoTodoRemove} type="button">undo</button>
                    </div>
                }
            </>
        );
    }
}

export default Undo;