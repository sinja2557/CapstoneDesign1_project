// 메인에서 받아오는 날씨랑 기온
var lastData = localStorage.getItem('weather');
var lastTemp = localStorage.getItem('tempC');

// 옷이름
const mHatCloth = document.querySelector('.clothName1');
const mTop1Cloth = document.querySelector('.clothName2');
const mTop2Cloth = document.querySelector('.clothName3');
const mBottomCloth = document.querySelector('.clothName4');
const mShose = document.querySelector('.clothName5');

// 옷링크
const link1 = document.getElementById("Item_link1");
const link2 = document.getElementById("Item_link2");
const link3 = document.getElementById("Item_link3");
const link4 = document.getElementById("Item_link4");
const link5 = document.getElementById("Item_link5");

window.addEventListener('load',()=>{
  
        if (lastData === 'Clear'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '비니';
                link1.href ="https://store.musinsa.com/app/goods/1214193";
                mTop1Cloth.textContent='롱패딩';
                link2.href ="https://store.musinsa.com/app/goods/2105483";
                mTop2Cloth.textContent='니트';
                link3.href ="https://store.musinsa.com/app/goods/1599217";
                mBottomCloth.textContent='청바지';
                link4.href ="https://store.musinsa.com/app/goods/890338";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '볼캡';
                link1.href ="https://store.musinsa.com/app/goods/1214106";
                mTop1Cloth.textContent='코트';
                link2.href ="https://store.musinsa.com/app/goods/1609490";
                mTop2Cloth.textContent='맨투맨';
                link3.href ="https://store.musinsa.com/app/goods/2085371";
                mBottomCloth.textContent='조거팬츠';
                link4.href ="";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                link1.href ="";
                mTop1Cloth.textContent='가디건';
                link2.href ="";
                mTop2Cloth.textContent='반팔티';
                link3.href ="";
                mBottomCloth.textContent='슬랙스';
                link4.href ="";
                mShose.textContent='운동화';
                link5.href ="";
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            }                      
        }
        else if (lastData === 'Rain'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '비니';
                link1.href ="https://store.musinsa.com/app/goods/1214193";
                mTop1Cloth.textContent='롱패딩';
                link2.href ="https://store.musinsa.com/app/goods/2105483";
                mTop2Cloth.textContent='니트';
                link3.href ="https://store.musinsa.com/app/goods/1599217";
                mBottomCloth.textContent='청바지';
                link4.href ="https://store.musinsa.com/app/goods/890338";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '볼캡';
                link1.href ="https://store.musinsa.com/app/goods/1214106";
                mTop1Cloth.textContent='코트';
                link2.href ="https://store.musinsa.com/app/goods/1609490";
                mTop2Cloth.textContent='맨투맨';
                link3.href ="https://store.musinsa.com/app/goods/2085371";
                mBottomCloth.textContent='조거팬츠';
                link4.href ="";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            } 
         }
         else if (lastData === 'Clouds'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '비니';
                link1.href ="https://store.musinsa.com/app/goods/1214193";
                mTop1Cloth.textContent='롱패딩';
                link2.href ="https://store.musinsa.com/app/goods/2105483";
                mTop2Cloth.textContent='니트';
                link3.href ="https://store.musinsa.com/app/goods/1599217";
                mBottomCloth.textContent='청바지';
                link4.href ="https://store.musinsa.com/app/goods/890338";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '볼캡';
                link1.href ="https://store.musinsa.com/app/goods/1214106";
                mTop1Cloth.textContent='코트';
                link2.href ="https://store.musinsa.com/app/goods/1609490";
                mTop2Cloth.textContent='맨투맨';
                link3.href ="https://store.musinsa.com/app/goods/2085371";
                mBottomCloth.textContent='조거팬츠';
                link4.href ="";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            } 
         }
         else if (lastData === 'Drizzle'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '비니';
                link1.href ="https://store.musinsa.com/app/goods/1214193";
                mTop1Cloth.textContent='롱패딩';
                link2.href ="https://store.musinsa.com/app/goods/2105483";
                mTop2Cloth.textContent='니트';
                link3.href ="https://store.musinsa.com/app/goods/1599217";
                mBottomCloth.textContent='청바지';
                link4.href ="https://store.musinsa.com/app/goods/890338";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '볼캡';
                link1.href ="https://store.musinsa.com/app/goods/1214106";
                mTop1Cloth.textContent='코트';
                link2.href ="https://store.musinsa.com/app/goods/1609490";
                mTop2Cloth.textContent='맨투맨';
                link3.href ="https://store.musinsa.com/app/goods/2085371";
                mBottomCloth.textContent='조거팬츠';
                link4.href ="";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            }   
         }
         else if (lastData === 'Snow'){
            if(-20<lastTemp<5){
                mHatCloth.textContent = '비니';
                link1.href ="https://store.musinsa.com/app/goods/1214193";
                mTop1Cloth.textContent='롱패딩';
                link2.href ="https://store.musinsa.com/app/goods/2105483";
                mTop2Cloth.textContent='니트';
                link3.href ="https://store.musinsa.com/app/goods/1599217";
                mBottomCloth.textContent='청바지';
                link4.href ="https://store.musinsa.com/app/goods/890338";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (5<=lastTemp<9){
                mHatCloth.textContent = '볼캡';
                link1.href ="https://store.musinsa.com/app/goods/1214106";
                mTop1Cloth.textContent='코트';
                link2.href ="https://store.musinsa.com/app/goods/1609490";
                mTop2Cloth.textContent='맨투맨';
                link3.href ="https://store.musinsa.com/app/goods/2085371";
                mBottomCloth.textContent='조거팬츠';
                link4.href ="";
                mShose.textContent='운동화';
                link5.href ="https://store.musinsa.com/app/goods/810034";
            }
            else if (9<=lastTemp<12){
                mHatCloth.textContent = '트렌치코트';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='슬랙스';
                mShose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                mHatCloth.textContent = '자켓';
                mTop1Cloth.textContent='긴팔 면티';
                mTop2Cloth.textContent='백팩';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='맨투맨';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                mHatCloth.textContent = '캡모자';
                mTop1Cloth.textContent='가디건';
                mTop2Cloth.textContent='반팔티';
                mBottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                mBottomCloth.textContent='린넨 바지';
                mShose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                mHatCloth.textContent = '버킷햇';
                mTop1Cloth.textContent='반팔티';
                mTop2Cloth.textContent='에코백';
                mBottomCloth.textContent='청바지';
                mShose.textContent='쪼리';
            } 
         }
      
})


