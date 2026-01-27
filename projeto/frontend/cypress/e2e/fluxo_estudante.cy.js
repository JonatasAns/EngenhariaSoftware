describe('Sistema de Exercícios - Testes Obrigatórios', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173')
  })

  // Teste 1: Fluxo do Aluno
  it('Deve carregar a página do aluno e permitir chamar o docente', () => {
    cy.get('[data-testid="btn-chamar-docente"]').click()
    cy.contains('A aguardar docente...').should('be.visible')
  })

  // Teste 2: Mudança de Vista
  it('Deve permitir navegar para a vista do docente', () => {
    cy.contains('Docente').click()
    cy.contains('Criar Novo Exercício').should('be.visible')
  })

  // Teste 3: Criação de Etapas (Docente)
  it('Deve permitir ao docente adicionar etapas dinamicamente', () => {
    cy.contains('Docente').click()
    cy.get('[data-testid="input-etapa"]').type('Configurar JPA')
    cy.get('[data-testid="btn-add-etapa"]').click()
    cy.get('.preview-etapas').should('contain', 'Configurar JPA')
  })

  // Teste 4: Validação de Formulário
  it('Deve manter o botão de publicar desativado se não houver título', () => {
    cy.contains('Docente').click()
    cy.get('.btn-finish').should('be.disabled')
  })
})