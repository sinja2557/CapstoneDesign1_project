var lastData = localStorage.getItem('weather');


const d_name = document.getElementById('dn');
const m_name = document.getElementById('mn');

window.addEventListener('load',()=>{
        if (lastData === 'Clear'){
          m_name.textContent = '초밥';
          document.getElementById("Item").src = "./image/Sushi.png";
          d_name.textContent='커피';
        }
        else if (lastData === 'Rain'){
          m_name.textContent = '칼국수';
          document.getElementById("Item").src = "./image/noodles.png";
          d_name.textContent='라떼';  
         }
         else if (lastData === 'Clouds'){
          m_name.textContent= '햄버거';
          document.getElementById("Item").src = "./image/hamburger.png"; 
          d_name.textContent='콜라'; 
          document.getElementById("Item2").src = "./image/cola.png";  
         }
         else if (lastData === 'Drizzle'){
          m_name.textContent = '볶음밥';
          document.getElementById("Item").src = "./image/fried-rice.png";
          d_name.textContent='유자차';  
         }
         else if (lastData === 'Snow'){
          m_name.textContent = '만둣국';
          document.getElementById("Item").src = "./image/dumplings.png";
          d_name.textContent='라떼';  
         }     
})