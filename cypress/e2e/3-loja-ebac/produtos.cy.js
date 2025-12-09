/// reference types="cypress" />
import produtosPage from '../../support/page-objects/produtos.page';

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });

    it.only('Deve adicionar produto ao carrinho', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        produtosPage.adicionarAoCarrinho()
    });
});