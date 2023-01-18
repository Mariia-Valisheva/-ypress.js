describe('Позитивный тест-кейс на оформление заказа', function () {
    it('Добавить товар в корзину и оформить заказ', function () {
    cy.visit('https://testqastudio.me/');
    cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
    cy.wait(5500);
    cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
    cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.wait(5500);
    cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
    cy.wait(5500);
    cy.get('.checkout-button').click();
    cy.wait(5500);
    cy.contains('Оформение заказа');
    cy.get('#billing_first_name').type('Мария');
    cy.get('#billing_last_name').type('Валишева');
    cy.get('#billing_address_1').type('Короленко 78');
    cy.get('#billing_city').type('Казань');
    cy.get('#billing_state').type('Республика Татарстан');
    cy.get('#billing_postcode').type('420024');
    cy.get('#billing_phone').type('+79869036504');
    cy.get('#billing_email').type('dolnish9@gmail.ru');
    cy.get('#order_comments').type('Доставить завтра');
    cy.get('#place_order').click();
    cy.contains('Ваш заказ принят. Благодарим вас.');
    })
})
