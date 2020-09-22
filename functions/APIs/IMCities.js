const { db } = require('../util/admin');

exports.postCities = (request, response) => {

	var batch = db.batch();

	const array = [

		// {
		// 	city: 'Bhandup',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Delhi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bangalore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pune',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nagpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Lucknow',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vadodara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Indore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jalalpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhopal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kolkata',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kanpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'New Delhi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Faridabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rajkot',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ghaziabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chennai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Meerut',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Agra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jaipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jabalpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Varanasi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Allahabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hyderabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Noida',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Howrah',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thane',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Patiala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chakan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ahmedabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Manipala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mangalore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Panvel',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Udupi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rishikesh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gurgaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mathura',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shahjahanpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bagpat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sriperumbudur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chandigarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ludhiana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Palakkad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalyan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Valsad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ulhasnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhiwani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shimla',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dehradun',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Patna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Unnao',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tiruvallur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kanchipuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jamshedpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gwalior',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Erode',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gorakhpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ooty',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Haldwani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bikaner',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Puducherry',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nalbari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bellary',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vellore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Naraina',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mandi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rupnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jodhpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Roorkee',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Aligarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Indraprast',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karnal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tanda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Amritsar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Raipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pilani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bilaspur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Srinagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Guntur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kakinada',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Warangal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tirumala - Tirupati',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nizamabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kadapa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kuppam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Anantpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nalgonda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Potti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nellore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rajahmundry',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bagalkot',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kurnool',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Secunderabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mahatma',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bharuch',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Miraj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nanded',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Anand',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gandhinagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhavnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Morvi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Aurangabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Modasa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Patan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Solapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kolhapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Junagadh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Akola',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhuj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jalgaon Jamod',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chandrapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Maharaj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhule',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ponda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dahod',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Navsari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Panjim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Patel',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nashik',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Amravati',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Somnath',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ganpat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karwar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Davangere',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Raichur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nagara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kushalnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hassan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hubli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bidar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Belgaum',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mysore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dharwad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kolar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tumkūr',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tiruchi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thiruvananthapuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kozhikode',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thrissur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Madurai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thalassery',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kannur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karaikudi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thanjavur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Manor',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Idukki',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thiruvarur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Alappuzha',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gandhigram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kochi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Annamalainagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Amet',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kottarakara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kottayam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tirunelveli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mohan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Salem',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Attingal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chitra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chengannur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Guwahati',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ranchi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shillong',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gangtok',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Srikakulam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tezpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhubaneswar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Imphal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sundargarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Arunachal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Manipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bihar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sharif',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mandal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dibrugarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gaya',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhagalpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kunwar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Barddhaman',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jadabpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalyani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Cuttack',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Barpeta',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jorhat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kharagpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Medinipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Agartala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Saranga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Machilipatnam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhanbad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Silchar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dumka',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kokrajhar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bankura',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jalpaiguri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Durgapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalinga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Palampur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jammu',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dwarka',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Faridkot',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Udaipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Raigarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hisar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Solan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ajmer',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Lala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gurdaspur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sultanpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jhansi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vidisha',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jagdalpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dipas',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sawi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Etawah',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Saharanpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ujjain',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kangra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhilai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rohtak',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Haryana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ambala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bareilly',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhawan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhoj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kapurthala town',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sangrur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pusa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rewa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rampur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhadohi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Cuddalore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khopoli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhiwandi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vasai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Badlapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sambalpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Raurkela',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Brahmapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Visnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Surendranagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ankleshwar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dahanu',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Silvassa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jamnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhansura',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Muzaffarpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Wardha',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bodhan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Parappanangadi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Malappuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vizianagaram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mavelikara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pathanamthitta',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Satara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Janjgir',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gold',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Himatnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bodinayakkanur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gandhidham',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mahabalipuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nadiad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Virar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'GBahadurgarhold',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kaithal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Siliguri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tiruppur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ernakulam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jalandhar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Barakpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kavaratti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ratnagiri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Moga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hansi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sonipat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bandra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Aizawl',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Itanagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ghatkopar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chen',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Powai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhimavaram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhongir',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Medak',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Alipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Moradabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sangli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mancherial',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Markapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vijayawada',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Narsapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karimnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ichalkaranji',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Devgarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Yavatmal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hinganghat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Madgaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Verna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Katra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bilaspur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kollam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vikasnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khatauli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pathankot',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhatinda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Muktsar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Uttarkashi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tinsukia',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bijapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Alwar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vasco',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Paloncha',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kovvur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kovilpatti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhilwara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hoshiarpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Batala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rajpura',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ladwa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalka',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ratlam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sivakasi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thoothukudi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhuri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mohali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Lohaghat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jhajjar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Eluru',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tanuku',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Antapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Aluva',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dharmapuri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Namakkal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kayamkulam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shimoga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Balasore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hingoli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kasaragod',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Paonta Sahib',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sarangi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Anantapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kumar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kaul',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Panipat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Uppal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Teri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tiruvalla',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jamal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chakra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Aurangabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Narela',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chinchvad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Haridwar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Garhshankar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ranjan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dharamsala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Narasaraopet',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Aranmula',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thenkasi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pollachi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karaikal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Wellington',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chittoor',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalamboli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sion',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Lanka',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ghana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Surana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Lamba Harisingh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kundan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ranippettai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ariyalur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Koni',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mohala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thenali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jajpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kaladi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ongole',
		// 	countryid: 2
		// },
		// {
		// 	city: 'KonNabhai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Paravur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vazhakulam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Salt Lake City',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kotian',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kataria',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Maldah',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ring',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khammam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bank',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mylapore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Belapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Phagwara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Cumbum',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gannavaram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nila',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mahesana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Baddi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Andheri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kavali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bulandshahr',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Siuri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rander',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jalalabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Manali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kargil',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Talegaon Dabhade',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sendhwa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Neral',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ramnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khurja',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shirgaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Wai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bardoli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalol',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Boisar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dadri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Baharampur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pitampura',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Guindy',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Liluah',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Srikalahasti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vaniyambadi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Neyveli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jind',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jharsuguda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Murshidabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Anantnag',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hugli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hosur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Colaba',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Arch',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mahim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Raniganj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Manjeri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Siruseri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gampalagudem',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kashipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Muzaffarnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hiriyur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Krishnagiri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sirkazhi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Palani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bokaro',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sidhi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Asansol',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Darjeeling',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kohima',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shahdara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chandannagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nadgaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Haripad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sitapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vapi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bambolim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Baidyabati',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Connaught Place',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Singtam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shyamnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sikar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Choolai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mayapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Puruliya',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Habra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kanchrapara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Goregaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tiptur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalpakkam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Serampore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Konnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Blair',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Canning',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mahad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Alibag',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pimpri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Panchgani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karjat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vaikam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mhow',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Lakhimpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Madhoganj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gudivada',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Avanigadda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nayagarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bemetara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhatapara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kheri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ramgarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhubri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Goshaingaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bellare',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Puttur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Narnaul',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Porbandar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Keshod',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhrol',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kailaras',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Morena',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Deolali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Banda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Orai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Fatehpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mirzapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Adilabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pithapuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ramavaram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Amalapuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ambikapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Korba',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pehowa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Yamunanagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shahabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hamirpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gulbarga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhadravati',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sirsi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Honavar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Siruguppa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Koppal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gargoti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kankauli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jalna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Parbhani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Koraput',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Barpali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jaypur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Banswara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Adilabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Adilabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Adilabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tindivanam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mettur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Srirangam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Deoria',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Basti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Padrauna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Budaun',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bolpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gujrat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Balurghat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Binnaguri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Guruvayur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chandauli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Madikeri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Piduguralla',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vinukonda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Berasia',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sultans Battery',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ramanagaram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Angadipuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mattanur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Banga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sibsagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Namrup',
		// 	countryid: 2
		// },
		// {
		// 	city: 'North Lakhimpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhenkanal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karanja',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Cheyyar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vandavasi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Arakkonam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tiruvannamalai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Akividu',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tadepallegudem',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Madanapalle',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Puttur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Edavanna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kodungallur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Marmagao',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sanquelim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sakri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shahdol',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Satna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thasra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bundi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gobichettipalayam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jhargram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jaspur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pithoragarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sunam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Barnala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kot Isa Khan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Firozpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kishangarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhone',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Candolim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Aldona',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Solim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Daman',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nandyal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mandya',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Punalur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mansa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mukerian',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kharar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Balangir',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Budbud',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nongstoin',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Koch Bihar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kulti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rupnarayanpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhatkal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vikarabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pakala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kishangarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pattukkottai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pattambi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Payyanur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Arani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Peranampattu',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karamsad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chalisgaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kathua',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bharatpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Beawar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chandausi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kasganj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jalesar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Arvi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nilambur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chittur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chidambaram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kanhangad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ganganagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sangamner',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Igatpuri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Changanacheri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Saligao',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chicalim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dicholi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Parra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sehore',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Irinjalakuda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kishangarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khanna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tarn Taran',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kaimganj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pudukkottai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dindigul',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khergam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chamba',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nurpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Fatehabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sirsa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gohana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Suratgarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Srivilliputhur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sivaganga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rajapalaiyam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ramanathapuram',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Kanniyakumari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nagercoil',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Eral',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kumbakonam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mannargudi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Purnea',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Munger',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Motihari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Raxaul',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Churachandpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dimapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ajabpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Naini',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Bagh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Fatehgarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hamirpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Alipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mahulia',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nadia',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dang',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Haripur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kolayat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nilokheri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mithapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dasnaa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dwarahat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dimapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pantnagar',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Iglas',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Balaghat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Curchorem',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vainguinim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Navelimma',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dona Paula',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Guna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sukma',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Matar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chhota Udepur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Balanagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Udaigiri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sinnar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhagwan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Yanam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bobbili',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vijapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hadadi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mangaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shadnagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tiruchchendur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Turaiyur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Puliyur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dimapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Proddatur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Panruti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Muddanuru',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kanigiri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Vandalur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kaniyambadi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rayagada',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sultan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Markal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sangam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Katoya',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Farakka',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Baramati',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tohana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Panchal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mathan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nandigama',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Darsi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nandi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tohana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Binavas',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bhandari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Roshan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Abdul',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kheda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Medchal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kosamba',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Basu',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bawan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thiruthani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dangi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khalapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sakri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Suman',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rajapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kumhari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhamtari',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pachmarhi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mandla',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khargone',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Arpora',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Calangute',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Trimbak',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Anchal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ramapuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kandi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shamsabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bapatla',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sandur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tohana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karsiyang',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Haldia',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Talcher',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rudrapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dharapuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Devipattinam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kodaikanal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Thirumangalam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Faizabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kuzhithurai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Omalur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karamadai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Palayam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tambaram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chintamani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Amer',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chikodi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chikmagalūr',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gadag',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Peddapuram',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Singarayakonda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dindori',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Gangapur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Betalbatim',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Osmanabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nathdwara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jhalawar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nongpoh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Haveri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Talwandi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mundgod',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mandvi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Behala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Yeola',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Patancheru',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Patelguda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Umred',
		// 	countryid: 2
		// },
		// {
		// 	city: 'ToNerihana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pandharpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'TohaJaisalmerna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ambad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ambejogai',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ambah',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Baroda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sirohi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pushkar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Phaphamau',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Azamgarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Fort',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bela',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pauri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Almora',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bichpuri',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Firozabad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mawana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Odhan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Balana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ambarnath',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Damoh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Durg',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sabo',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chiplun',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Malpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Palus',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Alangulam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ottappalam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Yercaud',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pileru',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Medarametla',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Machhiwara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khinwara',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kurali',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sirhind',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jhunjhunun',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kagal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Alanallur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sojat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Koothanallur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Charu',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tikamgarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chandan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mill',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chetan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nanda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kasal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chopra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Maru',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Balu',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rawal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Soni',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sarwar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bishnupur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Manu',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Amreli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Adwani',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ellora Caves',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Karimganj',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jha Jha',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hira',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Amal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Manna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jatani',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Hoshangabad',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Pahalgam',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Nalagarh',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Shanti Grama',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Vadner',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Mount Abu',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Ponneri',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Lalgudi',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Perundurai',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Pochampalli',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Manna',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Vadamadurai',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Mussoorie',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Nagwa',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Sanand',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Sidhpur',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Botad',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Tuljapur',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Raju',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Hong',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Sirwani',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Nagal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Manna',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Manna',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Chand',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Sodhi',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Mahajan',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Kanakpura',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Mahesh',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Suriapet',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Kottagudem',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Palwal',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Golaghat',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Banka',
		// 	countryid: 2
		// },


		// {
		// 	city: 'Shahapur',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Begusarai',
		// 	countryid: 2
		// },


		// {
		// 	city: 'Ballabgarh',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Khambhat',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Jaynagar',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Parel',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Arora',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Chhabra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Attur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mirza Murad',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tirumala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sangola',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Betul',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Khajuraho Group of Monuments',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Barmer',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dinanagar',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sholavandan',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Aundh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ganga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pilkhuwa',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kalkaji Devi',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Andra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Morinda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mandapeta',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nagaur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Hazaribagh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shrigonda',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rajpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Koni',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Tonk',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Pala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Budha',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ghatal',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bangaon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Samastipur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chhachhrauli',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mehra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mundra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Ranaghat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Kamalpur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Madurantakam',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Channapatna',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jagraon',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Shahkot',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bargarh',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nazira',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Nandurbar',
		// 	countryid: 2
		// },

		// {
		// 	city: 'Nabadwip',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhaka',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Bawana',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chirala',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Rama',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mashobra',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Belgharia',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Jayanti',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Sachin',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dewas',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Mandsaur',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Chitradurga',
		// 	countryid: 2
		// },
		// {
		// 	city: 'kamat',
		// 	countryid: 2
		// },
		// {
		// 	city: 'Dhariwal',
		// 	countryid: 2
		// }
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