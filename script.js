var names=new Array();
names[0]="Daniel";
names[1]="Jonny";
names[2]="John";
names[3]="julio";
names[4]="Jose";
names[5]="Franklin";
names[6]="David";
names[7]="Antonio";
names[8]="Polina";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
