//Example of closure
function makeFunc () {

    let name = "Mozilla";
    
    function displayName() {
        console.log(this.name);
    }
    
    function changeName(name) {
        name = name
    }
    
  return {displayName, changeName};

}

const func = makeFunc();

func.displayName();
func.changeName("Godzilla");
func.displayName();