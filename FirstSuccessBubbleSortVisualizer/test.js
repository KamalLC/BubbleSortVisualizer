
let m=0;
let n=m+1;
let leftMarNote=0;
function sleep(millisecond){
	const date=Date.now();
	var currentDate=null;

	do{
		currentDate=Date.now();
	}while(currentDate-date<millisecond);
}

let arr=[];
let array=[];
let unChangeArray=[];

for (let i=0; i<10; i++){
	let num=Math.floor(Math.random()*400);
	arr.push(num);
	unChangeArray.push(num);
}
// arr.push(310);
// arr.push(320);
// arr.push(330);
// arr.push(390);
// arr.push(340);
// arr.push(350);
// arr.push(300);
// arr.push(360);
// arr.push(370);
// arr.push(380);
// unChangeArray.push(310);
// unChangeArray.push(320);
// unChangeArray.push(330);
// unChangeArray.push(390);
// unChangeArray.push(340);
// unChangeArray.push(350);
// unChangeArray.push(300);
// unChangeArray.push(360);
// unChangeArray.push(370);
// unChangeArray.push(380);
// console.log(arr);
let element=document.getElementById('parent');
// x.innerHTML="KAMAL";

function append(element){
	// element.innerHTML="KAMAL";

	for (let i=0; i<arr.length; i++){
		// sleep(100);
		element.appendChild(array[i]);
	}
}

function appChild(){
	var element=document.getElementById('parent');
	var mar=0;
	for (let i=0; i<10; i++){
		mar=i*35;
		var myDiv=document.createElement("div");
		myDiv.style.height=arr[i]+"px";
		myDiv.innerHTML=arr[i];
		myDiv.style.marginLeft=mar+"px";
		myDiv.classList.add("child");
		array.push(myDiv);
		// document.getElementById('parent').appendChild(myDiv);
	}
	append(element);
	
	// animate(m, n);
}

function swap(a, b){
	var temp=arr[a];
	arr[a]=arr[b];
	arr[b]=temp;
}


async function bubbleSort(){
	const element = document.getElementById('parent');
	// console.log("bubblesort started");
	let first=document.getElementsByClassName("child")[0];
	let second=document.getElementsByClassName("child")[0];
	let temp=0;
	for (let i=0; i<arr.length; i++){
		leftMarNote=0;
		for(let j=0; j<arr.length-1; j++){
			first=document.getElementsByClassName("child")[j];
			second=document.getElementsByClassName("child")[j+1];
			// console.log(first+","+second);
			// var f=Number(first.match(/(\d+)/)[0]);
			// var s=Number(second.match(/(\d+)/)[0]);
			// console.log("f="+f+"s="+s);
			if(arr[j]>arr[j+1]){
				animate(j, j+1);
				
				// sleep(100);
				swap(j, j+1);
				await delay(1);
			}
			
			
			// append(element);
			console.log(arr);
			// sleep(100);
		}
		
	}
}

// appChild();


async function animate(a, b) {
  let id = null;
  const elem1 = array[a];  
  const elem2=array[b]; 
  let marLeft = (a- unChangeArray.indexOf(arr[a]))*35;
  leftMarNote=marLeft+35;
  console.log(marLeft);
  let marRight=(b- unChangeArray.indexOf(arr[b]))*35;
  let rightMarNote=marRight;
  // let A=marLeft+35;
  clearInterval(id);
  id = setInterval(frame, 5);
  console.log("when did i print?:first");
  // while(marLeft != (b-a)*35){

  // }
  // sleep(5000);
  await delay(0.5*(b-a));
  console.log("when did i print?:second");
  function frame() {
    if (marLeft == leftMarNote) {
      clearInterval(id);
    } else {
      marLeft++; 
      if(marRight<rightMarNote+35){
      	marRight--;
      }
      // elem.style.top = pos + "px"; 
      elem1.style.left = marLeft + "px"; 
      elem2.style.left=marRight+"px";
    }
  }
	let newD=array[a];
	array[a]=array[b];
	array[b]=newD;
	// await delay(1);
  m++;
  n++;
  // sleep(5000);
}



//checking async delay
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

// async function myAsyncFunction(){
//     //Do what you want here 
//     console.log("Before the delay")

//     await delay(5);

//     console.log("After the delay")
//     //Do what you want here too

// }

appChild();
// test();

async function test(){
	await delay(1);
animate(1,2);
}