


$(".toggleButton").click(hideNav);

function hideNav(){
    if($(".nav").css("display") != "none"){
        $(".nav").css("display" , "none");
    }else{
        $(".nav").css("display" , "flex");
    }
}


// let cursor = $(".cursor");
// $(document).on("mousemove" , (e)=>{  
//     cursor.css({left : `${e.pageX}px` , 
//                 top : `${e.pageY}px`
//                })
// });


// function cursorBig(){
//     cursor.animate({width : "3rem" , 
//         height : "3rem"
//         },300);
// }

// function cursorSmall(){
//     cursor.animate({width : "12px" , 
//         height : "12px"
//         },300);
// }


// $(".navButtons").on("mouseover" , cursorSmall)

// $(".navButtons").on("mouseleave" , cursorBig)

// $(".toggleButton").on("mouseover" ,cursorSmall)

// $(".toggleButton").on("mouseleave" , cursorBig)


// $(".card").on("mouseover" , (e)=>{
//     const target = $(e.target).attr("data");
//     $(`.inside${target}`).animate({bottom: "-20%"})
// })

    // let value = e.target.getAttribute("data");
//     document.getElementById(value).scrollIntoView();

let navbuttons = document.querySelectorAll(".navButtons");

navbuttons.forEach(button => {
  button.addEventListener("click", function(e) {
    let id = e.target.getAttribute("data");
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
    if($(".nav").css("display" , "flex")){
        setTimeout(hideNav , 1000)
    }
  });
});

let navBars = document.querySelector(".resNav");
let slidingBar = document.querySelector(".slidingNav");
let bar1 = document.querySelector(".l-1");
let bar2 = document.querySelector(".l-2");
let bar3 = document.querySelector(".l-3");

let isOpen = false;
navBars.addEventListener("click" , clickFunc );

function clickFunc(){

    if(isOpen == false){
 
        slidingBar.style.right = "0px"
        bar1.style.transform = "rotate(45deg) translateY(6.88px)"
        bar2.style.display = "none"
        bar3.style.transform = "rotate(-45deg) translateY(-6.88px)"
        isOpen = true
    }else{

        slidingBar.style.right = "-450px"
        bar1.style.transform = "rotate(0deg)"
        bar2.style.display = "block"
        bar3.style.transform = "rotate(0deg)"
        isOpen = false
    }
    
}

// navBars.addEventListener("click" , function(){
    
// } );



