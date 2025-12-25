


function TodoItem() {
    return (
        <div class="container">
        <div class="row rg-row">
          <div class="col-6">
            <div>Milk</div>
          </div>
          <div class="col-4">
            <div>12/12/2025</div>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger rg-button">Remove</button>
          </div>
        </div>
        </div>
    );
}

export default TodoItem;