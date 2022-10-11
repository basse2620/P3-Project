use master
go

IF (EXISTS (SELECT name FROM master.dbo.sysdatabases 
WHERE name = 'BlockFlix'))
Begin
    Alter Database BlockFlix Set Single_user With Rollback Immediate
    Drop Database BlockFlix
End
go

Create Database BlockFlix
go
Use BlockFlix
go

Create Table Genre(
PK_genreId int Identity Primary Key,
genre nvarchar(25) not null
)

Create Table Instruktoer(
PK_instruktoerId int Identity Primary Key,
fornavn nvarchar(25) not null,
efternavn nvarchar(25) not null
)

Create Table LaaneFilm(
PK_filmId int Identity Primary Key,
filmNavn nvarchar(255) not null,
pris decimal not null,
rabat decimal default 0 not null,
maengde int not null,
udlaant int default 0 not null,
resevert int default 0 not null,
forventetDato date 
)

Create Table LaaneFilmGenre(
FK_filmId int Foreign Key References LaaneFilm(PK_filmId) not null,
FK_genreId int Foreign Key References Genre(PK_genreId) not null,
Primary Key (FK_filmId, FK_genreId)
)

Create Table LaaneFilmInstruktoer(
FK_filmId int Foreign Key References LaaneFilm(PK_filmId),
FK_instruktoerId int Foreign Key References Instruktoer(PK_InstruktoerId),
Primary Key (FK_filmId, FK_instruktoerId)
)

Create Table LaaneBilledere(
FK_filmId int Foreign Key References LaaneFilm(PK_filmId),
link nvarchar(255),
beskrivelse nvarchar(100) not null,
Primary Key (FK_filmId, link)
)

Create Table SalgsFilm(
PK_filmId int Identity Primary Key,
filmNavn nvarchar(255) not null,
pris decimal not null,
rabat decimal default 0 not null,
stand int not null
)

Create Table SalgsFilmGenre(
FK_filmId int Foreign Key References SalgsFilm(PK_filmId),
FK_genreId int Foreign Key References Genre(PK_genreId),
Primary Key (FK_filmId, FK_genreId)
)

Create Table SalgsFilmInstruktoer(
FK_filmId int Foreign Key References SalgsFilm(PK_filmId),
FK_instruktoerId int Foreign Key References Instruktoer(PK_InstruktoerId),
Primary Key (FK_filmId, FK_instruktoerId)
)

Create Table SalgsBilledere(
FK_filmId int Foreign Key References SalgsFilm(PK_filmId),
link nvarchar(255),
beskrivelse nvarchar(100) not null,
Primary Key (FK_filmId, link)
)

Create Table [By](
PK_postNr int Primary Key,
byNavn nvarchar(100) not null
)

Create Table Addresse(
PK_addresseId int Identity Primary Key,
addresse nvarchar(100),
FK_postNr int Foreign Key References [By](PK_postNr) not null
)

Create Table BrugerType(
PK_typeId int Identity Primary Key,
[type] nvarchar(5) not null
)

Create Table KreditKort(
PK_kortNr bigint Primary Key,
cvc int not null,
kortholder nvarchar(100) not null,
udloebsDato date not null,
saldo decimal default 0 not null,
Constraint sekstenTal Check (PK_kortNr Between 1000000000000000 And 9999999999999999),
Constraint treTal Check (cvc Between 100 And 999)
)

Create Table Bruger(
PK_brugernavn nvarchar(255) Primary Key,
[password] nvarchar(255) not null,
fornavn nvarchar(25) not null,
efternavn nvarchar(25) not null,
salgsScore decimal,
email nvarchar(255) not null,
FK_addresseId int Foreign Key References Addresse(PK_addresseId),
FK_kortNr bigint Foreign Key References KreditKort(PK_kortNr),
FK_typeId int Foreign Key References BrugerType(PK_typeId) not null,
Constraint skestenTal Check (FK_kortNr Between 1000000000000000 And 9999999999999999)
)

Create Table Kurv(
PK_kurvId int Identity Primary Key,
FK_brugernavn nvarchar(255) Foreign Key References Bruger(PK_brugernavn) not null,
totalPris decimal not null,
)

