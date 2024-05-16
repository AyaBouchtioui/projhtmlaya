var users = [{ username:'aya', password:'aya_è' }, {
    username:'rihab', password:'ablahsè1234' } ]
    function add(){
        let usernom=document.getElementById("sname").value;
        let passwor=document.getElementById("spass").value;
        if(passwor.length<8){ 
            document.getElementById('s1').innerHTML='password invalid it must contain 8 caracter' 
        }
        let user={};
        user.username=usernom;
        user.password= passwor;
        users.push(user);
        console.log(users);
    }
   
   function login(){
       var nameValue=document.getElementById("username").value;
       var passValue=document.getElementById("password").value;
       if ( nameValue==''){
           document.getElementById('s2').innerHTML=('name must be filled out');
           return false;
       }else if(passValue==''){
           document.getElementById('s2').innerHTML=('name must be filled out');
           return false;
       }
       for(var i=0; i<users .length; i++){
           if (users[i].username==nameValue && users[i].password==passValue) {
               return true;
           }
       }
       document.getElementById('s2').innerHTML='password and name do not matche';
       return false;
       
   }