var proporcao_cm_px = 10;

var Ceramica = (function () {
    "use strict";

	function Ceramica(altura, largura) {

		var self = this;

		this.altura = altura || 0;
		this.largura = largura || 0;
        this.isSquared = false;
        this.alturaTotal = this.larguraTotal = 0;

        this.init();
        
	}
    
    Ceramica.prototype.adicionarBordas = function () {
        
        //adicionar a margem de cada peça referente ao rejunte
        this.alturaTotal = this.altura + 0.5;
        this.larguraTotal = this.largura + 0.5;
        
    };
    
    Ceramica.prototype.verificarQuadrado = function () {
        return (this.altura === this.largura);
    };
    
    Ceramica.prototype.desenharElemento = function () {
        
        this.element = document.createElement('div');
        this.element.className = 'Piso';
        this.element.style.width = this.largura * proporcao_cm_px + 'px';
        this.element.style.height = this.altura * proporcao_cm_px + 'px';
        document.getElementById('area').appendChild(this.element);
        
    };

	Ceramica.prototype.init = function () {
        this.adicionarBordas();
        this.isSquared = this.verificarQuadrado();
	};

	return Ceramica;

})();