function loadDoc(){
    var xml = new XMLHttpRequest();
    xml.open("GET", "hello.txt", true);
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        } 
    };
    xml.send();
}
