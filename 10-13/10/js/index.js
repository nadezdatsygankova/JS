function getID(idElem) {
   
   return document.getElementById(idElem);
}

function getValue(idEle) {
   var el= document.getElementById(idEle);
   return el.value;
}

function getEl(id) {
    var getElement= document.getElementById(id);
    return getElement;
}

    function alertFirstNameValues() {
        console.log(firstNameE1.value);
        console.log(firstNameE1.className);
    }
    
    function alertLastNameValue() {
       
        console.log(lastNameE1.value);
        console.log(lastNameE1.className);
    }


    function alertValues(elementParameter) {
       
        console.log(elementParameter.value);
        console.log(elementParameter.className);
    }
    
   /* function changeValue(id) {
        var NameE1= getValue(id);
         NameE1=name;
        console.log(NameE1);
    }*/
    
  function setMyLastNameToAllInputs(id) {
    var elValue= getValue(id);  
    elValue=lastName;
    console.log(elValue);
  }

  function changeValue(change) {

    var elValue= getValue('first-name');  
    elValue=change;
    console.log(elValue);
     
      
  }

    var name = "it-kamasutra";
    var lastName="google";
    changeValue(name);  
    console.log(getValue('first-name'));  
    changeValue(name);  
    
    changeValue(lastName);  
    changeValue(lastName);  
    changeValue(lastName); 
    


    // next

    var firstID = getID('first-name');
    var secondID = getID('last-name');
    var thirdID = getID('address-name');
/*
    firstID.className= firstID.className + " error";
    secondID.className= secondID.className + " error";
    thirdID.className= thirdID.className + " error";
*/
/*
    function setError(idEl) {
        var idn = getID(idEl);
        idn.className = idn.className + " error";
    }

    setError('first-name');
    setError('last-name');
    setError('address-name');
    setError('func');
    setError('textarea');
*/
    function getSumm(n1,n2) {
        return n1+n2;
    }

    console.log(getSumm(34,23));
    console.log(getSumm(3434,12));
    console.log(getSumm(23,23));

    function sayHello() {
        window.alert("My name");
    }

    setTimeout(sayHello,1000);
/*
    function timeoutError() {
        setError('first-name');
    }
*/
   /* setTimeout(timeoutError,1000);*/

    function hideElement(id) {
        var idN = getID(id);
        idN.style.cssText = "visibility: hidden";
        
    }

    hideElement('first-name');
    console.log(getID('first-name'));

    function showElement(id) {
        var idN = getID(id);
        idN.style.cssText = "visibility: visible";
    }

    showElement('first-name');
    console.log(getSumm(12,34));
   /*
    //delete id
    function deleteId(id) {
        
        var id=getID(id);
        if (id!=null)
        {
            id.remove();
        }
    
    }

 
    deleteId('first-name');
    console.log(getID('first-name'));
  */
    //add class

    function addClass(id, nameC) {
   
        var id=getID(id);
   
        if (id!=null)
        {
        id.classList.add(nameC);
        console.log(getID(id));
        }
    }

    addClass('first-name','mm');
    console.log(getID('first-name'));

//hide element

    function hideID(id) {
        var id =getID(id);
        id.style.transition = "all 10s";
        id.style.width = "0px"; 
    }

   setTimeout(hideID('first-name'),1000) ;
    


