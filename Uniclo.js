// 메인에서 받아오는 날씨랑 기온
var lastData = localStorage.getItem('weather');
var lastTemp = localStorage.getItem('tempC');

// 옷이름
const HatCloth = document.querySelector('.clothName1');
const Top1Cloth = document.querySelector('.clothName2');
const Top2Cloth = document.querySelector('.clothName3');
const BottomCloth = document.querySelector('.clothName4');
const Shose = document.querySelector('.clothName5');

window.addEventListener('load',()=>{
        if (lastData === 'Clear'){
            if(-20<lastTemp<5){
                HatCloth.textContent = '털모자';
                Top1Cloth.textContent='롱패딩';
                Top2Cloth.textContent='니트';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                HatCloth.textContent = '모자';
                Top1Cloth.textContent='코트';
                Top2Cloth.textContent='맨투맨';
                BottomCloth.textContent='조거팬츠';
                Shose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                HatCloth.textContent = '트렌치코트';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='슬랙스';
                Shose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                HatCloth.textContent = '자켓';
                Top1Cloth.textContent='긴팔 면티';
                Top2Cloth.textContent='백팩';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='맨투맨';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='면바지';
                Shose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='린넨 셔츠';
                Top2Cloth.textContent='얇은 반팔';
                BottomCloth.textContent='린넨 바지';
                Shose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='반팔티';
                Top2Cloth.textContent='에코백';
                BottomCloth.textContent='청바지';
                Shose.textContent='쪼리';
            }               
        }
        else if (lastData === 'Rain'){
            if(-20<lastTemp<5){
                HatCloth.textContent = '털모자';
                Top1Cloth.textContent='롱패딩';
                Top2Cloth.textContent='니트';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                HatCloth.textContent = '모자';
                Top1Cloth.textContent='코트';
                Top2Cloth.textContent='맨투맨';
                BottomCloth.textContent='조거팬츠';
                Shose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                HatCloth.textContent = '트렌치코트';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='슬랙스';
                Shose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                HatCloth.textContent = '자켓';
                Top1Cloth.textContent='긴팔 면티';
                Top2Cloth.textContent='백팩';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='맨투맨';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='면바지';
                Shose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='린넨 셔츠';
                mTop2Cloth.textContent='얇은 반팔';
                BottomCloth.textContent='린넨 바지';
                Shose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='반팔티';
                Top2Cloth.textContent='에코백';
                BottomCloth.textContent='청바지';
                Shose.textContent='쪼리';
            } 
         }
         else if (lastData === 'Clouds'){
            if(-20<lastTemp<5){
                HatCloth.textContent = '털모자';
                Top1Cloth.textContent='롱패딩';
                Top2Cloth.textContent='니트';
                BottomCloth.textContent='청바지';
                mShose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                HatCloth.textContent = '모자';
                Top1Cloth.textContent='코트';
                Top2Cloth.textContent='맨투맨';
                BottomCloth.textContent='조거팬츠';
                Shose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                HatCloth.textContent = '트렌치코트';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='슬랙스';
                Shose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                HatCloth.textContent = '자켓';
                Top1Cloth.textContent='긴팔 면티';
                Top2Cloth.textContent='백팩';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='맨투맨';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='면바지';
                Shose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='린넨 셔츠';
                Top2Cloth.textContent='얇은 반팔';
                BottomCloth.textContent='린넨 바지';
                Shose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='반팔티';
                Top2Cloth.textContent='에코백';
                BottomCloth.textContent='청바지';
                Shose.textContent='쪼리';
            } 
         }
         else if (lastData === 'Drizzle'){
            if(-20<lastTemp<5){
                HatCloth.textContent = '털모자';
                Top1Cloth.textContent='롱패딩';
                Top2Cloth.textContent='니트';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                HatCloth.textContent = '모자';
                Top1Cloth.textContent='코트';
                Top2Cloth.textContent='맨투맨';
                BottomCloth.textContent='조거팬츠';
                Shose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                HatCloth.textContent = '트렌치코트';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='슬랙스';
                Shose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                HatCloth.textContent = '자켓';
                Top1Cloth.textContent='긴팔 면티';
                Top2Cloth.textContent='백팩';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='맨투맨';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='면바지';
                mShose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='린넨 셔츠';
                Top2Cloth.textContent='얇은 반팔';
                BottomCloth.textContent='린넨 바지';
                Shose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='반팔티';
                Top2Cloth.textContent='에코백';
                BottomCloth.textContent='청바지';
                Shose.textContent='쪼리';
            }   
         }
         else if (lastData === 'Snow'){
            if(-20<lastTemp<5){
                HatCloth.textContent = '털모자';
                Top1Cloth.textContent='롱패딩';
                Top2Cloth.textContent='니트';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (5<=lastTemp<9){
                HatCloth.textContent = '모자';
                Top1Cloth.textContent='코트';
                Top2Cloth.textContent='맨투맨';
                BottomCloth.textContent='조거팬츠';
                Shose.textContent='운동화';
            }
            else if (9<=lastTemp<12){
                HatCloth.textContent = '트렌치코트';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='슬랙스';
                Shose.textContent='운동화';
            }
            else if (12<=lastTemp<17){
                HatCloth.textContent = '자켓';
                Top1Cloth.textContent='긴팔 면티';
                Top2Cloth.textContent='백팩';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (17<=lastTemp<20){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='맨투맨';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='청바지';
                Shose.textContent='운동화';
            }
            else if (20<=lastTemp<23){
                HatCloth.textContent = '캡모자';
                Top1Cloth.textContent='가디건';
                Top2Cloth.textContent='반팔티';
                BottomCloth.textContent='면바지';
                Shose.textContent='운동화';
            }
            else if (23<=lastTemp<28){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='린넨 셔츠';
                Top2Cloth.textContent='얇은 반팔';
                BottomCloth.textContent='린넨 바지';
                Shose.textContent='쪼리';
            }
            else if (28<=lastTemp){
                HatCloth.textContent = '버킷햇';
                Top1Cloth.textContent='반팔티';
                Top2Cloth.textContent='에코백';
                BottomCloth.textContent='청바지';
                Shose.textContent='쪼리';
            } 
         }      
})