Create Table LaaneKurv(
FK_kurvId int Foreign Key References Kurv(PK_kurvId),
FK_filmId int Foreign Key References LaaneFilm(PK_filmId),
pris decimal not null,
rabat decimal default 0 not null,
totalPris as (pris - rabat),
Primary Key (FK_kurvId, FK_filmId)
)

Create Table SalgsKurv(
FK_kurvId int Foreign Key References Kurv(PK_kurvId),
FK_filmId int Foreign Key References SalgsFilm(PK_filmId),
pris decimal not null,
rabat decimal default 0 not null,
maengde int not null,
totalPris as ((pris - rabat) * maengde),
Primary Key (FK_kurvId, FK_filmId)
)

Create Table [Status](
PK_statusId int Identity Primary Key,
[status] nvarchar(25) not null
)

Create Table [Ordre](
PK_ordreId int Identity Primary Key,
datoOprettet datetime default current_timestamp not null,
datoSendt datetime,
totalPris decimal not null,
FK_statusId int Foreign Key References [Status](PK_statusId) default 1 not null,
FK_addresseId int Foreign Key References Addresse(PK_addresseId) not null,
FK_brugernavn nvarchar(255) Foreign Key References Bruger(PK_brugernavn) not null
)

Create Table LaaneOrdreDetaljer(
FK_ordreId int Foreign Key References [Ordre](PK_ordreId),
FK_filmId int Foreign Key References LaaneFilm(PK_filmId),
pris decimal not null,
rabat decimal default 0 not null,
totalPris as (pris - rabat),
udlaansDato datetime default current_timestamp not null,
returDato datetime default dateadd(dd, 14, current_timestamp) not null,
FK_statusId int Foreign Key References [Status](PK_statusId) not null,
Primary Key (FK_ordreId, FK_filmId)
)

Create Table SalgsOrdreDetaljer(
FK_ordreId int Foreign Key References [Ordre](PK_ordreId),
FK_filmId int Foreign Key References SalgsFilm(PK_filmId),
pris decimal not null,
rabat decimal default 0 not null,
maengde int not null,
totalPris as ((pris - rabat) * maengde),
Primary Key (FK_ordreId, FK_filmId)
)

