let nav_list = document.querySelector('#nav-lis'),
    menu = document.getElementById('menu-btn');
    let count = 0;
    menu.addEventListener('click',function(){
        nav_list.classList.toggle('show');

        

        if(count == 0){
            menu.style.color = '#fff';
            count++;
        }else{
            menu.style.color = '#000';
            count = 0;
        }
        // let count = 0;
        // if(count == 0)
        // {
        //     menu.style.color = "#fff";
        //     count++;
        // }
        // else{
        //     menu.style.color = "#000";
        //     count = 0;
        // }
        
    })