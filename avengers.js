personagens = [{
    nome: 'Tony Stark',
    codinome: 'Homem de Ferro',
    armaPrincipal: 'Armadura',
    armaSecundária: 'Dinheiro',
    velocidade: 70,
    forca: 80,
    resistência: 70,

    descricao: function(){
        return "Nome do personagem: "+this.nome+ '\n'
        + "Codinome do personagem: "+this.codinome + '\n'
        + "Arma principal: "+ this.armaPrincipal + '\n'
        + "Arma Secundária: "+ this.armaSecundária + '\n'
        + "Nível de força: "+ this.forca + '\n'
        + "Nível de velocidade: "+ this.velocidade + '\n'
        + "Nível de resistência: " + this.resistência;
    }
},
{  
    nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo',
    armaSecundária: 'Super Soldado',
    velocidade: 90,
    forca: 65,
    resistência: 90,

    descricao: function(){
        return "Nome do personagem: " + this.nome + '\n'
        + "Codinome do personagem: " + this.codinome + '\n'
        + "Arma principal: " + this.armaPrincipal + '\n'
        + "Arma Secundária: " + this.armaSecundária + '\n'
        + "Nível de força: " + this.forca + '\n'
        + "Nível de velocidade: " + this.velocidade + '\n'
        + "Nível de resistência: " + this.resistência;
    }
},
{
    nome: 'Thor Odinson',
    codinome: 'Thor',
    armaPrincipal: 'Martelo Mjolnir',
    armaSecundária: 'Raio',
    velocidade: 80,
    forca: 100,
    resistência: 95,

    descricao: function(){
        return "Nome do personagem: " + this.nome + '\n'
        + "Codinome do personagem: " + this.codinome + '\n'
        + "Arma principal: " + this.armaPrincipal + '\n'
        + "Arma Secundária: " + this.armaSecundária + '\n'
        + "Nível de força: " + this.forca + '\n'
        + "Nível de velocidade: " + this.velocidade + '\n'
        + "Nível de resistência: " + this.resistência;
    }
},
{
    nome: 'Natasha Romanoff',
    codinome: 'Viúva Negra',
    armaPrincipal: 'Traje tático e pistola',
    armaSecundária: 'Combate corpo a corpo avançado',
    velocidade: 85,
    forca: 40,
    resistência: 50,

    descricao: function(){
        return "Nome do personagem: " + this.nome + '\n'
        + "Codinome do personagem: " + this.codinome + '\n'
        + "Arma principal: " + this.armaPrincipal + '\n'
        + "Arma Secundária: " + this.armaSecundária + '\n'
        + "Nível de força: " + this.forca + '\n'
        + "Nível de velocidade: " + this.velocidade + '\n'
        + "Nível de resistência: " + this.resistência;
    }
},
{
    nome: 'Clint Barton',
    codinome: 'Gavião Arqueiro',
    armaPrincipal: 'Arcos e Flechas',
    armaSecundária: 'Combate corpo a corpo avançado',
    velocidade: 75,
    forca: 70,
    resistência: 70,

    descricao: function(){
        return "Nome do personagem: " + this.nome + '\n'
        + "Codinome do personagem: " + this.codinome + '\n'
        + "Arma principal: " + this.armaPrincipal + '\n'
        + "Arma Secundária: " + this.armaSecundária + '\n'
        + "Nível de força: " + this.forca + '\n'
        + "Nível de velocidade: " + this.velocidade + '\n'
        + "Nível de resistência: " + this.resistência;
    }
},
{
    nome: 'Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: 'Força Bruta',
    armaSecundária: 'Raiva',
    velocidade: 80,
    forca: 100,
    resistência: 95,

    descricao: function(){
        return "Nome do personagem: " + this.nome + '\n'
        + "Codinome do personagem: " + this.codinome + '\n'
        + "Arma principal: " + this.armaPrincipal + '\n'
        + "Arma Secundária: " + this.armaSecundária + '\n'
        + "Nível de força: " + this.forca + '\n'
        + "Nível de velocidade: " + this.velocidade + '\n'
        + "Nível de resistência: " + this.resistência;
    }
},
{
    nome: 'Thanos',
    codinome: 'Titã Louco',
    armaPrincipal: 'Manopla do Infinito',
    armaSecundária: 'Super força',
    velocidade: 85,
    forca: 100,
    resistência: 100,

    descricao: function(){
        return "Nome do personagem: " + this.nome + '\n'
        + "Codinome do personagem: " + this.codinome + '\n'
        + "Arma principal: " + this.armaPrincipal + '\n'
        + "Arma Secundária: " + this.armaSecundária + '\n'
        + "Nível de força: " + this.forca + '\n'
        + "Nível de velocidade: " + this.velocidade + '\n'
        + "Nível de resistência: " + this.resistência;
    }
}
]

function calculaPoder(personagem){
    return (personagem.forca + personagem.velocidade + personagem.resistência)/3
}

function comparaPersonagem(){
    for (let x = 0; x < personagens.length; x++){
        for (let y = x + 1; y < personagens.length; y++)  {
            let p1 = personagens[x]
            let p2 = personagens[y]

            let poderP1 = calculaPoder(p1)
            let poderP2 = calculaPoder(p2)

            console.log(p1.descricao)
            console.log(p2.descricao)

            console.log("Comparação entre "+p1.codinome+" e "+p2.codinome+":")
            console.log(p1.codinome+" Poder médio "+poderP1)
            console.log(p2.codinome+" Poder médio "+poderP2)

            if (poderP1 > poderP2){
                console.log(p1.codinome+" vence!")
            }
            else if (poderP1< poderP2){
                console.log(p2.codinome+" vence!")
            }
            else{
                console.log("Empate!")
            }
        }
    }
}

comparaPersonagem()

