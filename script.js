const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');
const heartbtn=document.getElementById("heart-btn");
const squarebtn=document.getElementById("square-btn");
const circlebtn=document.getElementById("circle-btn");
const rectbtn=document.getElementById("rect-btn");
const lmain=document.getElementById("main-lower");
const umain=document.getElementById("upper");
const usebtn=document.getElementById("use");


imageInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    imagePreview.src = e.target.result;
  }
  if(imagePreview.src){
  umain.className="view";
  lmain.style.top=100+"px";
  circlebtn.addEventListener('click',function(){
    lmain.className="";
    lmain.classList.toggle("circle");
    lmain.style.opacity=1;
    lmain.style.height=300+"px";
    
  });
  heartbtn.addEventListener('click',function(){
    lmain.className="";
    lmain.classList.toggle("heart");
    lmain.style.opacity=1;
    lmain.style.height=300+"px";
    
  });
  rectbtn.addEventListener('click',function(){
    lmain.className="";
    lmain.classList.toggle("rect");
    lmain.style.opacity=1;
    lmain.style.height=220+"px";
     
  });
  squarebtn.addEventListener('click',function(){
    lmain.className="";
    lmain.classList.toggle("square");
    lmain.style.opacity=1;
    lmain.style.height=300+"px";
  });
  usebtn.addEventListener('click',function(){
    umain.className="";
    lmain.style.opacity=1;
    lmain.style.top=0+"px";
  });
}

  reader.readAsDataURL(file);
});



console.log(lmain.classList);

