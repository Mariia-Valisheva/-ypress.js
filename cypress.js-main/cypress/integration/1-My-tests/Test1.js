describe('Позитивный тест-кейс формы логина и пароля', function () {
    it('Зайти на сайт', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon');
    })
})

describe('Позитивный тест-кейс для восстановления пароля', function () {
    it('Восстановить пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.contains('Восстановите пароль');
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
    })
})

describe('Негативный тест кейс на форму авторизации', function () {
    it('Неправильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio2');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
    })
})


describe('Негативный тест кейс на форму авторизации', function () {
    it('Неправильный логин', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.com');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
    })
})

describe('Негативный тест кейс валидации', function () {
    it('Невалидный логин', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.com');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
    })
})

describe('Заглавные буквы приводятся к строчным в логине', function () {
    it('Строчные буквы в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon');
    cy.contains('Форма логина');
    })
})
