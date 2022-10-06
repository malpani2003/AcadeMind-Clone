
many_day=document.querySelectorAll(".course h4").length;

for(i=0;i<many_day;i++){
    day=`.day_${i+1}_class`
    $(day).css("display","none");
}

// console.log(many_day);
function show(choice){
    day=`.day_${choice}_class`;
    $(day).slideToggle();
    
}

function play_promo(){
    video=document.getElementById("video_intro")
    video.play()
}


