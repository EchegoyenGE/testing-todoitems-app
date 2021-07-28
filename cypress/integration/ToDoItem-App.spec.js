describe('To Do Items App', () => {

    beforeEach(() => {
        cy.visit('https://qa-challenge.ensolvers.com')
    })

    it('frontpage can be opened', () => {
        cy.contains('Sign in')
    })

    it('User can login with appropiate username and password', () => {
        cy.get('[data-cy="username"]').type('user')
        cy.get('[data-cy="password"]').type('user')
        cy.get('[data-cy="submit"').click()
        cy.contains('You are logged in as "user"')
    })

    describe('Folders flow', () => {

        beforeEach(() => {
            cy.contains('Manage Folders').click()
        })

        it('user can go to folders menu', () => {
            cy.contains('Create new Folder')
        })

        it('user can create a new folder', () => {
            cy.contains('Create new Folder').click()
            cy.get('[data-cy="name"]').type('new-test-folder')
            cy.get('[data-cy="entityCreateSaveButton"]').click()
            cy.contains('new-test-folder')
        })

        it('user can delete a folder', () => {
            const folderName = 'new-test-folder'
            cy.get('button:last').click()
            cy.contains(folderName).should('not.exist')
        })

        it('user can watch more details about a folder', () => {
            cy.contains('View').click()
            cy.contains('User')
        })
    })

    describe('To Do Items flow', () => {

        beforeEach(() => {
            cy.contains('Manage To-Do Items').click()
        })

        it('user can go to folders menu', () => {
            cy.contains('Create new To Do Item')
        })

        it('user can create a new item', () => {
            cy.contains('Create new To Do Item').click()
            cy.get('[data-cy="entityCreateButton"]').click()
            cy.get('[data-cy="description"]').type('new-test-item')
            cy.get('[data-cy="entityCreateSaveButton"]').click()
            cy.contains('new-test-item')
        })

        it('user can watch more details about a folder', () => {
            cy.contains('View').click()
            cy.contains('User')
        })
    })
})