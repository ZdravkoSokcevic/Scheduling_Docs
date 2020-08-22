# Dokumentacija za Scheduling aplikaciju

# Kratak opis:

## Aplikacija treba da omoguci korisnicima da zakazu termin u stomatoloskoj ordinaciji.
 Potrebno je da postoje 4 role, tj vrste korisnika, i to: 
* administrator
* lekar
* prijavljen korisnik
* neprijavljen korisnik. 

U zavisnosti od tipa korisnika koji posecuje sajt razlikuje
se pristup delovima aplikacije kao i sam izgled.

Potrebno je da sadrzi sledece stranice:

- Pocetna: Sadrzi opis ordinacije, poslednje vesti o ordinaciji, kontakt informacije,
informacije o lokaciji sa mapom, listu lekara i nesto o njima, linkove do ostalih
stranica.
- Prijava / Registracija: Strana za prijavljivanje (registrovanje) korisnika.
- Pregled termina: Kalendarski i tabelarni pregled zakazanih / slobodnih termina.
Razlikuje se u odnosu na to koji je korisnik posetio stranu. Sadrzi formu ili link do
forme za zakazivanje termina.
- Pregled korisnika: Dostupna administratoru i lekaru. Mogucnost da se kreiraju,
menjaju, brisu korisnici. Standardna tabela sa korisnicima.
- Profil korisnka: Pregled prethodnih i buducih termina, pregled poslatih zahteva za
zakazivanje termina.
- Pregled zahteva za zakazivanje: Dostupna administratoru i lekaru. Lekar moze
da vidi zahteve upucene samo njemu/njoj. Administrator vidi sve zahteve.
Zahtevi mogu da se odobre ili odbiju.
- Pregled prostorija / stomatoloskih stolica: Dostupna administratoru. Mogucnost
da odredi koji lekar radi u nekoj prostoriji u odredjeno vreme.
- Pregled vesti: Dostupna administratoru. Upravljanje vestima sa pocetne stranice,
dodavanje, izmena, brisanje.