const TodoItem = ({todoname, tododate}) => {
    return <div className="container kg-row">
        <div className="row">
            <div className="col-4">
                {todoname}
            </div>
            <div className="col-4">
                {tododate}
            </div>
            <div className="col-2">  <button type="button" className="btn btn-danger kg-button">DELETE</button>
            </div>
        </div>
    </div>
}

export default TodoItem;