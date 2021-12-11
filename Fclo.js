// 메인에서 받아오는 날씨랑 기온
var lastData = localStorage.getItem('weather');
var lastTemp = localStorage.getItem('tempC');

// 옷이름
const wHatCloth = document.querySelector('.clothName1');
const wTop1Cloth = document.querySelector('.clothName2');
const WTop2Cloth = document.querySelector('.clothName3');
const WBottomCloth = document.querySelector('.clothName4');
const WShose = document.querySelector('.clothName5');

//옷 링크
const clothhref1 = document.getElementById("Item1_link");
const clothhref2 = document.getElementById("Item2_link");
const clothhref3 = document.getElementById("Item3_link");
const clothhref4 = document.getElementById("Item4_link");
const clothhref5 = document.getElementById("Item5_link");


window.addEventListener('load',()=>{
        if (lastData === 'Clear'){
            if(-20<lastTemp<5){
                wHatCloth.textContent = '털모자';
                wTop1Cloth.textContent='롱패딩';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                wHatCloth.textContent = '모자';
                wTop1Cloth.textContent='코트';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                wHatCloth.textContent = '트렌치코트';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                wHatCloth.textContent = '자켓';
                wTop1Cloth.textContent='긴팔 면티';
                WTop2Cloth.textContent='호보백';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='맨투맨';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='면바지';
                WShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 셔츠';
                WTop2Cloth.textContent='라탄백';
                WBottomCloth.textContent='린넨 바지';
                WShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 원피스';
                WTop2Cloth.textContent='';
                WBottomCloth.textContent='청바지';
                WShose.textContent='쪼리';
            }                      
        }
        else if (lastData === 'Rain'){
            if(-20<lastTemp<5){
                wHatCloth.textContent = '털모자';
                wTop1Cloth.textContent='롱패딩';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                wHatCloth.textContent = '모자';
                wTop1Cloth.textContent='코트';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                wHatCloth.textContent = '트렌치코트';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                wHatCloth.textContent = '자켓';
                wTop1Cloth.textContent='긴팔 면티';
                WTop2Cloth.textContent='호보백';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='맨투맨';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='면바지';
                WShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 셔츠';
                WTop2Cloth.textContent='얇은 반팔';
                WBottomCloth.textContent='린넨 바지';
                WShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 원피스';
                WTop2Cloth.textContent='나시';
                WBottomCloth.textContent='청바지';
                WShose.textContent='쪼리';
            }    
         }
         else if (lastData === 'Clouds'){
            if(-20<lastTemp<5){
                wHatCloth.textContent = '털모자';
                wTop1Cloth.textContent='롱패딩';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                wHatCloth.textContent = '모자';
                wTop1Cloth.textContent='코트';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';                
            }
            else if (9<=lastTemp<12){
                wHatCloth.textContent = '트렌치코트';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                wHatCloth.textContent = '자켓';
                wTop1Cloth.textContent='긴팔 면티';
                WTop2Cloth.textContent='호보백';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='맨투맨';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='면바지';
                WShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 셔츠';
                WTop2Cloth.textContent='나시';
                WBottomCloth.textContent='린넨 바지';
                WShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 원피스';
                WTop2Cloth.textContent='';
                WBottomCloth.textContent='';
                WShose.textContent='쪼리';
            }    
         }
         else if (lastData === 'Drizzle'){
            if(-20<lastTemp<5){
                wHatCloth.textContent = '털모자';
                wTop1Cloth.textContent='롱패딩';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                wHatCloth.textContent = '모자';
                wTop1Cloth.textContent='코트';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                wHatCloth.textContent = '트렌치코트';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                wHatCloth.textContent = '자켓';
                wTop1Cloth.textContent='긴팔 면티';
                WTop2Cloth.textContent='호보백';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='맨투맨';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='면바지';
                WShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 셔츠';
                WTop2Cloth.textContent='나시';
                WBottomCloth.textContent='린넨 바지';
                WShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 원피스';
                WTop2Cloth.textContent='나시';
                WBottomCloth.textContent='청바지';
                WShose.textContent='쪼리';
            }    
         }
         else if (lastData === 'Snow'){
            if(-20<lastTemp<5){
                wHatCloth.textContent = '털모자';
                wTop1Cloth.textContent='롱패딩';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                wHatCloth.textContent = '모자';
                wTop1Cloth.textContent='코트';
                WTop2Cloth.textContent='니트';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                wHatCloth.textContent = '트렌치코트';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='슬랙스';
                WShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                wHatCloth.textContent = '자켓';
                wTop1Cloth.textContent='긴팔 면티';
                WTop2Cloth.textContent='호보백';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='맨투맨';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='청바지';
                WShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                wHatCloth.textContent = '캡모자';
                wTop1Cloth.textContent='가디건';
                WTop2Cloth.textContent='반팔티';
                WBottomCloth.textContent='면바지';
                WShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 셔츠';
                WTop2Cloth.textContent='나시';
                WBottomCloth.textContent='린넨 바지';
                WShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                wHatCloth.textContent = '버킷햇';
                wTop1Cloth.textContent='린넨 원피스';
                WTop2Cloth.textContent='나시';
                WBottomCloth.textContent='청바지';
                WShose.textContent='쪼리';
            }    
         }      
})


