CREATE TABLE Users (
  Id int PRIMARY KEY AUTO_INCREMENT,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  IR varchar(255),
  Password varchar(255) NOT NULL,
  UserTypesId int NOT NULL,
  CreationDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE UserTypes (
  Id int PRIMARY KEY AUTO_INCREMENT,
  Name varchar(255) NOT NULL,
  Admin bool NOT NULL,
  CreationDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE RoomGroups (
  Id int PRIMARY KEY AUTO_INCREMENT,
  Name varchar(255) NOT NULL,
  StartTime time NOT NULL,
  EndTime time NOT NULL,
  CreationDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Rooms (
  Id int PRIMARY KEY AUTO_INCREMENT,
  Name varchar(255) NOT NULL,
  RoomGroupsId int NOT NULL,
  StayTime float NOT NULL,
  CreationDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Reservations (
  Id int PRIMARY KEY AUTO_INCREMENT,
  StartHour time NOT NULL,
  EndHour time NOT NULL,
  RoomsId int NOT NULL,
  UsersId int NOT NULL,
  ReservationDate date NOT NULL,
  CreationDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE Reservations ADD FOREIGN KEY (RoomsId) REFERENCES Rooms (Id);

ALTER TABLE Reservations ADD FOREIGN KEY (UsersId) REFERENCES Users (Id);

ALTER TABLE Users ADD FOREIGN KEY (UserTypesId) REFERENCES UserTypes (Id);

ALTER TABLE Rooms ADD FOREIGN KEY (RoomGroupsId) REFERENCES RoomGroups (Id);