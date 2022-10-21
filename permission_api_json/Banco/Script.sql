/* 
*   \l apresenta os bancos
*   Create Database [nome] - cria o banco (não funciona com alias)
*   \c [nome]              - se conecta ao banco e desconecta sessões anteriores.
*   \dt apresenta as tabelas
*   Aqui o create table trabalha bem semelhante ao de outros bancos 
*   A diferença fica no 'serial' que aqui seria um Long
*
*/

CREATE DATABASE PERMISSION;
\C PERMISSION;
CREATE TABLE USUARIO (ID SERIAL NOT NULL PRIMARY KEY, NOME VARCHAR(60), PERMISSOES JSON);
CREATE SEQUENCE SEQ_USUARIO START 1;

