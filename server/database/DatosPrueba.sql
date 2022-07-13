-- Active: 1656693754180@@localhost@3308@alkimyaDevKit
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

INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (744,'Abraham','Merchant','Hanan','TSystems',1);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (433,'Lupita','Ponce','Reyes','TSystems',1);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (566,'Jimena','Bautista','Alamilla','TSystems',1);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (722,'Jonathan','Valencia','Tescucano','TSystems',2);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (899,'Juan','Pérez','Pérez','TSystems',3);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (745,'Hilda','López','Díaz','TSystems',4);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (346,'Juana','Hernández','Hernández','TSystems',5);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (856,'Pedro','Rodríguez','Ordaz','TSystems',6);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (260,'David','Morales','Pérez','TSystems',7);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (429,'Genaro','Díaz','Ordaz','TSystems',8);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (390,'María','Juanes','Márquez','TSystems',9);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (456,'Andrea','Aedo','Santana','TSystems',10);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (952,'Guillermo','Peña','López','TSystems',9);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (100,'Víctor','Rodríguez','Moreno','TSystems',8);
INSERT INTO usuarios (NumUsuario,NombreUsuario,ApellidoPaterno,ApellidoMaterno,Contrasena,TipoDeUsuario) VALUES (400,'Santiago','Pineda','Morales','TSystems',4);


INSERT INTO companias (nombreCompania) VALUES ('T-Systems');
INSERT INTO companias (nombreCompania) VALUES('Epsol');
INSERT INTO companias (nombreCompania) VALUES('Allianz');
INSERT INTO companias (nombreCompania) VALUES('Benteler');
INSERT INTO companias (nombreCompania) VALUES('Lenovo');
INSERT INTO companias (nombreCompania) VALUES('Cisco');
INSERT INTO companias (nombreCompania) VALUES('SAP');

INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('Antonio','Tirado','Sabater',2221211298,'antonio.tir.sab@tsystems.mx',1);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES  ('Domingo','Barra','Barbizani',2227089786,'domingo.bar.bar@tsystems.mx',1);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('Emilio','Miranda','Núñez',2225612112,'emilio.miranda@cisco.mx',6);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('Fabian','Hernández','Pérez',2224543434,'fabian.her.per@sap.mx',7);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('Ximena','Schaar','Perdomo',2226934567,'ximena.sch.per@tsystems.mx',1);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('María José','Flores','Rodríguez',2224567689,'majo.flores@allianz.mx',4);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('Rafael','Mendoza','Covarrubias',2221234356,'rafa_mendoza@benteler.mx',3);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('Gerardo','Blanco','Cuautle',2226753458,'gerardo_cuautle@lenovo.mx',5);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('Paola','Rodríguez','Juárez',2213459876,'paola.rod.jua@epsol.mx',2);
INSERT INTO clientes (NombreCliente,ApellidoPaterno,ApellidoMaterno,Telefono,Correo,Compania) VALUES ('Juan Pablo','Miramón','Mejía',2215788779,'juanpablo_miramon@epsol.mx',2);

INSERT INTO estatusdeProyecto(estatus) VALUES ('Aprobado');
INSERT INTO estatusdeProyecto(estatus) VALUES ('En desarrollo');
INSERT INTO estatusdeProyecto(estatus) VALUES ('Finalizado');
INSERT INTO estatusdeProyecto(estatus) VALUES ('Cancelado');
INSERT INTO estatusdeProyecto(estatus) VALUES ('En espera');

INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto1',3,1,2);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto2',3,1,2);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto3',2,1,2);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto4',2,1,1);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto5',1,1,1);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto6',3,2,3);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto7',3,2,3);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto8',1,2,3);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto9',2,7,5);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto10',2,7,4);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto11',3,4,5);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto12',3,4,4);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto13',2,3,6);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto14',2,5,8);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto15',4,6,10);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto16',1,8,11);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto17',4,9,12);
INSERT INTO proyectos (NombreProyecto,Estatus,Cliente,Usuario) VALUES ('Proyecto18',2,10,14);

INSERT INTO epic (nombreEpic, descripcion) VALUES 
    ("Epic1", "Descripcion1"),
    ("Epic2", "Descripcion2"),
    ("Epic3", "Descripcion3"),
    ("Epic4", "Descripcion4"),
    ("Epic5", "Descripcion5"),
    ("Epic6", "Descripcion6"),
    ("Epic7", "Descripcion7")
;

INSERT INTO rol (nombreRol, descripcion, actores) VALUES 
    ("Rol1", "Descripcion1", 2),
    ("Rol2", "Descripcion2", 1),
    ("Rol3", "Descripcion3", 2),
    ("Rol4", "Descripcion4", 2),
    ("Rol5", "Descripcion5", 3),
    ("Rol6", "Descripcion6", 2),
    ("Rol7", "Descripcion7", 1)
;

INSERT INTO UserStories (quiero, pueda, story, notaGral, epic, rol, rolSecundario, idProyecto) VALUES 
    ("quiero1", "pueda1", "story1", "nota general1", 1, 1, 7, 1),
    ("quiero2", "pueda2", "story2", "nota general2", 2, 2, 6, 2),
    ("quiero3", "pueda3", "story3", "nota general3", 3, 3, 5, 3),
    ("quiero4", "pueda4", "story4", "nota general4", 4, 4, 4, 4),
    ("quiero5", "pueda5", "story5", "nota general5", 5, 5, 3, 5),
    ("quiero6", "pueda6", "story6", "nota general6", 6, 6, 2, 6),
    ("quiero7", "pueda7", "story7", "nota general7", 7, 7, 1, 7)
;