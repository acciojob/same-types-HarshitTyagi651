function isSameType(value1, value2) {
  let v1 = Number(value1);
  let v2 = Number(value2);

	if(!isNaN(v1) && !isNaN(v2)){
		return true;
	}
	else if(isNaN(v1) && isNaN(v2)){
		return true
	}
	else{
		return false;
	}
}
// do not change the code below. 
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));


