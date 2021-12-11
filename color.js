//색상코드
const color1 = document.getElementById('c1');
const color2 = document.getElementById('c2');
const color3 = document.getElementById('c3');
const color4 = document.getElementById('c4');
const color5 = document.getElementById('c5');

//메인에서 받아오는 날씨
var lastData = localStorage.getItem('weather');

console.log('lastData');
window.addEventListener('load',()=>{
        if(lastData == 'Clear'){
            document.getElementById('c1').style.backgroundColor = "#db0d36";
            color1.style.backgroundColor ="#C4E3E2";
            color2.style.backgroundColor ="#97BEC2";
            color3.style.backgroundColor ="#AD8967";
            color4.style.backgroundColor ="#E4C079";
            color5.style.backgroundColor ="#FBE399";
        }
        else if(lastData == 'Rain'){
            color1.style.backgroundColor ="#21222E";
            color2.style.backgroundColor ="#393434";
            color3.style.backgroundColor ="#348492";
            color4.style.backgroundColor ="#DCD5C3";
            color5.style.backgroundColor ="#F0F0DB";
        }
        else if(lastData == 'Clouds'){
            color1.style.backgroundColor ="#40414E";
            color2.style.backgroundColor ="#82837C";
            color3.style.backgroundColor ="#D3A47D";
            color4.style.backgroundColor ="#F6E1B4";
            color5.style.backgroundColor ="#D25448";
        }
        else if(lastData == 'Drizzle'){
            color1.style.backgroundColor ="#E1CFBA";
            color2.style.backgroundColor ="#F7ECE6";
            color3.style.backgroundColor ="#CED8DF";
            color4.style.backgroundColor ="#8491A2";
            color5.style.backgroundColor ="#51626E";
        }
        else if(lastData == 'Snow'){
            color1.style.backgroundColor ="#344765";
            color2.style.backgroundColor ="#4F6188";
            color3.style.backgroundColor ="#939499";
            color4.style.backgroundColor ="#BBC8CA";
            color5.style.backgroundColor ="#D4B8B6";
        }
})
