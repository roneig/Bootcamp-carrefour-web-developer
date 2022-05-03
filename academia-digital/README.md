<h1>Conhecendo o Projeto Spring Data JPA na Prática </h1>

<hr size="10" color="blue">
<h2>Desafio de Projeto   <strong>Carrefour Web Developer</strong></h2>

link para repositório projeto original: https://github.com/cami-la/academia-digital.git


Ótimo exercício!

fiz as seguintes implementações:

1- completei o CRUD das tabelas tb_alunos e tb_avaliacoes, implementei os métodos get, delete, update;

2- completei as validações (Hibernate Validator) dos forms AlunoUpdateForm e AvaliacaoFisicaUpdateForm;

3- gerei o JavaDoc;

4- implementei o padrão DTO (Data Transfer Object Pattern) no Json de resposta da tb_alunos. Explicando, para fins didáticos, considerei o cpf do aluno uma informação sensível que não deveria aparecer no tráfego de resposta das operações create, update, getAll;

5- Usei a anotação @OneToMany(mappedBy = "aluno", fetch = FetchType.LAZY,<strong> cascade = { CascadeType.REMOVE })</strong>  para que quando um aluno for deletado as avaliações daquele aluno também fossem (funciona legal).

6- compartilhei o JSON utilizado nos testes  https://web.postman.co/workspace/My-Workspace~6b82efda-4dec-4dbb-80e9-51cbf9dcda7a/collection/20245633-f0312c57-ddb7-4d85-809d-cd2dc32128f5?action=share&creator=20245633

<hr size="10" color="blue">

<p> Sejam bem-vindos ao projeto de LAB <strong>Conhecendo o Projeto Spring Data JPA na Prática</strong> oferecido gratuitamente pela plataforma de cursos online <a href="https://dio.me/"><strong> Digital Innovation One</strong></a>.<br>

<h2>🎯 Objetivo do Projeto</h2>
<p>Ao final deste projeto, o Dev irá conhecer os principais conceitos de mapeamento objeto relacional (ORM) usando o <strong>Spring Data JPA</strong>. Para isso, uma <strong>API RESTful</strong> será desenvolvida com ênfase na modelagem de suas entidades, no domínio de uma academia de ginástica.</p>

<h2>
🛑 Pré-requistos
</h2>

- [x] Fundamentos do Spring Boot

- [x] Noções de SQL

<h2> 🚦 Guia </h2>

<ol>
    <li> Apresentação do Projeto Base </li>
    <li> Configuração do banco de dados (SGBD <em>PostgreSQL</em>)</li>
    <li> Aplicando as <em>annotations</em></li>
    <li> Execução do fluxo back-end: <em>Controller - Service - Repository</em></li>
    <li> Validação - <em>Hibernate Validator</em> </li>
    <li> Consultas Avançadas - <em>Derived Query - Native Query</em></li>
</ol>

<h2>🛠 Tecnologias Utilizadas</h2>

<ul>
    <li>IDE IntelliJ</li>
    <li>Java 11</li>
    <li>Maven</li>
    <li><strong>Spring Web</strong></li>
    <li><strong>Spring Data JPA</strong></li>
    <li><strong>PostgreSQL Driver</strong></li>
    <li><strong>Hibernate Validator</strong></li>
    <li>Lombok</li>
    <li>Postman</li>
</ul>


<h2><a href="https://strn.com.br/artigos/2018/12/11/todas-as-anota%C3%A7%C3%B5es-do-jpa-anota%C3%A7%C3%B5es-de-mapeamento/">
Anotações de Mapeamento </a></h2>

<strong>@Entity</strong>
Usada para especificar que a classe anotada atualmente representa um tipo de entidade.

<strong>@Table</strong>
Usada para especificar a tabela principal da entidade atualmente anotada.

<strong>@Id</strong>
Especifica o identificador da entidade. Uma entidade deve sempre ter um atributo identificado.

<strong>@GeneratedValue</strong>
Especifica que o valor do identificador de entidade é gerado automaticamente.

<strong>@Column</strong>
Usada para especificar o mapeamento entre um atributo de entidade básico e a coluna da tabela de banco de dados.

<strong>@JoinColumn</strong>
Usada para especificar a coluna FOREIGN KEY. Indica que a entidade é a responsável pelo relacionamento.

<strong>@OneToMany</strong>
Usada para especificar um relacionamento de banco de dados um-para-muitos.

<strong>@OneToOne</strong>
Usada para especificar um relacionamento de banco de dados um-para-um.

<strong>@ManyToOne</strong>
Usada para especificar um relacionamento de banco de dados muitos-para-um.

<strong>cascade</strong>
Realizar operações em cascata só faz sentido em relacionamentos Pai - Filho.

<strong>mappedBy</strong>
Indica qual é o lado inverso ou não dominante da relação.

<h2>🔗 Links Úteis</h2>
<ul>
    <li><a href="https://start.spring.io/#!type=maven-project&language=java&platformVersion=2.6.1&packaging=jar&jvmVersion=11&groupId=me.dio.academia&artifactId=academia-digital&name=academia-digital&description=Tutorial%20API%20RESTful%20modelando%20sistema%20de%20academia%20de%20gin%C3%A1stica&packageName=me.dio.academia.digital&dependencies=web,data-jpa,postgresql,validation,lombok">Spring Initializr</a></li>
    <li><a href="https://docs.spring.io/spring-boot/docs/2.0.x/reference/html/common-application-properties.html">Common application properties</a></li>
    <li><a href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.repositories">Spring Data JPA - Reference Documentation</a></li>
    <li><a href="https://docs.jboss.org/hibernate/stable/validator/reference/en-US/html_single/#validator-gettingstarted">Validation Reference Implementation: Reference Guide</a></li>

</ul>


<h2> 🤝 Contribuindo </h2>

Este repositório foi criado para fins de estudo, então contribua com ele. Se te ajudei de alguma forma, ficarei feliz em
saber. E caso você conheça alguém que se identidique com o conteúdo, não deixe de compatilhar.

Se possível:

⭐️ Star o projeto

🐛 Encontrar e relatar issues

------------

Disponibilizado com ♥ por [cami-la](https://www.linkedin.com/in/cami-la/ "cami-la").




