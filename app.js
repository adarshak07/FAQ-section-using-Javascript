//2 ways to achieve 1st - using selectors inside the elements 
const btns = document.querySelectorAll(".question-btn")
//this is using traversing the dom ie parent , nextelementsibling etc . 
btns.forEach(function(btn) {
    btn.addEventListener('click',function(e) {
        const parentQues = e.currentTarget.parentElement.parentElement;
        parentQues.classList.toggle("show-text")
        // parentQues = e.currentTarget.parentElement.nextElementSibling  //not nextCHild
        // console.log(parentQues);
        // parentQues.style.display = 'block' //not block 
    })
})