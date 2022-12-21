var varguImazheve=[
    'img1.jpg',
    'img2.jpg',
    'img3.jpg'
];

var index = 0;
const koha = 1500;

function krijoSlider(){
    document.getElementById('slider').src = varguImazheve[index];
    index++;

    if(index == varguImazheve.length){
        index = 0;
    }
    setTimeout('krijoSlider()', koha);
}
krijoSlider();

var varguImazheve1=[
    'makeup1.jpg',
    'makeup2.jpg'
];
var ind = 0;
const k = 1500;

function krijoSlider2(){
    document.getElementById('slider1').src = varguImazheve1[ind];
    ind++;

    if(ind == varguImazheve.length){
        ind = 0;
    }
    setTimeout('krijoSlider2()', k);
}
krijoSlider2();