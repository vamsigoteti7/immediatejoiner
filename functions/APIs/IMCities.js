const { db } = require('../util/admin');

exports.postCities = (request, response) => {

	var batch = db.batch();

	const array = [

		{
			city: 'Bhandup',
			countryid: 2
		},
		{
			city: 'Delhi',
			countryid: 2
		},
		{
			city: 'Bangalore',
			countryid: 2
		},
		{
			city: 'Pune',
			countryid: 2
		},
		{
			city: 'Nagpur',
			countryid: 2
		},
		{
			city: 'Lucknow',
			countryid: 2
		},
		{
			city: 'Vadodara',
			countryid: 2
		},
		{
			city: 'Indore',
			countryid: 2
		},
		{
			city: 'Jalalpur',
			countryid: 2
		},
		{
			city: 'Bhopal',
			countryid: 2
		},
		{
			city: 'Kolkata',
			countryid: 2
		},
		{
			city: 'Kanpur',
			countryid: 2
		},
		{
			city: 'New Delhi',
			countryid: 2
		},
		{
			city: 'Faridabad',
			countryid: 2
		},
		{
			city: 'Rajkot',
			countryid: 2
		},
		{
			city: 'Ghaziabad',
			countryid: 2
		},
		{
			city: 'Chennai',
			countryid: 2
		},
		{
			city: 'Meerut',
			countryid: 2
		},
		{
			city: 'Agra',
			countryid: 2
		},
		{
			city: 'Jaipur',
			countryid: 2
		},
		{
			city: 'Jabalpur',
			countryid: 2
		},
		{
			city: 'Varanasi',
			countryid: 2
		},
		{
			city: 'Allahabad',
			countryid: 2
		},
		{
			city: 'Hyderabad',
			countryid: 2
		},
		{
			city: 'Noida',
			countryid: 2
		},
		{
			city: 'Howrah',
			countryid: 2
		},
		{
			city: 'Thane',
			countryid: 2
		},
		{
			city: 'Patiala',
			countryid: 2
		},
		{
			city: 'Chakan',
			countryid: 2
		},
		{
			city: 'Ahmedabad',
			countryid: 2
		},
		{
			city: 'Manipala',
			countryid: 2
		},
		{
			city: 'Mangalore',
			countryid: 2
		},
		{
			city: 'Panvel',
			countryid: 2
		},
		{
			city: 'Udupi',
			countryid: 2
		},
		{
			city: 'Rishikesh',
			countryid: 2
		},
		{
			city: 'Gurgaon',
			countryid: 2
		},
		{
			city: 'Mathura',
			countryid: 2
		},
		{
			city: 'Shahjahanpur',
			countryid: 2
		},
		{
			city: 'Bagpat',
			countryid: 2
		},
		{
			city: 'Sriperumbudur',
			countryid: 2
		},
		{
			city: 'Chandigarh',
			countryid: 2
		},
		{
			city: 'Ludhiana',
			countryid: 2
		},
		{
			city: 'Palakkad',
			countryid: 2
		},
		{
			city: 'Kalyan',
			countryid: 2
		},
		{
			city: 'Valsad',
			countryid: 2
		},
		{
			city: 'Ulhasnagar',
			countryid: 2
		},
		{
			city: 'Bhiwani',
			countryid: 2
		},
		{
			city: 'Shimla',
			countryid: 2
		},
		{
			city: 'Dehradun',
			countryid: 2
		},
		{
			city: 'Patna',
			countryid: 2
		},
		{
			city: 'Unnao',
			countryid: 2
		},
		{
			city: 'Tiruvallur',
			countryid: 2
		},
		{
			city: 'Kanchipuram',
			countryid: 2
		},
		{
			city: 'Jamshedpur',
			countryid: 2
		},
		{
			city: 'Gwalior',
			countryid: 2
		},
		{
			city: 'Karur',
			countryid: 2
		},
		{
			city: 'Erode',
			countryid: 2
		},
		{
			city: 'Gorakhpur',
			countryid: 2
		},
		{
			city: 'Ooty',
			countryid: 2
		},
		{
			city: 'Haldwani',
			countryid: 2
		},
		{
			city: 'Bikaner',
			countryid: 2
		},
		{
			city: 'Puducherry',
			countryid: 2
		},
		{
			city: 'Nalbari',
			countryid: 2
		},
		{
			city: 'Bellary',
			countryid: 2
		},
		{
			city: 'Vellore',
			countryid: 2
		},
		{
			city: 'Naraina',
			countryid: 2
		},
		{
			city: 'Mandi',
			countryid: 2
		},
		{
			city: 'Rupnagar',
			countryid: 2
		},
		{
			city: 'Jodhpur',
			countryid: 2
		},
		{
			city: 'Roorkee',
			countryid: 2
		},
		{
			city: 'Aligarh',
			countryid: 2
		},
		{
			city: 'Indraprast',
			countryid: 2
		},
		{
			city: 'Karnal',
			countryid: 2
		},
		{
			city: 'Tanda',
			countryid: 2
		},
		{
			city: 'Amritsar',
			countryid: 2
		},
		{
			city: 'Raipur',
			countryid: 2
		},
		{
			city: 'Pilani',
			countryid: 2
		},
		{
			city: 'Bilaspur',
			countryid: 2
		},
		{
			city: 'Srinagar',
			countryid: 2
		},
		{
			city: 'Guntur',
			countryid: 2
		},
		{
			city: 'Kakinada',
			countryid: 2
		},
		{
			city: 'Warangal',
			countryid: 2
		},
		{
			city: 'Tirumala - Tirupati',
			countryid: 2
		},
		{
			city: 'Nizamabad',
			countryid: 2
		},
		{
			city: 'Kadapa',
			countryid: 2
		},
		{
			city: 'Kuppam',
			countryid: 2
		},
		{
			city: 'Anantpur',
			countryid: 2
		},
		{
			city: 'Nalgonda',
			countryid: 2
		},
		{
			city: 'Potti',
			countryid: 2
		},
		{
			city: 'Nellore',
			countryid: 2
		},
		{
			city: 'Rajahmundry',
			countryid: 2
		},
		{
			city: 'Bagalkot',
			countryid: 2
		},
		{
			city: 'Kurnool',
			countryid: 2
		},
		{
			city: 'Secunderabad',
			countryid: 2
		},
		{
			city: 'Mahatma',
			countryid: 2
		},
		{
			city: 'Bharuch',
			countryid: 2
		},
		{
			city: 'Miraj',
			countryid: 2
		},
		{
			city: 'Nanded',
			countryid: 2
		},
		{
			city: 'Anand',
			countryid: 2
		},
		{
			city: 'Gandhinagar',
			countryid: 2
		},
		{
			city: 'Bhavnagar',
			countryid: 2
		},
		{
			city: 'Morvi',
			countryid: 2
		},
		{
			city: 'Aurangabad',
			countryid: 2
		},
		{
			city: 'Modasa',
			countryid: 2
		},
		{
			city: 'Patan',
			countryid: 2
		},
		{
			city: 'Solapur',
			countryid: 2
		},
		{
			city: 'Kolhapur',
			countryid: 2
		},
		{
			city: 'Junagadh',
			countryid: 2
		},
		{
			city: 'Akola',
			countryid: 2
		},
		{
			city: 'Bhuj',
			countryid: 2
		},
		{
			city: 'Karad',
			countryid: 2
		},
		{
			city: 'Jalgaon Jamod',
			countryid: 2
		},
		{
			city: 'Chandrapur',
			countryid: 2
		},
		{
			city: 'Maharaj',
			countryid: 2
		},
		{
			city: 'Dhule',
			countryid: 2
		},
		{
			city: 'Ponda',
			countryid: 2
		},
		{
			city: 'Dahod',
			countryid: 2
		},
		{
			city: 'Navsari',
			countryid: 2
		},
		{
			city: 'Panjim',
			countryid: 2
		},
		{
			city: 'Patel',
			countryid: 2
		},
		{
			city: 'Nashik',
			countryid: 2
		},
		{
			city: 'Amravati',
			countryid: 2
		},
		{
			city: 'Somnath',
			countryid: 2
		},
		{
			city: 'Ganpat',
			countryid: 2
		},
		{
			city: 'Karwar',
			countryid: 2
		},
		{
			city: 'Davangere',
			countryid: 2
		},
		{
			city: 'Raichur',
			countryid: 2
		},
		{
			city: 'Nagara',
			countryid: 2
		},
		{
			city: 'Kushalnagar',
			countryid: 2
		},
		{
			city: 'Hassan',
			countryid: 2
		},
		{
			city: 'Hubli',
			countryid: 2
		},
		{
			city: 'Bidar',
			countryid: 2
		},
		{
			city: 'Belgaum',
			countryid: 2
		},
		{
			city: 'Mysore',
			countryid: 2
		},
		{
			city: 'Dharwad',
			countryid: 2
		},
		{
			city: 'Kolar',
			countryid: 2
		},
		{
			city: 'Tumkūr',
			countryid: 2
		},
		{
			city: 'Tiruchi',
			countryid: 2
		},
		{
			city: 'Thiruvananthapuram',
			countryid: 2
		},
		{
			city: 'Kozhikode',
			countryid: 2
		},
		{
			city: 'Thrissur',
			countryid: 2
		},
		{
			city: 'Madurai',
			countryid: 2
		},
		{
			city: 'Thalassery',
			countryid: 2
		},
		{
			city: 'Kannur',
			countryid: 2
		},
		{
			city: 'Karaikudi',
			countryid: 2
		},
		{
			city: 'Thanjavur',
			countryid: 2
		},
		{
			city: 'Manor',
			countryid: 2
		},
		{
			city: 'Idukki',
			countryid: 2
		},
		{
			city: 'Thiruvarur',
			countryid: 2
		},
		{
			city: 'Alappuzha',
			countryid: 2
		},
		{
			city: 'Gandhigram',
			countryid: 2
		},
		{
			city: 'Kochi',
			countryid: 2
		},
		{
			city: 'Annamalainagar',
			countryid: 2
		},
		{
			city: 'Amet',
			countryid: 2
		},
		{
			city: 'Kottarakara',
			countryid: 2
		},
		{
			city: 'Kottayam',
			countryid: 2
		},
		{
			city: 'Tirunelveli',
			countryid: 2
		},
		{
			city: 'Mohan',
			countryid: 2
		},
		{
			city: 'Salem',
			countryid: 2
		},
		{
			city: 'Attingal',
			countryid: 2
		},
		{
			city: 'Chitra',
			countryid: 2
		},
		{
			city: 'Chengannur',
			countryid: 2
		},
		{
			city: 'Guwahati',
			countryid: 2
		},
		{
			city: 'Kalam',
			countryid: 2
		},
		{
			city: 'Ranchi',
			countryid: 2
		},
		{
			city: 'Shillong',
			countryid: 2
		},
		{
			city: 'Gangtok',
			countryid: 2
		},
		{
			city: 'Srikakulam',
			countryid: 2
		},
		{
			city: 'Tezpur',
			countryid: 2
		},
		{
			city: 'Bhubaneswar',
			countryid: 2
		},
		{
			city: 'Imphal',
			countryid: 2
		},
		{
			city: 'Sundargarh',
			countryid: 2
		},
		{
			city: 'Arunachal',
			countryid: 2
		},
		{
			city: 'Manipur',
			countryid: 2
		},
		{
			city: 'Bihar',
			countryid: 2
		},
		{
			city: 'Sharif',
			countryid: 2
		},
		{
			city: 'Mandal',
			countryid: 2
		},
		{
			city: 'Dibrugarh',
			countryid: 2
		},
		{
			city: 'Gaya',
			countryid: 2
		},
		{
			city: 'Bhagalpur',
			countryid: 2
		},
		{
			city: 'Kunwar',
			countryid: 2
		},
		{
			city: 'Barddhaman',
			countryid: 2
		},
		{
			city: 'Jadabpur',
			countryid: 2
		},
		{
			city: 'Kalyani',
			countryid: 2
		},
		{
			city: 'Cuttack',
			countryid: 2
		},
		{
			city: 'Barpeta',
			countryid: 2
		},
		{
			city: 'Jorhat',
			countryid: 2
		},
		{
			city: 'Kharagpur',
			countryid: 2
		},
		{
			city: 'Medinipur',
			countryid: 2
		},
		{
			city: 'Agartala',
			countryid: 2
		},
		{
			city: 'Saranga',
			countryid: 2
		},
		{
			city: 'Machilipatnam',
			countryid: 2
		},
		{
			city: 'Dhanbad',
			countryid: 2
		},
		{
			city: 'Silchar',
			countryid: 2
		},
		{
			city: 'Dumka',
			countryid: 2
		},
		{
			city: 'Kokrajhar',
			countryid: 2
		},
		{
			city: 'Bankura',
			countryid: 2
		},
		{
			city: 'Jalpaiguri',
			countryid: 2
		},
		{
			city: 'Durgapur',
			countryid: 2
		},
		{
			city: 'Kalinga',
			countryid: 2
		},
		{
			city: 'Palampur',
			countryid: 2
		},
		{
			city: 'Jammu',
			countryid: 2
		},
		{
			city: 'Dwarka',
			countryid: 2
		},
		{
			city: 'Faridkot',
			countryid: 2
		},
		{
			city: 'Udaipur',
			countryid: 2
		},
		{
			city: 'Raigarh',
			countryid: 2
		},
		{
			city: 'Hisar',
			countryid: 2
		},
		{
			city: 'Solan',
			countryid: 2
		},
		{
			city: 'Ajmer',
			countryid: 2
		},
		{
			city: 'Lala',
			countryid: 2
		},
		{
			city: 'Gurdaspur',
			countryid: 2
		},
		{
			city: 'Sultanpur',
			countryid: 2
		},
		{
			city: 'Jhansi',
			countryid: 2
		},
		{
			city: 'Vidisha',
			countryid: 2
		},
		{
			city: 'Jagdalpur',
			countryid: 2
		},
		{
			city: 'Dipas',
			countryid: 2
		},
		{
			city: 'Sawi',
			countryid: 2
		},
		{
			city: 'Etawah',
			countryid: 2
		},
		{
			city: 'Saharanpur',
			countryid: 2
		},
		{
			city: 'Ujjain',
			countryid: 2
		},
		{
			city: 'Kangra',
			countryid: 2
		},
		{
			city: 'Bhilai',
			countryid: 2
		},
		{
			city: 'Rohtak',
			countryid: 2
		},
		{
			city: 'Haryana',
			countryid: 2
		},
		{
			city: 'Ambala',
			countryid: 2
		},
		{
			city: 'Bareilly',
			countryid: 2
		},
		{
			city: 'Bhawan',
			countryid: 2
		},
		{
			city: 'Bhoj',
			countryid: 2
		},
		{
			city: 'Kapurthala town',
			countryid: 2
		},
		{
			city: 'Sangrur',
			countryid: 2
		},
		{
			city: 'Pusa',
			countryid: 2
		},
		{
			city: 'Sagar',
			countryid: 2
		},
		{
			city: 'Rewa',
			countryid: 2
		},
		{
			city: 'Rampur',
			countryid: 2
		},
		{
			city: 'Bhadohi',
			countryid: 2
		},
		{
			city: 'Cuddalore',
			countryid: 2
		},
		{
			city: 'Khopoli',
			countryid: 2
		},
		{
			city: 'Bhiwandi',
			countryid: 2
		},
		{
			city: 'Vasai',
			countryid: 2
		},
		{
			city: 'Badlapur',
			countryid: 2
		},
		{
			city: 'Sambalpur',
			countryid: 2
		},
		{
			city: 'Raurkela',
			countryid: 2
		},
		{
			city: 'Brahmapur',
			countryid: 2
		},
		{
			city: 'Visnagar',
			countryid: 2
		},
		{
			city: 'Surendranagar',
			countryid: 2
		},
		{
			city: 'Ankleshwar',
			countryid: 2
		},
		{
			city: 'Dahanu',
			countryid: 2
		},
		{
			city: 'Silvassa',
			countryid: 2
		},
		{
			city: 'Jamnagar',
			countryid: 2
		},
		{
			city: 'Dhansura',
			countryid: 2
		},
		{
			city: 'Muzaffarpur',
			countryid: 2
		},
		{
			city: 'Wardha',
			countryid: 2
		},
		{
			city: 'Bodhan',
			countryid: 2
		},
		{
			city: 'Parappanangadi',
			countryid: 2
		},
		{
			city: 'Malappuram',
			countryid: 2
		},
		{
			city: 'Vizianagaram',
			countryid: 2
		},
		{
			city: 'Mavelikara',
			countryid: 2
		},
		{
			city: 'Pathanamthitta',
			countryid: 2
		},
		{
			city: 'Satara',
			countryid: 2
		},
		{
			city: 'Janjgir',
			countryid: 2
		},
		{
			city: 'Gold',
			countryid: 2
		},
		{
			city: 'Himatnagar',
			countryid: 2
		},
		{
			city: 'Bodinayakkanur',
			countryid: 2
		},
		{
			city: 'Gandhidham',
			countryid: 2
		},
		{
			city: 'Mahabalipuram',
			countryid: 2
		},
		{
			city: 'Nadiad',
			countryid: 2
		},
		{
			city: 'Virar',
			countryid: 2
		},
		{
			city: 'GBahadurgarhold',
			countryid: 2
		},
		{
			city: 'Kaithal',
			countryid: 2
		},
		{
			city: 'Siliguri',
			countryid: 2
		},
		{
			city: 'Tiruppur',
			countryid: 2
		},
		{
			city: 'Ernakulam',
			countryid: 2
		},
		{
			city: 'Jalandhar',
			countryid: 2
		},
		{
			city: 'Barakpur',
			countryid: 2
		},
		{
			city: 'Kavaratti',
			countryid: 2
		},
		{
			city: 'Ratnagiri',
			countryid: 2
		},
		{
			city: 'Moga',
			countryid: 2
		},
		v
		{
			city: 'Hansi',
			countryid: 2
		},
		{
			city: 'Sonipat',
			countryid: 2
		},
		{
			city: 'Bandra',
			countryid: 2
		},
		{
			city: 'Aizawl',
			countryid: 2
		},
		{
			city: 'Itanagar',
			countryid: 2
		},
		{
			city: 'Nagar',
			countryid: 2
		},
		{
			city: 'Ghatkopar',
			countryid: 2
		},
		{
			city: 'Chen',
			countryid: 2
		},
		{
			city: 'Powai',
			countryid: 2
		},
		{
			city: 'Bhimavaram',
			countryid: 2
		},
		{
			city: 'Bhongir',
			countryid: 2
		},
		{
			city: 'Medak',
			countryid: 2
		},
		{
			city: 'Alipur',
			countryid: 2
		},
		{
			city: 'Moradabad',
			countryid: 2
		},
		{
			city: 'Sangli',
			countryid: 2
		},
		{
			city: 'Mancherial',
			countryid: 2
		},
		{
			city: 'Markapur',
			countryid: 2
		},
		{
			city: 'Vijayawada',
			countryid: 2
		},
		{
			city: 'Narsapur',
			countryid: 2
		},
		{
			city: 'Karimnagar',
			countryid: 2
		},
		, "", "", "", "",
		"", "", "", "", "Ichalkaranji", "Devgarh", "Yavatmal", "Hinganghat", "Madgaon",
		"Verna", "Katra", "Bilaspur", "Uttarkashi", "Muktsar", "Bhatinda", "Pathankot", "Khatauli", "Vikasnagar",
		"Kollam", "Kovilpatti", "Kovvur", "Paloncha", "Vasco", "Alwar", "Bijapur", "Tinsukia", "Ratlam", "Kalka",
		"Ladwa", "Rajpura", "Batala", "Hoshiarpur", "Katni", "Bhilwara", "Jhajjar", "Lohaghat", "Mohali", "Dhuri",
		"Thoothukudi", "Sivakasi", "Coonoor", "Shimoga", "Kayamkulam", "Namakkal", "Dharmapuri", "Aluva", "Antapur", "Tanuku", 
		"Eluru", "Balasore", "Hingoli", "Quepem", "Assagao", "Betim", "Cuncolim", "Ahmednagar", "Goa", "Caranzalem", "Chopda", "Petlad", "Raipur", "Villupuram", "Shoranur", "Dasua", "Gonda", "Yadgir", "Palladam", "Nuzvid",
		 "Kasaragod", "Paonta Sahib", "Sarangi", "Anantapur", "Kumar", "Kaul", "Panipat", 
		"Uppal", "Teri", "Tiruvalla", "Jamal", "Chakra", "Narasaraopet", "Dharamsala", "Ranjan", "Garhshankar", "Haridwar", "Chinchvad", "Narela", "Aurangabad", "Sion", "Kalamboli", "Chittoor", 
		"Wellington", "Nagapattinam", "Karaikal", "Pollachi", "Thenkasi", "Aranmula", "Koni", "Ariyalur", "Ranippettai", "Kundan", "Lamba Harisingh",
		 "Surana", "Ghana", "Lanka", "Kataria", "Kotian", "Khan", "Salt Lake City", "Bala", "Vazhakulam", "Paravur", "Nabha", "Ongole", "Kaladi",
		 "Jajpur", "Thenali", "Mohala", "Mylapore", "Bank", "Khammam", "Ring", "Maldah", "Kavali", "Andheri", "Baddi",
		 "Mahesana", "Nila", "Gannavaram", "Cumbum", "Belapur", "Phagwara", "Rander", "Siuri", "Bulandshahr", "Bilimora", "Guindy", "Pitampura", "Baharampur", "Dadri",
		 "Boisar", "Shiv", "Multi", "Bhadath", "Ulubari", "Palghar", "Puras", "Sikka", "Saha", "Godhra", "Dam Dam", "Ekkattuthangal", "Sahibabad", 
		"Kalol", "Bardoli", "Wai", "Shirgaon", "Nehra", "Mangalagiri", "Latur", "Kottakkal", "Rewari", "Ponnani", "Narayangaon", "Hapur", "Kalpetta",
		 "Khurja", "Ramnagar", "Neral", "Sendhwa", "Talegaon Dabhade", "Kargil", "Manali", "Jalalabad", "Palani", "Sirkazhi", 
		"Krishnagiri", "Hiriyur", "Muzaffarnagar", "Kashipur", "Gampalagudem", "Siruseri", "Manjeri", "Raniganj", 
		"Mahim", "Bhusawal", "Tirur", "Sattur", "Angul", "Puri", "Khurda", "Dharavi", "Ambur", "Vashi",
		 "Arch", "Colaba", "Hosur", "Kota", "Hugli", "Anantnag", "Murshidabad", "Jharsuguda", "Jind", "Neyveli", 
		"Vaniyambadi", "Srikalahasti", "Liluah", "Pali", "Bokaro", "Sidhi", "Asansol", "Darjeeling", "Kohima", "Shahdara",
		 "Chandannagar", "Nadgaon", "Haripad", "Sitapur", "Vapi", "Bambolim", "Baidyabati", "Connaught Place", "Singtam", 
		"Shyamnagar", "Sikar", "Choolai", "Mayapur", "Puruliya", "Habra", "Kanchrapara", "Goregaon", "Tiptur", "Kalpakkam", "Serampore", "Konnagar",
		 "Port Blair", "Canning", "Mahad", "Alibag", "Pimpri", "Panchgani", "Karjat", "Vaikam", "Mhow", "Lakhimpur", "Madhoganj",
		 "Kheri", "Gudivada", "Avanigadda", "Nayagarh", "Bemetara", "Bhatapara", "Ramgarh", "Dhubri", "Goshaingaon", "Bellare", "Puttur",
		 "Narnaul", "Porbandar", "Keshod", "Dhrol", "Kailaras", "Morena", "Deolali", "Banda", "Orai", "Fatehpur", 
		"Mirzapur", "Adilabad", "Pithapuram", "Ramavaram", "Amalapuram", "Champa", "Ambikapur", "Korba", "Pehowa", "Yamunanagar", 
		"Shahabad", "Hamirpur", "Gulbarga", "Sagar", "Bhadravati", "Sirsi", "Honavar", "Siruguppa", "Koppal", "Gargoti", 
		"Kankauli", "Jalna", "Parbhani", "Koraput", "Barpali", "Jaypur", "Banswara", "Tindivanam", "Mettur",
		 "Srirangam", "Deoria", "Basti", "Padrauna", "Budaun", "Bolpur", "Gujrat", "Balurghat", "Binnaguri", "Guruvayur", 
		"Chandauli", "Madikeri", "Piduguralla", "Vinukonda", "Berasia", "Sultans Battery", "Ramanagaram", "Angadipuram", 
		"Mattanur", "Gobichettipalayam", "Banga", "Sibsagar", "Namrup", "North Lakhimpur", "Dhenkanal", "Karanja", "Cheyyar", 
		"Vandavasi", "Arakkonam", "Tiruvannamalai", "Akividu", "Tadepallegudem", "Madanapalle", "Puttur", "Edavanna", "Kodungallur", 
		"Marmagao", "Sanquelim", "Sakri", "Shahdol", "Satna", "Thasra", "Bundi", "Kishangarh", "Firozpur", "Kot Isa Khan", "Barnala", 
		"Sunam", "Pithoragarh", "Jaspur", "Jhargram", "Dimapur", "Churachandpur", "Raxaul", "Motihari", "Munger", "Purnea", "Mannargudi",
		 "Kumbakonam", "Eral", "Nagercoil", "Kanniyakumari", "Ramanathapuram", "Sivaganga", "Rajapalaiyam", "Srivilliputhur", 
		"Suratgarh", "Gohana", "Sirsa", "Fatehabad", "Nurpur", "Chamba", "Khergam", "Dindigul", "Pudukkottai", "Kaimganj", 
		"Tarn Taran", "Khanna", "Irinjalakuda", "Sehore", "Parra", "Dicholi", "Chicalim", "Saligao", "Changanacheri", "Igatpuri", 
		"Sangamner", "Ganganagar", "Kanhangad", "Chidambaram", "Chittur", "Nilambur", "Arvi", "Jalesar", "Kasganj", 
		"Chandausi", "Beawar", "Bharatpur", "Kathua", "Chalisgaon", "Karamsad", "Peranampattu", "Arani", "Payyanur", 
		"Pattambi", "Pattukkottai", "Pakala", "Vikarabad", "Bhatkal", "Rupnarayanpur", "Kulti", "Koch Bihar", "Nongstoin", "Budbud", 
		"Balangir", "Kharar", "Mukerian", "Mansa", "Punalur", "Mandya", "Nandyal", "Dhone", "Candolim", "Aldona",
		 "Solim", "Daman", "Koothanallur", "Sojat", "Alanallur", "Kagal", "Jhunjhunun", "Sirhind", "Kurali", "Khinwara", "Machhiwara", 
		"Talwandi Sabo", "Malpur", "Dhar", "Medarametla", "Pileru", "Yercaud", "Ottappalam", "Alangulam", "Palus", "Chiplun", "Durg", "Damoh", "Ambarnath", 
		"Haveri", "Mundgod", "Mandvi", "Behala", "Fort", "Bela", "Balana", "Odhan", "Mawana", "Firozabad", "Bichpuri", "Almora", "Pauri", "Azamgarh", "Phaphamau", 
		"Nongpoh", "Gangrar", "Jhalawar", "Nathdwara", "Jaisalmer", "Pushkar", "Sirohi", "Baroda", "Ambah", "Ambejogai", "Ambad",
		 "Osmanabad", "Betalbatim", "Gangapur", "Dindori", "Yeola", "Pandharpur", "Neri", "Umred", "Patelguda", "Patancheru", 
		"Singarayakonda", "Peddapuram", "Gadag", "Chikmagalūr", "Chikodi", "Amer", "Chintamani", "Tambaram", "Palayam", "Karamadai", "Omalur", "Kuzhithurai", "Faizabad",
		 "Thirumangalam", "Kodaikanal", "Devipattinam", "Dharapuram", "Rudrapur", "Talcher", "Haldia", "Karsiyang", "Sandur", "Bapatla", 
		"Shamsabad", "Kandi", "Ramapuram", "Anchal", "Trimbak", "Calangute", "Arpora", "Khargone", "Mandla",
		 "Kalan", "Pachmarhi", "Dhamtari", "Kumhari", "Aundh", "Tala", "Tuljapur", "Botad", "Sidhpur", "Sanand", "Nagwa", "Mussoorie", "Vadamadurai",
		 "Sholavandan", "Pochampalli", "Perundurai", "Lalgudi", "Ponneri", "Mount Abu", "Vadner", "Shanti Grama", "Nalagarh", "Pahalgam",
		 "Dinanagar", "Jatani", "Ganga", "Barmer", "Hoshangabad", "Khajuraho Group of Monuments", "Betul", "Sangola", "Tirumala", "Mirza Murad", "Attur", 
		"Budha", "Pala", "Tonk", "Koni", "Rajpur", "Shrigonda", "Hazaribagh", "Nagaur", "Mandapeta", "Nabadwip", "Nandurbar", "Nazira", 
		"Kasia", "Bargarh", "Kollegal", "Shahkot", "Jagraon", "Channapatna", "Madurantakam", "Kamalpur", "Ranaghat", "Mundra", 
		"Mashobra", "Rama", "Chirala", "Bawana", "Dhaka", "Mahal", "Chitradurga", "Mandsaur", "Dewas", "Sachin", 
		"Andra", "Kalkaji Devi", "Pilkhuwa", "Mehra", "Chhachhrauli", "Samastipur", "Bangaon", "Ghatal", "Jayanti", "Belgharia", "Kamat", "Dhariwal",
		 "Morinda", "Kottagudem", "Suriapet", "Mahesh", "Sirwani", "Kanakpura", "Mahajan", "Sodhi", "Chand", "Nagal", "Hong", "Raju", 
		"Tikamgarh", "Parel", "Jaynagar", "Mill", "Khambhat", "Ballabgarh", "Begusarai", "Shahapur", "Banka", "Golaghat", "Palwal", 
		"Kalra", "Chandan", "Maru", "Nanda", "Chopra", "Kasal", "Rana", "Chetan", "Charu", "Arora", "Chhabra", 
		"Bishnupur", "Manu", "Karimganj", "Ellora Caves", "Adwani", "Amreli", "Soni", "Sarwar", "Balu", "Rawal", 
		"Darsi", "Nandigama", "Mathan", "Panchal", "Jha Jha", "Hira", "Manna", "Amal", 
		"Kheda", "Abdul", "Roshan", "Bhandari", "Binavas", "Hari", "Nandi",
		 "Rajapur", "Suman", "Sakri", "Khalapur", "Dangi", "Thiruthani", "Bawan", "Basu", "Kosamba", "Medchal", 
		"Kakdwip", "Kamalpura", "Dogadda", "Charan", "Basirhat", "Nagari", "Kangayam", "Sopara",
		 "Nadia", "Mahulia", "Alipur", "Hamirpur", "Fatehgarh", "Bagh", "Naini", "Karari", "Ajabpur", "Jaunpur",
		 "Iglas", "Pantnagar", "Dwarahat", "Dasna", "Mithapur", "Bali", "Nilokheri", "Kolayat", "Haripur", "Dang"
		"Chhota Udepur", "Matar", "Sukma", "Guna", "Dona Paula", "Navelim", "Vainguinim", "Curchorem", "Balaghat", 
		"Bhagwan", "Vijapur", "Sinnar", "Mangaon", "Hadadi", "Bobbili", "Yanam", "Udaigiri", "Balanagar",
		"Kanigiri", "Muddanuru", "Panruti", "Proddatur", "Puliyur", "Perambalur", "Turaiyur", "Tiruchchendur", "Shadnagar"
		, "Markal", "Sultan", "Rayagada", "Kaniyambadi", "Vandalur", "Sangam", "Katoya", "Gudur", "Farakka", "Baramati", "Tohana"

	]

	array.forEach((doc) => {
		batch.set(db.collection('IMCities').doc(), doc);
	});

	batch.commit().then(function () {
		return response.json({ "status": "Sucess" });
	});

	// const newCitiesItem = {
	// 	city: request.body.city,
	// 	countryid: request.body.countryid
	// }

	// db
	// 	.collection('IMCities')
	// 	.add(newCitiesItem)
	// 	.then((doc) => {
	// 		const responsecitiesItem = newCitiesItem;
	// 		responsecitiesItem.id = doc.id;
	// 		return response.json(responsecitiesItem);
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 		response.status(500).json({ error: 'Something went wrong' });
	// 	});
};

exports.getcitiesbycountryid = (request, response) => {
	db
		.collection('IMCities')
		.where('countryid', '==', request.body.countryid)
		.get()
		.then((data) => {
			let cities = [];
			data.forEach((doc) => {
				cities.push({
					citydocid: doc.id,
					city: doc.data().city,
					countryid: doc.data().countryid
				});
			});
			return response.json(cities);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};