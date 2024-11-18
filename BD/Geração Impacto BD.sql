create database GeracaoImpacto;
use GeracaoImpacto;

create table Usuario (
ID_usuario int auto_increment primary key,
dtnascimento_usu date,
senha_usu char(20) unique not null,
nome_usu varchar(100) not null,
email_usu varchar(200) unique not null
);

create table Curso (
cod_curso int auto_increment primary key,
nome_curso varchar(100) not null,
categoria_cur varchar(100),
ID_usuario int,
foreign key (ID_usuario) references Usuario (ID_usuario)
);

create table Acompanhamento (
numero_acomp int auto_increment primary key,
nome_acomp varchar(100),
pertuntas_acomp varchar(300) not null,
ID_usuario int,
foreign key (ID_usuario) references Usuario (ID_usuario)
);

create table Login (
senha_usu char(20) not null,
email_usu varchar(200) unique not null,
tempo_login timestamp default current_timestamp,
foreign key (senha_usu) references Usuario (senha_usu),
foreign key (email_usu) references Usuario (email_usu)
);

create table Perfil (
ID_perfil int auto_increment primary key,
ID_usuario int,
foto_perfil longblob,
bio_perfil varchar(300),
foreign key (ID_usuario) references Usuario (ID_usuario)
);




