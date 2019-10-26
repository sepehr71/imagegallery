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
        
        let cardid = i;
        let requestresponse1 = request.response[i]['download_url'];

        let card = document.createElement('div');
        card.setAttribute("id" , "container");
        card.setAttribute("class" , cardid);
    

        let image = document.createElement('img');
        image.setAttribute("id","images");

        let shareicon = document.createElement('button');
        shareicon.setAttribute("id", "sharebtn");
        shareicon.setAttribute("onclick" , "share()" )
      
        shareicon.onclick = function()
        {
            share(cardid);
        }
    

        let sharebtntxt = document.createElement('a');
        sharebtntxt.setAttribute("id" , "sharebtntxt");
        sharebtntxt.innerHTML="🔺";
        sharebtntxt.setAttribute("title" , "copyto clip board");
     
        let likeicon = document.createElement('button');
        likeicon.setAttribute("id", "likebtn");
        likeicon.setAttribute("onclick" , "like()" )
        likeicon.setAttribute("title" , "like");
        likeicon.onclick = function()
        {
            like(cardid);
        }
        

        let likebtntxt = document.createElement('a');
        likebtntxt.setAttribute("id" , "likebtntxt");
        likebtntxt.innerHTML="💗";
        likebtntxt.setAttribute("title" , "like");


        let dwlicon = document.createElement('button');
        dwlicon.setAttribute("id", "dwlbtn");
        dwlicon.setAttribute("onclick" , "download()" )
       
        dwlicon.onclick = function()
        {
            download(cardid);
        }
        

        let dwlbtntxt = document.createElement('a');
        dwlbtntxt.setAttribute("id" , "dwlbtntxt");
        dwlbtntxt.innerHTML="🔻";
        dwlbtntxt.setAttribute("title" , "download");


        image.src=requestresponse1; 
        document.querySelector('#masonry').append(card);
        document.querySelector('#masonry').appendChild(image);
        document.querySelector('#masonry').appendChild(shareicon);
        document.querySelector('#masonry').appendChild(sharebtntxt);
        document.querySelector('#masonry').appendChild(likeicon);
        document.querySelector('#masonry').appendChild(likebtntxt);
        document.querySelector('#masonry').appendChild(dwlicon);
        document.querySelector('#masonry').appendChild(dwlbtntxt);

        card.appendChild(image);
        card.appendChild(shareicon);
        card.appendChild(likeicon);
        card.appendChild(dwlicon);
        shareicon.appendChild(sharebtntxt);
        likeicon.appendChild(likebtntxt);
        dwlicon.appendChild(dwlbtntxt);
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
                    let cardid = i;
                    let requestresponse1 = request.response[i]['download_url'];
            
                    let card = document.createElement('div');
                    card.setAttribute("id" , "container");
                    card.setAttribute("class" , cardid);
            
                    let image = document.createElement('img');
                    image.setAttribute("id","images");
            
                    let shareicon = document.createElement('button');
                    shareicon.setAttribute("id", "sharebtn");
                    shareicon.setAttribute("onclick" , "share()" )
                    shareicon.onclick = function()
                    {
                        share(cardid);
                    }
                
            
                    let sharebtntxt = document.createElement('a');
                    sharebtntxt.setAttribute("id" , "sharebtntxt");
                    sharebtntxt.innerHTML="🔺";
            
            
                    let likeicon = document.createElement('button');
                    likeicon.setAttribute("id", "likebtn");
                    likeicon.setAttribute("onclick" , "like()" )
                    likeicon.onclick = function()
                    {
                        like(cardid);
                    }
                    
            
                    let likebtntxt = document.createElement('a');
                    likebtntxt.setAttribute("id" , "likebtntxt");
                    likebtntxt.innerHTML="💗";
            
            
                    let dwlicon = document.createElement('button');
                    dwlicon.setAttribute("id", "dwlbtn");
                    dwlicon.setAttribute("onclick" , "download()" )
                    dwlicon.onclick = function()
                    {
                        download(cardid);
                    }
                    
            
                    let dwlbtntxt = document.createElement('a');
                    dwlbtntxt.setAttribute("id" , "dwlbtntxt");
                    dwlbtntxt.innerHTML="🔻";
            
            
                    image.src=requestresponse1; 
                    document.querySelector('#masonry').append(card);
                    document.querySelector('#masonry').appendChild(image);
                    document.querySelector('#masonry').appendChild(shareicon);
                    document.querySelector('#masonry').appendChild(sharebtntxt);
                    document.querySelector('#masonry').appendChild(likeicon);
                    document.querySelector('#masonry').appendChild(likebtntxt);
                    document.querySelector('#masonry').appendChild(dwlicon);
                    document.querySelector('#masonry').appendChild(dwlbtntxt);
            
                    card.appendChild(image);
                    card.appendChild(shareicon);
                    card.appendChild(likeicon);
                    card.appendChild(dwlicon);
                    shareicon.appendChild(sharebtntxt);
                    likeicon.appendChild(likebtntxt);
                    dwlicon.appendChild(dwlbtntxt);
                    document.getElementById('lbltipAddedComment').innerHTML = page;          
                }
            }
        }
    }   
}
function download(cardid)
{
  
}
function like(cardid)
{
    
}
function share(cardid)
{
    
    let  requestURL = 'https://picsum.photos/v2/list?page='+page+'&limit='+piclength;
    // let request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();
    // request.onload = function()
    // {
    //         var copyText = document.getElementsByClassName(cardid);
    //         copyText.select();
    //         copyText.setSelectionRange(0, 99999);
    //         document.execCommand("copy");
    // }
} 