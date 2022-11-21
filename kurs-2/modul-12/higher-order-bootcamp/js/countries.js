const countries = [
  {
    "name": "Algeria",
    "continent": "Africa"
  },
  {
    "name": "Angola",
    "continent": "Africa"
  },
  {
    "name": "Benin",
    "continent": "Africa"
  },
  {
    "name": "Botswana",
    "continent": "Africa"
  },
  {
    "name": "Burkina Faso",
    "continent": "Africa"
  },
  {
    "name": "Burundi",
    "continent": "Africa"
  },
  {
    "name": "Cameroon",
    "continent": "Africa"
  },
  {
    "name": "Cape Verde",
    "continent": "Africa"
  },
  {
    "name": "Central African Republic",
    "continent": "Africa"
  },
  {
    "name": "Chad",
    "continent": "Africa"
  },
  {
    "name": "Comoros",
    "continent": "Africa"
  },
  {
    "name": "Djibouti",
    "continent": "Africa"
  },
  {
    "name": "DR Congo",
    "continent": "Africa"
  },
  {
    "name": "Egypt",
    "continent": "Africa"
  },
  {
    "name": "Equatorial Guinea",
    "continent": "Africa"
  },
  {
    "name": "Eritrea",
    "continent": "Africa"
  },
  {
    "name": "Eswatini",
    "continent": "Africa"
  },
  {
    "name": "Ethiopia",
    "continent": "Africa"
  },
  {
    "name": "Gabon",
    "continent": "Africa"
  },
  {
    "name": "Gambia",
    "continent": "Africa"
  },
  {
    "name": "Ghana",
    "continent": "Africa"
  },
  {
    "name": "Guinea",
    "continent": "Africa"
  },
  {
    "name": "Guinea-Bissau",
    "continent": "Africa"
  },
  {
    "name": "Ivory Coast",
    "continent": "Africa"
  },
  {
    "name": "Kenya",
    "continent": "Africa"
  },
  {
    "name": "Lesotho",
    "continent": "Africa"
  },
  {
    "name": "Liberia",
    "continent": "Africa"
  },
  {
    "name": "Libya",
    "continent": "Africa"
  },
  {
    "name": "Madagascar",
    "continent": "Africa"
  },
  {
    "name": "Malawi",
    "continent": "Africa"
  },
  {
    "name": "Mali",
    "continent": "Africa"
  },
  {
    "name": "Mauritania",
    "continent": "Africa"
  },
  {
    "name": "Mauritius",
    "continent": "Africa"
  },
  {
    "name": "Mayotte",
    "continent": "Africa"
  },
  {
    "name": "Morocco",
    "continent": "Africa"
  },
  {
    "name": "Mozambique",
    "continent": "Africa"
  },
  {
    "name": "Namibia",
    "continent": "Africa"
  },
  {
    "name": "Niger",
    "continent": "Africa"
  },
  {
    "name": "Nigeria",
    "continent": "Africa"
  },
  {
    "name": "Republic of the Congo",
    "continent": "Africa"
  },
  {
    "name": "Reunion",
    "continent": "Africa"
  },
  {
    "name": "Rwanda",
    "continent": "Africa"
  },
  {
    "name": "Sao Tome and Principe",
    "continent": "Africa"
  },
  {
    "name": "Senegal",
    "continent": "Africa"
  },
  {
    "name": "Seychelles",
    "continent": "Africa"
  },
  {
    "name": "Sierra Leone",
    "continent": "Africa"
  },
  {
    "name": "Somalia",
    "continent": "Africa"
  },
  {
    "name": "South Africa",
    "continent": "Africa"
  },
  {
    "name": "South Sudan",
    "continent": "Africa"
  },
  {
    "name": "Sudan",
    "continent": "Africa"
  },
  {
    "name": "Tanzania",
    "continent": "Africa"
  },
  {
    "name": "Togo",
    "continent": "Africa"
  },
  {
    "name": "Tunisia",
    "continent": "Africa"
  },
  {
    "name": "Uganda",
    "continent": "Africa"
  },
  {
    "name": "Western Sahara",
    "continent": "Africa"
  },
  {
    "name": "Zambia",
    "continent": "Africa"
  },
  {
    "name": "Zimbabwe",
    "continent": "Africa"
  },
  {
    "name": "Afghanistan",
    "continent": "Asia"
  },
  {
    "name": "Armenia",
    "continent": "Asia"
  },
  {
    "name": "Azerbaijan",
    "continent": "Asia"
  },
  {
    "name": "Bahrain",
    "continent": "Asia"
  },
  {
    "name": "Bangladesh",
    "continent": "Asia"
  },
  {
    "name": "Bhutan",
    "continent": "Asia"
  },
  {
    "name": "Brunei",
    "continent": "Asia"
  },
  {
    "name": "Cambodia",
    "continent": "Asia"
  },
  {
    "name": "China",
    "continent": "Asia"
  },
  {
    "name": "Georgia",
    "continent": "Asia"
  },
  {
    "name": "Hong Kong",
    "continent": "Asia"
  },
  {
    "name": "India",
    "continent": "Asia"
  },
  {
    "name": "Indonesia",
    "continent": "Asia"
  },
  {
    "name": "Iran",
    "continent": "Asia"
  },
  {
    "name": "Iraq",
    "continent": "Asia"
  },
  {
    "name": "Israel",
    "continent": "Asia"
  },
  {
    "name": "Japan",
    "continent": "Asia"
  },
  {
    "name": "Jordan",
    "continent": "Asia"
  },
  {
    "name": "Kazakhstan",
    "continent": "Asia"
  },
  {
    "name": "Kuwait",
    "continent": "Asia"
  },
  {
    "name": "Kyrgyzstan",
    "continent": "Asia"
  },
  {
    "name": "Laos",
    "continent": "Asia"
  },
  {
    "name": "Lebanon",
    "continent": "Asia"
  },
  {
    "name": "Macau",
    "continent": "Asia"
  },
  {
    "name": "Malaysia",
    "continent": "Asia"
  },
  {
    "name": "Maldives",
    "continent": "Asia"
  },
  {
    "name": "Mongolia",
    "continent": "Asia"
  },
  {
    "name": "Myanmar",
    "continent": "Asia"
  },
  {
    "name": "Nepal",
    "continent": "Asia"
  },
  {
    "name": "North Korea",
    "continent": "Asia"
  },
  {
    "name": "Oman",
    "continent": "Asia"
  },
  {
    "name": "Pakistan",
    "continent": "Asia"
  },
  {
    "name": "Palestine",
    "continent": "Asia"
  },
  {
    "name": "Philippines",
    "continent": "Asia"
  },
  {
    "name": "Qatar",
    "continent": "Asia"
  },
  {
    "name": "Saudi Arabia",
    "continent": "Asia"
  },
  {
    "name": "Singapore",
    "continent": "Asia"
  },
  {
    "name": "South Korea",
    "continent": "Asia"
  },
  {
    "name": "Sri Lanka",
    "continent": "Asia"
  },
  {
    "name": "Syria",
    "continent": "Asia"
  },
  {
    "name": "Taiwan",
    "continent": "Asia"
  },
  {
    "name": "Tajikistan",
    "continent": "Asia"
  },
  {
    "name": "Thailand",
    "continent": "Asia"
  },
  {
    "name": "Timor-Leste",
    "continent": "Asia"
  },
  {
    "name": "Turkey",
    "continent": "Asia"
  },
  {
    "name": "Turkmenistan",
    "continent": "Asia"
  },
  {
    "name": "United Arab Emirates",
    "continent": "Asia"
  },
  {
    "name": "Uzbekistan",
    "continent": "Asia"
  },
  {
    "name": "Vietnam",
    "continent": "Asia"
  },
  {
    "name": "Yemen",
    "continent": "Asia"
  },
  {
    "name": "Albania",
    "continent": "Europe"
  },
  {
    "name": "Andorra",
    "continent": "Europe"
  },
  {
    "name": "Austria",
    "continent": "Europe"
  },
  {
    "name": "Belarus",
    "continent": "Europe"
  },
  {
    "name": "Belgium",
    "continent": "Europe"
  },
  {
    "name": "Bosnia and Herzegovina",
    "continent": "Europe"
  },
  {
    "name": "Bulgaria",
    "continent": "Europe"
  },
  {
    "name": "Croatia",
    "continent": "Europe"
  },
  {
    "name": "Cyprus",
    "continent": "Europe"
  },
  {
    "name": "Czech Republic",
    "continent": "Europe"
  },
  {
    "name": "Denmark",
    "continent": "Europe"
  },
  {
    "name": "Estonia",
    "continent": "Europe"
  },
  {
    "name": "Faroe Islands",
    "continent": "Europe"
  },
  {
    "name": "Finland",
    "continent": "Europe"
  },
  {
    "name": "France",
    "continent": "Europe"
  },
  {
    "name": "Germany",
    "continent": "Europe"
  },
  {
    "name": "Gibraltar",
    "continent": "Europe"
  },
  {
    "name": "Greece",
    "continent": "Europe"
  },
  {
    "name": "Guernsey",
    "continent": "Europe"
  },
  {
    "name": "Hungary",
    "continent": "Europe"
  },
  {
    "name": "Iceland",
    "continent": "Europe"
  },
  {
    "name": "Ireland",
    "continent": "Europe"
  },
  {
    "name": "Isle of Man",
    "continent": "Europe"
  },
  {
    "name": "Italy",
    "continent": "Europe"
  },
  {
    "name": "Jersey",
    "continent": "Europe"
  },
  {
    "name": "Latvia",
    "continent": "Europe"
  },
  {
    "name": "Liechtenstein",
    "continent": "Europe"
  },
  {
    "name": "Lithuania",
    "continent": "Europe"
  },
  {
    "name": "Luxembourg",
    "continent": "Europe"
  },
  {
    "name": "Malta",
    "continent": "Europe"
  },
  {
    "name": "Moldova",
    "continent": "Europe"
  },
  {
    "name": "Monaco",
    "continent": "Europe"
  },
  {
    "name": "Montenegro",
    "continent": "Europe"
  },
  {
    "name": "Netherlands",
    "continent": "Europe"
  },
  {
    "name": "North Macedonia",
    "continent": "Europe"
  },
  {
    "name": "Norway",
    "continent": "Europe"
  },
  {
    "name": "Poland",
    "continent": "Europe"
  },
  {
    "name": "Portugal",
    "continent": "Europe"
  },
  {
    "name": "Romania",
    "continent": "Europe"
  },
  {
    "name": "Russia",
    "continent": "Europe"
  },
  {
    "name": "San Marino",
    "continent": "Europe"
  },
  {
    "name": "Serbia",
    "continent": "Europe"
  },
  {
    "name": "Slovakia",
    "continent": "Europe"
  },
  {
    "name": "Slovenia",
    "continent": "Europe"
  },
  {
    "name": "Spain",
    "continent": "Europe"
  },
  {
    "name": "Sweden",
    "continent": "Europe"
  },
  {
    "name": "Switzerland",
    "continent": "Europe"
  },
  {
    "name": "Ukraine",
    "continent": "Europe"
  },
  {
    "name": "United Kingdom",
    "continent": "Europe"
  },
  {
    "name": "Vatican City",
    "continent": "Europe"
  },
  {
    "name": "Anguilla",
    "continent": "North America"
  },
  {
    "name": "Antigua and Barbuda",
    "continent": "North America"
  },
  {
    "name": "Aruba",
    "continent": "North America"
  },
  {
    "name": "Bahamas",
    "continent": "North America"
  },
  {
    "name": "Barbados",
    "continent": "North America"
  },
  {
    "name": "Belize",
    "continent": "North America"
  },
  {
    "name": "Bermuda",
    "continent": "North America"
  },
  {
    "name": "British Virgin Islands",
    "continent": "North America"
  },
  {
    "name": "Canada",
    "continent": "North America"
  },
  {
    "name": "Cayman Islands",
    "continent": "North America"
  },
  {
    "name": "Costa Rica",
    "continent": "North America"
  },
  {
    "name": "Cuba",
    "continent": "North America"
  },
  {
    "name": "Curacao",
    "continent": "North America"
  },
  {
    "name": "Dominica",
    "continent": "North America"
  },
  {
    "name": "Dominican Republic",
    "continent": "North America"
  },
  {
    "name": "El Salvador",
    "continent": "North America"
  },
  {
    "name": "Greenland",
    "continent": "North America"
  },
  {
    "name": "Grenada",
    "continent": "North America"
  },
  {
    "name": "Guadeloupe",
    "continent": "North America"
  },
  {
    "name": "Guatemala",
    "continent": "North America"
  },
  {
    "name": "Haiti",
    "continent": "North America"
  },
  {
    "name": "Honduras",
    "continent": "North America"
  },
  {
    "name": "Jamaica",
    "continent": "North America"
  },
  {
    "name": "Martinique",
    "continent": "North America"
  },
  {
    "name": "Mexico",
    "continent": "North America"
  },
  {
    "name": "Montserrat",
    "continent": "North America"
  },
  {
    "name": "Nicaragua",
    "continent": "North America"
  },
  {
    "name": "Panama",
    "continent": "North America"
  },
  {
    "name": "Puerto Rico",
    "continent": "North America"
  },
  {
    "name": "Saint Barthelemy",
    "continent": "North America"
  },
  {
    "name": "Saint Kitts and Nevis",
    "continent": "North America"
  },
  {
    "name": "Saint Lucia",
    "continent": "North America"
  },
  {
    "name": "Saint Martin",
    "continent": "North America"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "continent": "North America"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "continent": "North America"
  },
  {
    "name": "Sint Maarten",
    "continent": "North America"
  },
  {
    "name": "Trinidad and Tobago",
    "continent": "North America"
  },
  {
    "name": "Turks and Caicos Islands",
    "continent": "North America"
  },
  {
    "name": "United States",
    "continent": "North America"
  },
  {
    "name": "United States Virgin Islands",
    "continent": "North America"
  },
  {
    "name": "American Samoa",
    "continent": "Oceania"
  },
  {
    "name": "Australia",
    "continent": "Oceania"
  },
  {
    "name": "Cook Islands",
    "continent": "Oceania"
  },
  {
    "name": "Fiji",
    "continent": "Oceania"
  },
  {
    "name": "French Polynesia",
    "continent": "Oceania"
  },
  {
    "name": "Guam",
    "continent": "Oceania"
  },
  {
    "name": "Kiribati",
    "continent": "Oceania"
  },
  {
    "name": "Marshall Islands",
    "continent": "Oceania"
  },
  {
    "name": "Micronesia",
    "continent": "Oceania"
  },
  {
    "name": "Nauru",
    "continent": "Oceania"
  },
  {
    "name": "New Caledonia",
    "continent": "Oceania"
  },
  {
    "name": "New Zealand",
    "continent": "Oceania"
  },
  {
    "name": "Niue",
    "continent": "Oceania"
  },
  {
    "name": "Northern Mariana Islands",
    "continent": "Oceania"
  },
  {
    "name": "Palau",
    "continent": "Oceania"
  },
  {
    "name": "Papua New Guinea",
    "continent": "Oceania"
  },
  {
    "name": "Samoa",
    "continent": "Oceania"
  },
  {
    "name": "Solomon Islands",
    "continent": "Oceania"
  },
  {
    "name": "Tokelau",
    "continent": "Oceania"
  },
  {
    "name": "Tonga",
    "continent": "Oceania"
  },
  {
    "name": "Tuvalu",
    "continent": "Oceania"
  },
  {
    "name": "Vanuatu",
    "continent": "Oceania"
  },
  {
    "name": "Wallis and Futuna",
    "continent": "Oceania"
  },
  {
    "name": "Argentina",
    "continent": "South America"
  },
  {
    "name": "Bolivia",
    "continent": "South America"
  },
  {
    "name": "Brazil",
    "continent": "South America"
  },
  {
    "name": "Chile",
    "continent": "South America"
  },
  {
    "name": "Colombia",
    "continent": "South America"
  },
  {
    "name": "Ecuador",
    "continent": "South America"
  },
  {
    "name": "Falkland Islands",
    "continent": "South America"
  },
  {
    "name": "French Guiana",
    "continent": "South America"
  },
  {
    "name": "Guyana",
    "continent": "South America"
  },
  {
    "name": "Paraguay",
    "continent": "South America"
  },
  {
    "name": "Peru",
    "continent": "South America"
  },
  {
    "name": "Suriname",
    "continent": "South America"
  },
  {
    "name": "Uruguay",
    "continent": "South America"
  },
  {
    "name": "Venezuela",
    "continent": "South America"
  }
];
