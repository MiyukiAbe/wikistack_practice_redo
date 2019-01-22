const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
  <div>
    <label for="authorName" class="col-sm-2 control-label">Author Name</label>
    <input id='authorName' name ='authorName' type = 'text'>
  </div>
  
  <div>
    <label for="email" class="col-sm-2 control-label">Email</label>
    <input id='email' name ='email' type = 'text'>
   </div> 
   
  <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
  <div>
    <label for="content" class="col-sm-2 control-label">Content</label>
    <input id='content' name ='content' type = 'text'>
  </div>
  <div> 
    <label for="status" class="col-sm-2 control-label">Status</label>
    <input id='status' name ='status' type = 'text'>
  </div>
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);