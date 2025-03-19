

document.getElementById('myForm').addEventListener('submit', function(e){
    e.preventDefault();//Prevents the form from submitting immediately.
    // alert("ninja")

   const firstName = document.getElementById('firstName').value;
   const lastName = document.getElementById('lastName').value;
   const email = document.getElementById('email').value;
   
   if (firstName === '' || lastName === '' || !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(email)) {
    alert("Please complete all the fields.")
   }else{
    alert("Form Submitted.")
   }
});