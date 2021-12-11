// //색상코드
// const color1 = document.getElementById('c1');
// const color2 = document.getElementById('c2');
// const color3 = document.getElementById('c3');
// const color4 = document.getElementById('c4');
// const color5 = document.getElementById('c5');

const mHatCloth = document.querySelector('.clothName1');
const mTop1Cloth = document.querySelector('.clothName2');
const mTop2Cloth = document.querySelector('.clothName3');
const mBottomCloth = document.querySelector('.clothName4');
const mShose = document.querySelector('.clothName5');


 
//맑고 더울 때
function ifClear() {
    color1.style.backgroundColor ="#C4E3E2";
    color2.style.backgroundColor ="#97BEC2";
    color3.style.backgroundColor ="#AD8967";
    color4.style.backgroundColor ="#E4C079";
    color5.style.backgroundColor ="#FBE399";
    mHatCloth.textContent = '버킷햇';
    mTop1Cloth.textContent='반팔티';
    mTop2Cloth.textContent='에코백';
    mBottomCloth.textContent='청바지';
    mShose.textContent='쪼리';

    alert('맑고 더울 때');
  }

//비오고 추울 때
function ifRain() {
   
    color1.style.backgroundColor ="#21222E";
    color2.style.backgroundColor ="#393434";
    color3.style.backgroundColor ="#348492";
    color4.style.backgroundColor ="#DCD5C3";
    color5.style.backgroundColor ="#F0F0DB";
    mHatCloth.textContent = '모자';
    mTop1Cloth.textContent='코트';
    mTop2Cloth.textContent='맨투맨';
    mBottomCloth.textContent='조거팬츠';
    mShose.textContent='운동화';

    alert('비오고 추울 때');
  }  
 
//흐리고 선선할 때 
function ifClouds() {
    
    color1.style.backgroundColor ="#40414E";
    color2.style.backgroundColor ="#82837C";
    color3.style.backgroundColor ="#D3A47D";
    color4.style.backgroundColor ="#F6E1B4";
    color5.style.backgroundColor ="#D25448";
    mHatCloth.textContent = '자켓';
    mTop1Cloth.textContent='긴팔 면티';
    mTop2Cloth.textContent='백팩';
    mBottomCloth.textContent='청바지';
    mShose.textContent='운동화';

    alert('흐리고 선선할 때');
    
}

function ifDrizzle() {
   
    color1.style.backgroundColor ="#E1CFBA";
    color2.style.backgroundColor ="#F7ECE6";
    color3.style.backgroundColor ="#CED8DF";
    color4.style.backgroundColor ="#8491A2";
    color5.style.backgroundColor ="#51626E";
    mHatCloth.textContent = '캡모자';
    mTop1Cloth.textContent='가디건';
    mTop2Cloth.textContent='반팔티';
    mBottomCloth.textContent='면바지';
    mShose.textContent='운동화';

    alert('안개끼고 선선 때');
    
}

//눈 올 때
function ifSnow() {
    color1.style.backgroundColor ="#344765";
    color2.style.backgroundColor ="#4F6188";
    color3.style.backgroundColor ="#939499";
    color4.style.backgroundColor ="#BBC8CA";
    color5.style.backgroundColor ="#D4B8B6";
    mHatCloth.textContent = '털모자';
    mTop1Cloth.textContent='롱패딩';
    mTop2Cloth.textContent='니트';
    mBottomCloth.textContent='청바지';
    mShose.textContent='운동화';

    alert('눈 올 때');
}  