var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
    var electionInstance;
    
    it("inicializar con dos candidatos", function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count, 2);
        });
    });
    it("Inicializar a los candidatos con el numero correcto", function(){
        return Election.deployed().then(function(instance){
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate){
            assert.equal(candidate[0], 1, "Contiene el Id Correcto");
            assert.equal(candidate[1], "Pizza", "Contiene el nombre correcto");
            assert.equal(candidate[2], 0, "contiene el numero correcto de votos");
            return electionInstance.candidates(2);
        }).then(function(candidate){
            assert.equal(candidate[0], 2, "Contiene el Id Correcto");
            assert.equal(candidate[1], "Hamburger", "Contiene el nombre correcto");
            assert.equal(candidate[2], 0, "contiene el numero correcto de votos");
        });
    });
});

