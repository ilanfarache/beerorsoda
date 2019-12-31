

//Shortest Word

let string = "aux temps emporte le vent";
minLenght(string);

function minLenght(temps){

	let string_array = temps.split(" ");
	var long =  string_array[0].length;
	for (var i = 0 ; i < string_array.length ; i++) {

		if ( long >  string_array[i].length){

			long = string_array[i].length;
		}  

	}
	return long;

}


//Bus Stop
var bus_stop = [[10,0],[5,7],[4,3]];
busStop(bus_stop);


function busStop(ilan) {



	let count = 0;
	let count2 = 0;


	for (var i = 0 ; i < ilan.length ; i++) {


		ilan[i][0] += count;

		count = ilan[i][0];


	}

	for (var y = 0 ; y < ilan.length ; y++) {


		ilan[y][1] += count2;

		count2 = ilan[y][1];

	}

	var Nbr_people = count - count2;

	return Nbr_people;

}



//Movie Line

let people_in_line = [25, 25, 50, 25, 50, 100, 25, 50, 50, 25, 100, 100, 50, 25, 50];



function PeopleInLine(line) 
{
	let bill_25 = [];
	let bill_50 = [];
	let bill_100 = [];

	for (var i = 0 ; i < line.length; i++) {

		if ( line[i] == 25 ) { bill_25.push(line[i]) }

			if ( line[i] == 50 && bill_25.length == 0 ) return false;

		if ( line[i] == 50 ) { 

			bill_25.pop();
			bill_50.push(line[i]);

		}



		if ( line[i] == 100 ) {

			if ( bill_25.length == 1 || bill_25.length > 1 &&  bill_50.length == 1 ||  bill_50.length > 1)
			{
				bill_25.pop();
				bill_50.pop();
				bill_100.push(line[i]);

			} else{
				if ( bill_25.length >= 3 ) {
					bill_25.pop();
					bill_25.pop();
					bill_25.pop();
					bill_100.push(line[i]);

				}
				else { return false}
			}

	}	


}

return true;

}

PeopleInLine(people_in_line);

//Find the capital letter


let sentence = "i am the one wHo knocks";
capital(sentence);

function capital(letter){
        

        for (var i = 13; i < letter.length; i++){

		 let check = letter.charCodeAt(i);

         if (check <= 90  &&  check >= 65){ return i }
		

		
}


}


//Validate PIN number

let pin = "1e34"
validatePIN(pin);

function validatePIN(code){

if( pin.length == 4 || pin.length == 6 ){

	for (var i = 1 ; i < code.length ; i++) {

		let check = code.charCodeAt(i);

		if (check < 48 || check > 57) {return false}
	}

return true;

}

}

//Beer or Soda

//US – 21
//UK – 18
//SA – 11 

 let customers =  [ [18, "UK"], [19, "US"], [18, "SA"], [21, "US"], [9, "SA"], [17, "UK"] ]

beerOrSoda(customers);

function beerOrSoda(response){

	for (var i = 0 ; i < response.length ; i++) {

		if (response[i][1] == "UK" && response[i][0] >= 18) { response[i] = "Beer"

		     } 

			if (response[i][1] == "US"  && response[i][0] >= 21) {response[i] = "Beer"}

				if (response[i][1] == "SA"  && response[i][0] >= 11) {response[i] = "Beer"} 
		
		        if (response[i] != "Beer") response[i] = "Soda";
		

	}

return response;

}

//PopulationControl 

let p_start = 1000;


console.log(calculateYears(p_start));

function calculateYears(numbers) {

let p_end = 1200;
let years = 0;
let prct = 2/100;
let newArrival = 50;

while ( numbers <= p_end  )
{
numbers =  numbers + numbers * prct + newArrival;
years++;

}
  
  return years
} 



