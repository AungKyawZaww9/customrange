const range = document.getElementById('range');
// console.log(range);

range.addEventListener('input',(e)=>{
    // console.log("hello");
    // console.log(e);
    // console.log(e.target);

    const value = +e.target.value;
    // console.log(typeof(value));

    const label = e.target.nextElementSibling;

    const rangewidth = getComputedStyle(e.target).getPropertyValue('width');
    // console.log(rangewidth);
    // console.log(rangewidth.length);


    const labewidth = getComputedStyle(label).getPropertyValue('width');
    // console.log(labewidth);
    // console.log(labewidth.length);

    const numrangewidth = rangewidth.substring(0,rangewidth.length-2);
    // console.log(numrangewidth);

    const numlabelwidth = labewidth.substring(0,labewidth.length-2);
    // console.log(numlabelwidth);


    const min = +e.target.min;
    const max = +e.target.max;

    // console.log(min,max);

    // const leftright = value * (numrangewidth / max) - numlabelwidth / 2;
    const leftright = value * (numrangewidth / max) - (numlabelwidth / 2) + scale(value,min,max,10,-10);
    // console.log(leftright);

    label.style.left = `${leftright}px`;
    label.innerText = value;

});

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}
