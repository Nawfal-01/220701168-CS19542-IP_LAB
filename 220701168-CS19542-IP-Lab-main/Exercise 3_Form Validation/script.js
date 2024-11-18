function validateForm()
{
     let isValid=true;
     document.querySelectorAll('.error').forEach(error =>error.innerHTML='');

     var one=document.getElementById('name').value.trim();
     var nameField = document.getElementById('name');
    if (one === '')
    {
       document.getElementById('name-error').innerHTML='Name is required.';
       nameField.focus();
       isValid=false;
    }
  

    var two=document.getElementById('rollno').value.trim();
    var rollnofield=document.getElementById('rollno');
    if(two ===''){
       document.getElementById('rollno-error').innerHTML='RollNo is required.';
       rollnofield.focus();
       isValid=false;
    }

    var three=document.querySelector('input[name="gender"]:checked');
    if(!three){
       document.getElementById('gender-error').innerHTML='Select gender';
       isValid=false;
    }

    const year = document.querySelector('select[name="year"]').value;
    if (year === '') {
        document.getElementById('year-error').innerHTML = 'Year is required.';
        isValid = false;
    }

    // Department validation
    const department = document.querySelector('select[name="department"]').value;
    if (department === '') {
        document.getElementById('department-error').innerHTML = 'Department is required.';
        isValid = false;
    }

    // Section validation
    const section = document.querySelector('select[name="section"]').value;
    if (section === '') {
        document.getElementById('section-error').innerHTML = 'Section is required.';
        isValid = false;
    }
    

    const mobile = document.getElementById('mobile').value.trim();
    if (mobile === '') {
        document.getElementById('mobile-error').innerHTML = 'Mobile No is required.';
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        document.getElementById('mobile-error').innerHTML = 'Mobile No must be 10 digits.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('email-error').innerHTML = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email-error').innerHTML = 'Email is invalid.';
        isValid = false;
    }
 
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        document.getElementById('address-error').innerHTML = 'Address is required.';
        isValid = false;
    }

    return isValid;
}
