import '@testing-library/cypress/add-commands'

it('생성시 버튼과 초기값을 렌더링한다.', () => {

});

it('+ 버튼 클릭시 1 증가한다.', () => {

});

it('- 버튼 클릭시 1 감소한다.', () => {
    cy.get('.btn-inc').click();
    cy.get('.value').should('have.text', '11')
});

it('Max값인 경우 + 버튼이 disabled 상태가 되며 클릭해도 증가하지 않는다.', () => {

});

it('Min값인 경우 - 버튼이 disabled 상태가 되며 클릭해도 증가하지 않는다.', () => {

});
