

function tri(ans){
    const add=document.getElementById('divSec');
    const div=document.createElement('div');
    const p=document.createElement('span');

    const pt=document.createElement('span');
    pt.innerText='  Convert to m2';

    p.innerText='      Triangle  '+ans;
    

    div.appendChild(p);
    div.appendChild(pt);
    divSec.appendChild(div);
    
}

document.getElementById('tri').addEventListener('click', function(){
    const tri1Field= document.getElementById('tri1');
    const tri1Value= tri1Field.value;

    const tri2Field= document.getElementById('tri2');
    const tri2Value= tri2Field.value;

    const t1val= parseFloat(tri1Value).toFixed(2);
    const t2val= parseFloat(tri2Value).toFixed(2);
    // console.log(t1val);
    // console.log(t2val);

    const ans= .5*t1val*t2val;
    tri1Field.value='';
    tri2Field.value='';
    // console.log(ans);
    tri(ans);

});