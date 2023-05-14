var data = [
    {
        cardTitle: "No Added Cost",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus eius rerum optio est! Sit cumque sunt non possimus! Ipsam ut corporis natus quae? Vel ex quo quia quam consequuntur?"
    },
    {
        cardTitle: "No Added Cost",
        cardText: "Lorem ipsum dolor sit amet consecffffffffffffffffffffffffffffffffffffffffffff    tetur adipisicing elit. Placeat accusamus eius rerum optio est! Sit cumque sunt non possimus! Ipsam ut corporis natus quae? Vel ex quo quia quam consequuntur?"
    },
    {
        cardTitle: "No Added Cost",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus eius rerum optio est! Sit cumque sunt non possimus! Ipsam ut corporis natus quae? Vel ex quo quia quam consequuntur?"
    },
    {
        cardTitle: "No Added Cost",
        cardText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, quas doloribus blanditiisvitae enim sequi quia, assumenda beatae incidunt inventore praesentium possimus temporeautem velit minima suscipit magnam ipsam similique! Lorem ipsum dolor sit amet consecteturadipisicing elit. Praesentium modi dolore inventore explicabo dolores vero iure!Consequuntur dolore sed iure voluptatem eum. Beatae atque cupiditate rerum, corporis consequuntur voluptates vitae."
    }
]


function bindText(data, template){
    for (var prop in data) {
           template = template.replace("{{"+prop+"}}", data[prop]);
    }
    return template;
}

function specialBindText(data, template){
    var str = ""
    for (var prop in data) {
        if(prop == "cardText"){
            for(var i = 0; i < 197; i++){
                str += data[prop][i];
            }
            str+="...";
        }
        else{
            str = data[prop]
        }
           template = template.replace("{{"+prop+"}}", str);
    }
    return template;
}

function onCLick(){

}


var cardHtml = '<div class="col-md-3"><div class="card rounded-5 shadow p-3"><img class="img-fluid w-25 mb-1" src="./assets/img/Frame 1000001700.png" alt=""><p class="text-22px">{{cardTitle}}</p><p class="text-16 read-more">{{cardText}}</p></div></div>';
var row = document.getElementsByClassName('add-here')[0];

for(var i = 0; i < data.length; i++){
    var cardTemplate;
   
    if(data[i]['cardText'].length>200){
        cardTemplate = specialBindText(data[i], cardHtml);
        var button = document.createElement("button");
        button.classList = "main-color-bgr w-50 text-light";
        button.innerText= "Read more";
        (function(i){
            button.addEventListener('click', function (){
                var popup = document.getElementsByClassName('popup')[0]
                popup.innerText = data[i].cardText;
                var n_button = document.createElement("button");
                 n_button.innerText = "close"
                 n_button.addEventListener('click', function(){
                    popup.classList.replace('d-flex', 'd-none');
                 });
                popup.appendChild(n_button);
                popup.classList.replace('d-none', 'd-flex');
            });
        })(i);

        row.insertAdjacentHTML('beforeend', cardTemplate);
        row.children[row.children.length-1].children[0].appendChild(button);
    }
    else{
        cardTemplate = bindText(data[i], cardHtml);
        row.insertAdjacentHTML('beforeend', cardTemplate);
    }
    
}