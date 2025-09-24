describe('Admin Panel Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the main page and display key elements', () => {
    // Verify the main title is visible
    cy.contains('Details about our projects').should('be.visible');

    // Verify the "Add New Project" button is visible and contains the correct text
    cy.get('button').contains('Add New Project').should('be.visible');

    // Verify the existing projects are displayed
    cy.contains('Skyline Towers').should('be.visible');
    cy.contains('Garden Residency').should('be.visible');

    // Verify the side navigation links are present
    cy.contains('Our projects').should('be.visible');
    cy.contains('SOP & Policies').should('be.visible');

    // Verify the user info and logout button are visible
    cy.contains('Admin Sales').should('be.visible');
    cy.contains('Log out').should('be.visible');
  });

  it('should add a new project and delete an existing one', () => {
    // Click the Add New Project button
    cy.get('button').contains('Add New Project').click();

    // Type a new project title into the modal input
    const newProjectTitle = 'New Test Project';
    cy.get('input#projectTitle').type(newProjectTitle);

    // Click the Add Project button in the modal
    cy.get('button').contains('Add Project').click();

    // Verify the new project is now visible
    cy.contains(newProjectTitle).should('be.visible');

    // Find the 'Delete' button for 'Skyline Towers' and click it
    // Corrected command to use a robust selector for the parent element
    cy.contains('Skyline Towers')
      .parents('.sm\\:flex-row')
      .contains('Delete')
      .click();

    // Verify that 'Skyline Towers' is no longer visible on the page
    cy.contains('Skyline Towers').should('not.exist');

    // Verify that the new project is still present
    cy.contains(newProjectTitle).should('be.visible');
  });
});