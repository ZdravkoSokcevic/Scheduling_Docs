# Instalacija aplikacije

## Pre nego sto pocnete uverite se da posedujete sledece stvari:

* [**<b style="color:blue">`NodeJS`</b>**](https://nodejs.org/en/download/)

* [**<b style="color:blue">`Npm`</b>**](https://www.npmjs.com/package/download)

* [**<b style="color:blue">`MySQL`</b>**](https://www.mysql.com/downloads/)

## Kada obavite neophodne instalacije potrebno je da ispratite sledece korake:

* Odete u root projekta i pokrenete `npm i` ili `npm install` da biste preuzeli neophodne node module potrebne za aplikaciju 

* Import baze:
	* U MySql-u napravite bazu i nazovete je po zelji
	* Ako ste u root folderu projekta, pokrenite sledecu komandu <b style="color:red">`mysql -u vas_mysql_username -p vas_db_name < zakazivanje_termina.sql`</b> kako biste import-ovali bazu

* Kopirate env fajl neophodan za rad aplikacije <b style="color:red">`cp dev.env.example dev.env`</b>

* Pokrenete komandu <b>npm run nodemon</b> da biste pokrenuli nodemon demon koji ce da prati promjene na serveru na svaki sacuvani fajl

* Pokrenete komandu <b style="color:red">`npm start`</b> da biste pokrenuli aplikaciju

* Nakon ovog-a aplikacija bi trebala da slusa na adresi <b style="color:red">`http://localhost:8000`</b>

## [<b style="color:blue">`Pogledajte koristene biblioteke`</b>](/requirements)

## [ <b style='color:red'>`Nazad na pocetak`</b>](/)