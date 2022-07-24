DROP DATABASE IF EXISTS alkimyaDevKit;
CREATE DATABASE alkimyaDevKit
CHARACTER SET utf8
COLLATE utf8_general_ci;
USE alkimyaDevKit;

CREATE TABLE tipoUsuarios 
(
    IdTipo		INT auto_increment,
    TipoUsuario		VARCHAR(30),
    
    PRIMARY KEY (IdTipo)
);

CREATE TABLE usuarios 
(
    IdUsuario		INT auto_increment,
    NumUsuario      INT,
    NombreUsuario			VARCHAR(20),
    ApellidoPaterno		VARCHAR(20),
    ApellidoMaterno		VARCHAR(20),
    Contrasena      VARCHAR(100),
    TipoDeUsuario		INT,
    
    FOREIGN KEY (TipoDeUsuario) REFERENCES tipoUsuarios (IdTipo),
    PRIMARY KEY (IdUsuario)
);

CREATE TABLE companias
(
    IdCompania       INT auto_increment,
    nombreCompania   VARCHAR(30),

    PRIMARY KEY (IdCompania)    
);

CREATE TABLE clientes
(
    IdCliente   INT auto_increment,
    NombreCliente   VARCHAR(50),
    ApellidoPaterno VARCHAR(50),
    ApellidoMaterno VARCHAR(50),
    Telefono        BIGINT,
    Correo          VARCHAR(200),
    Compania        INT,

    FOREIGN KEY (Compania) REFERENCES companias(IdCompania),
    PRIMARY KEY (IdCliente)
);

CREATE TABLE estatusdeProyecto
(
    IdEstatusProy     INT auto_increment,
    estatus           VARCHAR(30),

    PRIMARY KEY (IdEstatusProy)
);

CREATE TABLE proyectos 
(
    IdProyecto		INT auto_increment,
    NombreProyecto	VARCHAR(20),
    Estatus			INT,
    Cliente			INT,
    Usuario			INT,
        
    FOREIGN KEY (Estatus) REFERENCES estatusdeProyecto (IdEstatusProy),
    FOREIGN KEY (Cliente) REFERENCES clientes (IdCliente),
    FOREIGN KEY (Usuario) REFERENCES usuarios (IdUsuario),
    PRIMARY KEY (IdProyecto)
);

CREATE TABLE epic
(
    IdEpic           INT auto_increment,
    nombreEpic       VARCHAR(100),
    descripcion      VARCHAR(200),
    idProyecto        INT,

    FOREIGN KEY (idProyecto) REFERENCES proyectos (IdProyecto),
    PRIMARY KEY (IdEpic )
);

CREATE TABLE rol
(
    IdRol            INT auto_increment,
    nombreRol        VARCHAR(100),
    descripcion      VARCHAR(200),
    actores          INT,
    idProyecto        INT,

    FOREIGN KEY (idProyecto) REFERENCES proyectos (IdProyecto),
    PRIMARY KEY (IdRol)
);


CREATE TABLE UserStories
(
    IdUserStory       INT auto_increment,
    quiero            VARCHAR(100),
    pueda             VARCHAR(100),
    story             VARCHAR(300),
    notaGral          VARCHAR(100),
    epic              INT,
    rol               INT,
    rolSecundario            INT,
    idProyecto        INT,


    FOREIGN KEY (epic) REFERENCES epic (IdEpic),
    FOREIGN KEY (rol) REFERENCES rol (IdRol),
    FOREIGN KEY (rolSecundario) REFERENCES rol (IdRol),
    FOREIGN KEY (idProyecto) REFERENCES proyectos (IdProyecto),
    PRIMARY KEY (idUserStory)
);

-- Datos estaticos

-- Estatus de proyectos
INSERT INTO estatusdeProyecto(estatus) VALUES ('En espera');
INSERT INTO estatusdeProyecto(estatus) VALUES ('En planeación');
INSERT INTO estatusdeProyecto(estatus) VALUES ('En desarrollo');
INSERT INTO estatusdeProyecto(estatus) VALUES ('Finalizado');
INSERT INTO estatusdeProyecto(estatus) VALUES ('Entregado al cliente');
INSERT INTO estatusdeProyecto(estatus) VALUES ('Cancelado');


-- Tipos de Usuarios
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('Data Architect');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('Data Scientist');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('Process Designer');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('Product Owner');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('Team Lead');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('Cloud Architect');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('Cloud Engineer');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('Scrum Master');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('DevOps - Back End');
INSERT INTO tipoUsuarios (TipoUsuario) VALUES ('DevOps - Front End');