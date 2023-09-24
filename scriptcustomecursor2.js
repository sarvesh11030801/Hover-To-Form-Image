// var sac = document.querySelector("#sac")
// var sacimg = document.querySelector("#sac img")

// sac.addEventListener("mousemove", function(st){
//     sacimg.style.left = st.x+"px"
//     sacimg.style.top = st.y+"px"
// })

// sac.addEventListener("mouseenter", function(st){
//     sacimg.style.opacity = 1
// })

// sac.addEventListener("mouseleave", function(st){
//     sacimg.style.opacity = 0
// })

var cric = document.querySelectorAll(".cric")

cric.forEach(function(players){
    players.addEventListener("mouseenter", function(){
        players.childNodes[3].style.opacity = 1
        players.childNodes[1].style.color = "Blue"
    })
    players.addEventListener("mouseleave", function(){
        players.childNodes[3].style.opacity = 0
        players.childNodes[1].style.color = "White"
    })
    players.addEventListener("mousemove", function(prof){
        players.childNodes[3].style.left = prof.x + "px"
    })
})