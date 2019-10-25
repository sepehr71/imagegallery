let piclength= 33;
let page = 1;

function clearpage()
{
    var elem = document.querySelector('#masonry').innerHTML="";
}
function prepare()
{
    
}
function show()
{
    let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+piclength;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
    {
     for(var i=0;i<piclength;i++)
     {
       let requestresponse1 = request.response[i]['download_url'];

       let card = document.createElement('div');
       card.setAttribute("id" , "container");

       let image = document.createElement('img');
       image.setAttribute("id","images");

       let shareicon = document.createElement('button');
       shareicon.setAttribute("id", "sharebtn");
       shareicon.innerHTML="⤴";

       let likeicon = document.createElement('button');
       likeicon.setAttribute("id", "likebtn");
       likeicon.innerHTML="❤";

       let dwlicon = document.createElement('button');
       dwlicon.setAttribute("id", "dwlbtn");
       dwlicon.innerHTML="⬇";

       image.src=requestresponse1;
 
       document.querySelector('#masonry').append(card);
       document.querySelector('#masonry').appendChild(image);
       document.querySelector('#masonry').appendChild(shareicon);
       document.querySelector('#masonry').appendChild(likeicon);
       document.querySelector('#masonry').appendChild(dwlicon);

       card.appendChild(image);
       card.appendChild(shareicon);
       card.appendChild(likeicon);
       card.appendChild(dwlicon);
       document.getElementById('lbltipAddedComment').innerHTML = page;
    }
  }
}

function nextpage()
{
    if(page==10){page=0;}
    clearpage();
    page++;
    show();
}

function prevpage()
{
    if(page==1){page=11;}
    clearpage();
    page--;
    show();
}
     
function search() 
{
    clearpage();
    let typesearch = document.getElementById('#textbox').value;
    for(let x=1; x<10 ; x++)
    {
        let  requestURL = 'https://picsum.photos/v2/list?page='+x+'&limit=100';
        let request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function()
        {
            for(let i=0;i<100;i++)
            {
                let serversearch = request.response[i]['author'];
                if(typesearch === serversearch)
                {
                    let requestresponse1 = request.response[i]['download_url'];
                    let card = document.createElement('div');
                    card.setAttribute("id" , "container");

                    let image = document.createElement('img');
                    image.setAttribute("id","images");

                    let shareicon = document.createElement('button');
                    shareicon.setAttribute("id", "sharebtn");
                    shareicon.innerHTML="⤴";

                    let likeicon = document.createElement('button');
                    likeicon.setAttribute("id", "likebtn");
                    likeicon.innerHTML="❤";

                    let dwlicon = document.createElement('button');
                    dwlicon.setAttribute("id", "dwlbtn");
                    dwlicon.innerHTML="⬇";

                    image.src=requestresponse1;
                    shareicon.src =  requestresponse2;
                    document.querySelector('#masonry').append(card);
                    document.querySelector('#masonry').appendChild(image);
                    document.querySelector('#masonry').appendChild(shareicon);
                    document.querySelector('#masonry').appendChild(likeicon);
                    document.querySelector('#masonry').appendChild(dwlicon);

                    card.appendChild(image);
                    card.appendChild(shareicon);
                    card.appendChild(likeicon);
                    card.appendChild(dwlicon);
                    document.getElementById('lbltipAddedComment').innerHTML = page;
                
                }
            }
        }
    }   
}
function copytoclipboard()
{
    // var copyText = request.response[i]['download_url'];
    // copyText.select();
    // copyText.setSelectionRange(0, 99999)
    // document.execCommand("copy");
}
function like()
{

}
function share()
{

}