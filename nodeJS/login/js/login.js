const loginBtn = document.querySelector('input[type=submit]')
loginBtn.addEventListener('click', function() {
    if(document.querySelector('#uname').value === '' &&
     document.querySelector('#uname').value === '') {
        alert('不能为空 请回退')

        
     }
})