Insert Into [By] (PK_postNr, byNavn) Values (2620, 'Albertslund')
Insert Into [By] (PK_postNr, byNavn) Values (2750, 'Ballerup')
Insert Into Addresse (addresse, FK_postNr) Values ('Kagemand 2', 2620)
Insert Into [Status] ([status]) Values ('Sendt')
Insert Into [Status] ([status]) Values ('Modtaget')
Insert Into BrugerType ([type]) Values ('Admin')
Insert Into KreditKort (PK_kortNr, cvc, kortholder, udloebsDato,saldo) Values (1234567812345678, 123, 'Test', '10-10-2222', 500)
Insert Into KreditKort (PK_kortNr, cvc, kortholder, udloebsDato,saldo) Values (2234567812345678, 123, 'Test', '10-10-2222', 500)
Insert Into KreditKort (PK_kortNr, cvc, kortholder, udloebsDato,saldo) Values (3234567812345678, 123, 'Test', '10-10-2222', 500)
Insert Into Bruger (PK_brugernavn, [password], fornavn, efternavn, salgsScore, email, FK_addresseId, FK_kortNr, FK_typeId) Values ('Test1', 'test', 'admin', 'test', 5, 'Kage@gmail.com', 1, 1234567812345678, 1)
Insert Into Bruger (PK_brugernavn, [password], fornavn, efternavn, salgsScore, email, FK_addresseId, FK_kortNr, FK_typeId) Values ('Test2', 'test', 'admin', 'test', 5, 'kage@gmail.com', 1, 1234567812345678, 1)
Insert Into Genre (genre) Values ('Gyser')
Insert Into Genre (genre) Values ('Romantisk')
Insert Into Ordre (totalPris, FK_statusId, FK_addresseId, FK_brugernavn) Values (3000, 1, 1, 'Test1')
Insert Into Kurv (FK_brugernavn, totalPris) Values ('Test1', 200)
Insert Into LaaneFilm (filmNavn, pris, rabat, maengde, udlaant, resevert, forventetDato) Values ('Test1', 120, 20, 8, 8, 2, '12-12-2022')
Insert Into LaaneFilm (filmNavn, pris, rabat, maengde, udlaant, resevert, forventetDato) Values ('Test2', 100, 0, 6, 3, 0, '10-10-2022')
Insert Into LaaneFilm (filmNavn, pris, rabat, maengde, udlaant, resevert, forventetDato) Values ('Test3', 100, 0, 6, 3, 0, '10-10-2022')
Insert Into LaaneFilmGenre (FK_filmId, FK_genreId) Values (1,1)
Insert Into LaaneFilmGenre (FK_filmId, FK_genreId) Values (1,2)
Insert Into LaaneFilmGenre (FK_filmId, FK_genreId) Values (2,2)
Insert Into LaaneKurv (FK_kurvId, FK_filmId, pris, rabat) Values (1, 1, 120, 20)
Insert Into LaaneBilledere (FK_filmId, link, beskrivelse) Values (1, 'Test.dk', 'Test')
Insert Into LaaneBilledere (FK_filmId, link, beskrivelse) Values (2, 'Test2.dk', 'Test2')
Insert Into SalgsFilm (filmNavn, pris, rabat, stand) Values ('Test3', 140, 20, 8)
Insert Into SalgsFilm (filmNavn, pris, rabat, stand) Values ('Test4', 80, 0, 2)
Insert Into SalgsFilmGenre (FK_filmId, FK_genreId) Values (1, 1)
Insert Into SalgsFilmGenre (FK_filmId, FK_genreId) Values (2, 1)
Insert Into SalgsFilmGenre (FK_filmId, FK_genreId) Values (2, 2)
Insert Into SalgsKurv (FK_kurvId, FK_filmId, pris, rabat, maengde) Values (1, 1, 120, 20, 1)
Insert Into SalgsBilledere (FK_filmId, link, beskrivelse) Values (1, 'Test3.dk', 'Test3')
Insert Into SalgsBilledere (FK_filmId, link, beskrivelse) Values (2, 'Test4.dk', 'Test4')
Insert Into Ordre (datoSendt, totalPris, FK_statusId, FK_addresseId, FK_brugernavn) Values ('2022-08-23 11:11:11', 200, 1, 1, 'Test1')
Insert Into Ordre (datoSendt, totalPris, FK_statusId, FK_addresseId, FK_brugernavn) Values ('2022-08-25 14:14:14', 600, 1, 1, 'Test1')
Insert Into LaaneOrdreDetaljer (FK_ordreId, FK_filmId, pris, rabat, FK_statusId) Values (1, 1, 70, 20, 1)
Insert Into LaaneOrdreDetaljer (FK_ordreId, FK_filmId, pris, rabat, FK_statusId) Values (2, 1, 70, 20, 1)
Insert Into LaaneOrdreDetaljer (FK_ordreId, FK_filmId, pris, rabat, FK_statusId) Values (2, 2, 90, 40, 1)
Insert Into SalgsOrdreDetaljer (FK_ordreId, FK_filmId, pris, rabat, maengde) Values (1, 1, 70, 20, 4)
Insert Into SalgsOrdreDetaljer (FK_ordreId, FK_filmId, pris, rabat, maengde) Values (2, 1, 70, 20, 2)
Insert Into SalgsOrdreDetaljer (FK_ordreId, FK_filmId, pris, rabat, maengde) Values (2, 2, 170, 70, 3)
Insert Into Instruktoer (fornavn, efternavn) Values ('Jan1', 'Larsen1')
Insert Into Instruktoer (fornavn, efternavn) Values ('Jan2', 'Larsen2')
Insert Into Instruktoer (fornavn, efternavn) Values ('Jan3', 'Larsen3')
Insert Into Instruktoer (fornavn, efternavn) Values ('Jan4', 'Larsen4')
Insert Into LaaneFilmInstruktoer (FK_filmId, FK_instruktoerId) Values (1, 1)
Insert Into LaaneFilmInstruktoer (FK_filmId, FK_instruktoerId) Values (1, 2)
Insert Into LaaneFilmInstruktoer (FK_filmId, FK_instruktoerId) Values (2, 1)
Insert Into LaaneFilmInstruktoer (FK_filmId, FK_instruktoerId) Values (3, 3)
Insert Into SalgsFilmInstruktoer (FK_filmId, FK_instruktoerId) Values (1, 1)
Insert Into SalgsFilmInstruktoer (FK_filmId, FK_instruktoerId) Values (1, 2)
Insert Into SalgsFilmInstruktoer (FK_filmId, FK_instruktoerId) Values (2, 1)
