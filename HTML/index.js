function change_qoutes() {
    /* all qoutes for heading s*/
    var qoutes = [];
    qoutes.push("An investment in knowledge pays the best interest. –  Benjamin Franklin");
    qoutes.push("Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – Malcolm X");
    qoutes.push("Change is the end result of all true learning. – Leo Buscaglia");
    qoutes.push("The roots of education are bitter, but the fruit is sweet. – Aristotle");
    qoutes.push("Education is what remains after one has forgotten what one has learned in school. – Albert Einstein");
    qoutes.push("The more that you read, the more things you will know, the more that you learn, the more places you’ll go.– Dr. Seuss. – Malcolm X");
    qoutes.push("Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi");
    qoutes.push("Education without values, as useful as it is, seems rather to make man a more clever devil. ― C.S. Lewis");
    qoutes.push("The learning process continues until the day you die. – Kirk Douglas ");
    qoutes.push("Develop a passion for learning. If you do, you will never cease to grow. – Anthony J. D’Angelo");
    var rand = Math.floor(Math.random() * 10);
    document.getElementById("qoute-1").innerHTML = qoutes[rand];
}
change_qoutes();
// document.getElementById("qoute-1").addEventListener("click",change_qoutes);
var change_backgroung_image_for_middle_container_cnt =0;
function change_backgroung_image_for_middle_container() {
    change_backgroung_image_for_middle_container_cnt++;
    var rand = (change_backgroung_image_for_middle_container_cnt%3)+1;
    var imgSource =  "IMAGES/middle-container-imgs/img-"+rand+".png";
    // document.getElementById("middle-container-bg-img").style.transitionTimingFunction = "ease-in-out";
    document.getElementById("middle-container-bg-img").setAttribute("src",imgSource);
    
}
// change_backgroung_image_for_middle_container();

document.getElementById("middle-container-bg-img").addEventListener("mouseover",change_backgroung_image_for_middle_container);



