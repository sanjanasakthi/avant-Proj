


const Demobtn = () =>{

  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });

    return(
        <div>
        <h3>Popover Example</h3>
                <a href="#" title="Dismissible popover" 
                data-toggle="popover" 
                data-trigger="focus" 
                data-content="Click anywhere in the 
                document to close this popover">
                  Click me</a>
        </div>
    )
}

export default Demobtn;