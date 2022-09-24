// import { should } from 'chai';
//import 'cypress-network-idle';

let regTest = Cypress.env('TEST_LOG_AND_PASS') + '+' + `${Date.now().toString(32)}@devforth.io`;
let TestLogin = Cypress.env('VSEM');


describe('check Lobby pages', () => {
    beforeEach(() => {
        // before each test, we can automatically preserve the
        // 'session_id' and 'remember_token' cookies. this means they
        // will not be cleared before the NEXT test starts.
        //
        // the name of your cookies will likely be different
        // this is an example
        Cypress.Cookies.preserveOnce('loggedin', 'registered', 'PHPSESSID');
      });

    // it('Registration', () => {
        
    //     cy.visit('https://rocketpot.io', {failOnStatusCode: false});
    //     // cy.waitForNetworkIdle(1000);
    //     cy.get('span.btn-link .button-orange').click();
    //     cy.get('input#email').type(regTest);
    //     cy.get('input#day').type('1');
    //     cy.get('input#month').type('1');
    //     cy.get('input#year').type('1992');
    //     cy.get('input#password').clear().type(regTest);
    //     cy.get('div.register-terms-wrapper .checkbox').click();
    //     cy.get('button#auth-btn').click();
    //     cy.get('div.tabs-list span.item-text', {timeout: 20000}).its('length').should('be.eq', 4);
    //     cy.get('div.auth-code input.input-controler', {timeout: 20000}).should('be.visible');
    //     cy.get('div.wrapper div.wallet-cryptolist', {timeout: 20000}).should('be.visible');
    //     cy.get('div.wallet .close-icon').click();
    //     cy.get('div.header-usermenu button', {timeout: 20000}).click();
    //     cy.get('div.dropdown-wrapper .exit').click();
    //     cy.get('div.main button.orange', {timeout: 20000}).click();
        
    // });

    it('Login', () => {
        cy.visit('https://rocketpot.io', {failOnStatusCode: false});
        // cy.waitForNetworkIdle(1_000);
        cy.get('div.end span.button-gray').click();
        cy.get('input#email').type('vsemeniuk@devforth.io');
        cy.get('input#password').type('vsemeniuk@devforth.io');
        cy.get('button#auth-btn').click();
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
    });
        
    it('Banners images', () => {

        // cy.get('.notification-alert-close').click(); // race
        cy.get('div.lobby-header .splide__track div.splide__slide picture img').should('have.attr', 'src').should('not.be.empty'); //welcome bonus
        cy.get('div.lobby-header a[href="/sportsbetting/"] picture img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.lobby-header a[href="/vip/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.lobby-header a[href="/poker/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.lobby-header a[href="/exclusive-games/crash-game/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.lobby-header a[href="/livecasinobitcoin/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.lobby-header a[href*="/race/"] img').should('have.attr', 'src').should('not.be.empty');

    });

    it('Main page', () => {
        
        // cy.visit('https://rocketpot.io');
        cy.get('body').then($body => {
            if($body.find('div.header .close-icon') == true){
                cy.get('div.header .close-icon').click();
            }else{
                cy.log('phone bonus not found');
            }
        });
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        cy.get('div.searchBar-wrapper > div').its('length').should('be.eq', 3);
        cy.get('div.searchBar-wrapper .cryptos .cryptos-text').should('be.visible').and('have.text', 'Play with');
        cy.get('div.searchBar-wrapper .cryptos > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.searchBar-wrapper .buycrypto .buycrypto-text').should('be.visible').and('have.text', 'No Crypto?');
        cy.get('div.searchBar-wrapper .buycrypto button').should('be.visible');
        cy.get('div.layout-wrapper .page >:nth-child(1) .splide__list > a').its('length').should('be.gt', 6); // Slots
        cy.get('div.layout-wrapper .page >:nth-child(2) .splide__list > a').its('length').should('be.gt', 6); // New Games
        cy.get('div.layout-wrapper .page >:nth-child(3) .splide__list > a').its('length').should('be.gt', 6); // Providers
        cy.get('div.layout-wrapper .page >:nth-child(4) .splide__list > a').its('length').should('be.gt', 6); // Popular
        cy.get('div.layout-wrapper .page >:nth-child(5) .splide__list > a').its('length').should('be.gt', 6); // Live Casino
        cy.get('div.layout-wrapper .page >:nth-child(6) .splide__list > a').its('length').should('be.gt', 6); // Blackjack
        cy.get('div.layout-wrapper .page >:nth-child(7) .splide__list > a').its('length').should('be.gt', 6); // Roulette
        cy.get('div.layout-wrapper .page >:nth-child(8) .splide__list > a').its('length').should('be.gt', 1); // Baccarat
        cy.get('div.layout-wrapper .page >:nth-child(9) .splide__list > a').its('length').should('be.gt', 0); //Jackpot
        cy.scrollTo(0, 3200);
        cy.get('div.page .winner .winner-title').should('be.visible').and('have.text', 'Recent Bitcoin casino winners');
        cy.get('div.page .winner .table-header tr > th').should('be.visible');
        cy.get('table.table-container tbody > :nth-child(2) .time').invoke('text').then((text) => {
            let splitText = text.split(' ')[1];
            expect(splitText).not.eq('day');
            expect(splitText).not.eq('days');
            expect(splitText).not.eq('week');
            expect(splitText).not.eq('weeks');
            expect(splitText).not.eq('month');
            expect(splitText).not.eq('months');
            expect(splitText).not.eq('year');
            expect(splitText).not.eq('years');
        });
        cy.get('.cryptoprice .cryptoprice-list > a').find('img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.cryptoprice .cryptoprice-list > a .col').find('div').should('be.visible').should('not.be.empty');
        cy.get('footer .footer-wrapper .footer-top > a').should('be.visible').should('have.attr', 'href').should('not.be.empty');
        cy.get('footer .footer-wrapper .footer-center > img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('#footer-certificates a').should('have.attr', 'href').should('not.be.empty');
        cy.get('#footer-certificates a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.footer-bottom .copyright').should('be.visible').should('have.text', '© 2022 Danneskjold Ventures B.V.');
        cy.get('.footer-bottom .links > a').should('be.visible').should('have.attr', 'href').should('not.be.empty');
    });

    it('Side menu', () => {

        cy.get('#sidemenu .scrollable > div').should('be.visible').its('length').should('be.eq', 5);
        cy.get('#sidemenu .sidemenu-header .title').should('be.visible').should('have.text', 'The fastest-growing   crypto casino');
        cy.get('#sidemenu .scrollable .sidemenu-top-categories > a').should('be.visible').should('have.length', 2).should('have.attr', 'href').and('not.be.empty');
        cy.get('#sidemenu .scrollable .sidemenu-main > a').should('be.visible').should('have.attr', 'href').should('not.be.empty');
        cy.get('#sidemenu .scrollable .sidemenu-section > a').should('be.visible').should('have.attr', 'href').should('not.be.empty');
        cy.get('#sidemenu .scrollable').scrollTo(0, 3000);
        cy.get('#sidemenu .scrollable .sidemenu-footer > a').should('be.visible').should('have.attr', 'href').should('not.be.empty');
        cy.get('#sidemenu .scrollable .sidemenu-footer .lang-select button').should('be.visible');
        cy.get('#sidemenu .scrollable .sidemenu-footer .lang-select button img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('#sidemenu .scrollable .sidemenu-footer .lang-select button').click();
        cy.get('#sidemenu .scrollable .sidemenu-footer .lang-select .dropdown-wrapper > div .icon img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('#sidemenu .scrollable .sidemenu-footer .lang-select button').click();
        cy.get('#sidemenu .scrollable .end > a').should('be.visible').should('have.length', 5).should('have.attr', 'href').should('not.be.empty');

    });

    it('Favourites side menu page', () => {
        cy.visit('https://rocketpot.io/pragmatic-play/sweet-bonanza/');
        // cy.get('.notification-alert-close').click(); // race
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        cy.get('.gameInfo .row button.favourite').click();
        cy.get('.sidemenu-top-categories .favourite .tag').should('have.text', '1');
        cy.get('.sidemenu-top-categories .favourite').click();
        cy.get('.container .searchBar-input input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.page .gameList > a').should('be.visible').click();
        cy.get('.gameInfo .row button.favourite').click();
        cy.get('.sidemenu-top-categories .favourite .tag').should('have.text', '0');
        cy.get('.sidemenu-top-categories .favourite').click();
        cy.get('.page .empty-title').should('be.visible').should('have.text', 'You don`t have favourites game');
    });

    it('Recent side menu page', () => {
        cy.get('.sidemenu-top-categories .recent .tag').should('have.text', '95'); // change to 1
        cy.get('.sidemenu-top-categories .recent').click();
        cy.get('.page .page-title').should('be.visible').and('have.text', 'Recent');
        cy.get('.page .game-list > a').should('be.visible');
        cy.get('.page .loadMore .text').should('be.visible');
        cy.get('.page .loadMore button div').should('be.visible');
    });

    it('Bitcoin casino side menu page', () => {
        cy.get('.sidemenu-main .bitcoin .text').should('be.visible').and('have.text', 'Bitcoin casino').click();
        cy.get('div.searchBar-wrapper').should('be.visible');
    });

    it('New games side menu page', () => {
        cy.wait(5000);
        cy.get('.sidemenu-main .newgames .text').should('have.text', 'New Games').click();
        cy.url().should('eq', 'https://rocketpot.io/newest-games/');
        cy.get('.page .page-title', {timeout:20000}).should('have.text', 'New Games');
        cy.get('.page .game-list > a').should('be.visible');
        cy.get('.page .category-loadmore .text').should('be.visible');
        cy.get('.page .category-loadmore button .btn-text').should('be.visible').and('have.text', 'LOAD MORE');
        cy.get('.winner .winner-title').should('be.visible').should('have.text', 'Recent New Games winners');
        cy.scrollTo(0, 1500);
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Slots side menu page', () => {
        cy.get('.sidemenu-main .slots .text').should('be.visible').and('have.text', 'Slots').click('');
        cy.get('.container .searchBar-input input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.page .page-title').should('be.visible').and('have.text', 'Slots');
        cy.get('.page .game-list > a').should('be.visible');
        cy.get('.page .category-loadmore .text').should('be.visible');
        cy.get('.page .category-loadmore button .btn-text').should('be.visible');
        cy.get('.winner .winner-title').should('be.visible').should('have.text', 'Recent Slots winners');
        cy.scrollTo(0, 1500);
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Live Casino side menu page', () => {
        cy.get('.sidemenu-main .livecasino .text').should('be.visible').and('have.text', 'Live Casino').click();
        cy.get('.container .searchBar-input input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.page .page-title').should('be.visible').and('have.text', 'Live Casino');
        cy.log();
        cy.get('.page .game-list > a').should('be.visible');
        cy.get('.page .category-loadmore .text').should('be.visible');
        cy.get('.page .category-loadmore button .btn-text').should('be.visible');
        cy.get('.winner .winner-title').should('be.visible').should('have.text', 'Recent Live Casino winners');
        cy.scrollTo(0, 1500);
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Blackjack side menu page', () => {
        cy.get('.sidemenu-main .blackjack .text').should('be.visible').and('have.text', 'Blackjack').click();
        cy.get('.container .searchBar-input input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.page .page-title').should('be.visible').and('have.text', 'Blackjack');
        cy.get('.page .game-list > a').should('be.visible');
        cy.get('.page .category-loadmore .text').should('be.visible');
        cy.get('.page .category-loadmore button .btn-text').should('be.visible');
        cy.get('.winner .winner-title').should('be.visible').should('have.text', 'Recent Blackjack winners');
        cy.scrollTo(0, 1500);
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Roulette side menu page', () => {
        cy.get('.sidemenu-main .roulette .text').should('be.visible').and('have.text', 'Roulette').click();
        cy.get('.container .searchBar-input input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.page .page-title').should('be.visible').and('have.text', 'Roulette');
        cy.get('.page .game-list > a').should('be.visible');
        cy.get('.page .category-loadmore .text').should('be.visible');
        cy.get('.page .category-loadmore button .btn-text').should('be.visible');
        cy.get('.winner .winner-title').should('be.visible').should('have.text', 'Recent Roulette winners');
        cy.scrollTo(0, 1500);
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.wait(1000);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Baccarat side menu page', () => {
        cy.get('body').then($body => {
            if($body.find('div.header .close-icon') == true){
                cy.get('div.header .close-icon').click();
            }else{
                cy.log('phone bonus not found');
            }
        });
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        cy.get('.sidemenu-main .baccarat .text').should('be.visible').and('have.text', 'Baccarat').click();
        cy.get('.container .searchBar-input input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.page .page-title').should('be.visible').and('have.text', 'Baccarat');
        cy.get('.page .game-list > a').should('be.visible');
        cy.get('.page .category-loadmore .text').should('be.visible');
        cy.get('.page .category-loadmore button .btn-text').should('be.visible');
        cy.get('.winner .winner-title').should('be.visible').should('have.text', 'Recent Baccarat winners');
        cy.scrollTo(0, 1700);
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Popular side menu page', () => {
        cy.get('.sidemenu-main .popular .text').should('be.visible').and('have.text', 'Popular').click();
        cy.get('.container .searchBar-input input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.page .page-title').should('be.visible').and('have.text', 'Popular Games');
        cy.get('.page .game-list > a').should('be.visible');
        cy.get('.page .category-loadmore .text').should('be.visible');
        cy.get('.page .category-loadmore button .btn-text').should('be.visible');
        cy.get('.winner .winner-title').should('be.visible').should('have.text', 'Recent Bitcoin casino winners');
        cy.scrollTo(0, 1500);
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.wait(1000);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Game Providers side menu page', () => {
        // cy.get('.notification-alert-close').click();
        cy.get('.sidemenu-main .providers .text').should('be.visible').and('have.text', 'Game Providers').click();
        cy.get('.promo .text').should('be.visible').and('have.text', 'Providers');
        cy.get('.searchBar .searchBar-wrapper > div').should('be.visible');
        cy.get('.page > a').should('be.visible');
        cy.get('.winner .winner-title').should('be.visible').should('have.text', 'Recent Bitcoin casino winners');
        cy.scrollTo(0, 1000);
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Rocketpot Originals', () => {
        cy.get('body').then($body => {
            if($body.find('div.header .close-icon') == true){
                cy.get('div.header .close-icon').click();
            }else{
                cy.log('phone bonus not found');
            }
        });
        cy.get('a.crashgame .text').should('be.visible').and('have.text', 'Rocketpot Originals').click();
        cy.get('.page .page-title').should('be.visible').and('have.text', 'Provider Games');
        cy.get('.page .gameList > a').should('be.visible').and('have.length', 3);
        cy.get('.page .loadMore .text').should('be.visible').and('have.text', 'Displaying 3 of 3 Games');
        cy.get('.page .loadMore button .btn-text').should('be.visible').and('have.text', 'LOAD MORE');
        cy.get('div.providers .providerSlider .splide__list > a').should('be.visible');
        cy.scrollTo(0, 500);
        cy.get('.winner .winner-title').should('be.visible').and('have.text', 'Recent Exclusive-games winners');
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Crash game page', () => {
        
        cy.get('.gameList a[href="/exclusive-games/crash-game/"]').click();
        cy.get('.page iframe').should('be.visible');
        cy.get('.games a[href="/recent/"] .title-text').should('be.visible').should('have.text', 'Recently Played');
        cy.get('.games a[href="/popular/"] .title-text').should('be.visible').should('have.text', 'Recomended Games');
        cy.get('.games a[href="/popular/"]').parent().get('.splide__list > a').should('be.visible');
        cy.get('div.providers .title-text').should('be.visible').and('have.text', 'Providers');
        cy.get('div.providers .providerSlider .splide__list > a').should('be.visible');
        cy.scrollTo(0, 1500);
        cy.get('.winner .winner-title').should('be.visible').and('have.text', 'Recent Exclusive-games winners');
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Plinko page', () => {
        cy.get('a.crashgame .text').should('be.visible').and('have.text', 'Rocketpot Originals').click();
        cy.get('.gameList a[href="/exclusive-games/plinko/"]').click();
        cy.get('.page iframe', {timeout:20000}).should('be.visible');
        cy.get('.games a[href="/recent/"] .title-text').should('be.visible').should('have.text', 'Recently Played');
        cy.get('.games a[href="/popular/"] .title-text').should('be.visible').should('have.text', 'Recomended Games');
        cy.get('.games a[href="/popular/"]').parent().get('.splide__list > a').should('be.visible');
        cy.get('div.providers .title-text').should('be.visible').and('have.text', 'Providers');
        cy.get('div.providers .providerSlider .splide__list > a').should('be.visible');
        cy.scrollTo(0, 1500);
        cy.get('.winner .winner-title').should('be.visible').and('have.text', 'Recent Exclusive-games winners');
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Wheel page', () => {
        cy.get('a.crashgame .text').should('be.visible').and('have.text', 'Rocketpot Originals').click();
        cy.get('.gameList a[href="/exclusive-games/wheel/"]').click();
        cy.get('.page iframe', {timeout:20000}).should('be.visible');
        cy.get('.games a[href="/recent/"] .title-text').should('be.visible').should('have.text', 'Recently Played');
        cy.get('.games a[href="/popular/"] .title-text').should('be.visible').should('have.text', 'Recomended Games');
        cy.get('.games a[href="/popular/"]').parent().get('.splide__list > a').should('be.visible');
        cy.get('div.providers .title-text').should('be.visible').and('have.text', 'Providers');
        cy.get('div.providers .providerSlider .splide__list > a').should('be.visible');
        cy.scrollTo(0, 1500);
        cy.get('.winner .winner-title').should('be.visible').and('have.text', 'Recent Exclusive-games winners');
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Sportsbook side menu page', () => {
        cy.get('a[href="/sportsbetting/"] .text').should('be.visible').and('have.text', 'Sportsbook').click();
        cy.get('.gameSearch input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.games a[href="/recent/"] .title-text').should('be.visible').should('have.text', 'Recently Played');
        cy.get('.games a[href="/popular/"]').parent().get('.splide__list > a').should('be.visible');
        cy.get('div.providers .title-text').should('be.visible').and('have.text', 'Providers');
        cy.get('div.providers .providerSlider .splide__list > a').should('be.visible');
        cy.scrollTo(0, 2000);
        cy.wait(1000);
        cy.get('.winner .winner-title').should('be.visible').and('have.text', 'Recent Sportsbook winners');
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Poker side menu page', () => {
        cy.get('body').then($body => {
            if($body.find('div.header .close-icon') == true){
                cy.get('div.header .close-icon').click();
            }else{
                cy.log('phone bonus not found');
            }
        });
        cy.get('.sidemenu-main .poker .text').should('be.visible').and('have.text', 'Poker').click();
        cy.get('.layout-wrapper .fullscreen iframe', {timeout:20_000}).should('be.visible');
        cy.get('.gameSearch input').should('be.visible').invoke('attr', 'placeholder').should('contain', 'Search your game...');
        cy.get('.games a[href="/recent/"] .title-text').should('be.visible').should('have.text', 'Recently Played');
        cy.get('.games a[href="/popular/"]').parent().get('.splide__list > a').should('be.visible');
        cy.get('div.providers .title-text').should('be.visible').and('have.text', 'Providers');
        cy.get('div.providers .providerSlider .splide__list > a').should('be.visible');
        cy.scrollTo(0, 2000);
        cy.wait(1000);
        cy.get('.winner .winner-title').should('be.visible').and('have.text', 'Recent Poker winners');
        cy.get('.winner .table-header tr > th').should('be.visible').should('have.length', 6);
        cy.get('.winner tbody >:nth-child(1) >:nth-child(3)').invoke('text').then((text) => {
            let split = text.split(' ')[1];
            expect(split).not.eq('day');
            expect(split).not.eq('days');
            expect(split).not.eq('week');
            expect(split).not.eq('weeks');
            expect(split).not.eq('month');
            expect(split).not.eq('months');
            expect(split).not.eq('year');
            expect(split).not.eq('years');
        });
    });

    it('Race side menu page', () => {
        cy.wait(5000);
        cy.get('.sidemenu-main a[href="/race/"] .text').should('be.visible').and('have.text', 'Race').click();
        cy.get('h1.section').should('be.visible');
        cy.get('.banner img').should('be.visible').should('have.attr', 'src').and('not.be.empty');
        cy.get('.promo .promo-title').should('be.visible');
        cy.get('.promo .promo-subtitle').should('be.visible');
        // cy.get('.promo .participate button .btn-text').should('be.visible').and('have.text', 'OPT IN TO RACE');
        cy.get('.participate .expire .expire-date').should('be.visible');
        cy.get('.container .points > div img').should('be.visible').should('have.attr', 'src').and('not.be.empty');
        cy.scrollTo(0, 1500);
        cy.get('.table .table-container thead > th', {timeout:10_000}).should('be.visible');
        cy.get('.table .table-container tbody > tr').should('be.visible');
        cy.get('div.terms ul > li').should('be.visible');
    });

    it('Vip page', () => {
        cy.get('.sidemenu-section .vip .text').should('be.visible').and('have.text', 'Vip').click();
        cy.get('.page .list > div picture img').should('be.visible').should('have.attr', "src").should('not.be.empty');
        cy.get('.page .vipterms .vipterms-title .vipterms-text').should('be.visible').and('have.text', 'How to Join');
        cy.get('.page .vipterms .rules-introduction').should('be.visible');
        cy.get('.page .vipterms .rules-list > div').should('be.visible');
        cy.scrollTo(0, 1500);
        cy.get('.winner .table').should('be.visible');
    });

    it('Promotions page', () => {
        cy.get('.sidemenu-section .promotions .text').should('be.visible').and('have.text', 'Promotions').click();
        cy.get('.promotions-title img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.promotions-title .title').should('be.visible').and('have.text', 'Current Promotions');
        cy.get('.promotions-list > a').should('be.visible').should('have.attr', 'href').should('not.be.empty');
        cy.get('.promotions-list > a picture img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.promotions-list > a .promotion-info .promotion-title p').should('be.visible');
        cy.get('.promotions-list > a .promotion-info button .btn-text').should('be.visible');
    });
    
    it('Change language', () => {
        cy.get('.sidemenu-footer .lang-select button').should('be.visible').click();
        cy.get('.sidemenu-footer .lang-select .dropdown .dropdown-wrapper > :nth-child(3)').click();
        cy.get('.promotions-title .title').should('be.visible').and('have.text', '現在のプロモーション');
        cy.get('.sidemenu-footer .lang-select button').should('be.visible').click();
        cy.get('.sidemenu-footer .lang-select .dropdown .dropdown-wrapper > :nth-child(1)').click();
    });

    it('Ethereum crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/ethereumcasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/ethereumcasino/"]').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with ETH');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Ethereum');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: ETH');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Ethereum On Wikipedia: Ethereum Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Ethereum(ETH)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Ethereumcasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });
    it('Thether crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/tethercasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/tethercasino/"] img').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with USDTE');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Tether USD');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: USDTE');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Tether USD On Wikipedia: Tether USD Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Tether USD(USDTE)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Tethercasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });

    it('NEO crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/neocasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/neocasino/"] img').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with NEO');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Neo');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: NEO');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Neo On Wikipedia: Neo Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Neo(NEO)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Neocasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });

    it('Cardano crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/ethereumcasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/ethereumcasino/"]').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with ETH');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Ethereum');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: ETH');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Ethereum On Wikipedia: Ethereum Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Ethereum(ETH)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Ethereumcasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });

    it('Thether crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/tethercasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/tethercasino/"] img').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with USDTE');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Tether USD');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: USDTE');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Tether USD On Wikipedia: Tether USD Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Tether USD(USDTE)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Tethercasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });

    it('NEO crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/cardanocasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/cardanocasino/"] img').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with ADA');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Cardano');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: ADA');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Cardano On Wikipedia: Cardano Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Cardano(ADA)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Cardanocasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });

    it('Binance crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/binancecasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/binancecasino/"] img').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with BNB');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Binance Coin');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: BNB');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Binance Coin On Wikipedia: Binance Coin Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Binance Coin(BNB)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Binancecasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });

    it('Litecoin crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/litecoincasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/litecoincasino/"] img').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with LTC');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Litecoin');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: LTC');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Litecoin On Wikipedia: Litecoin Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Litecoin(LTC)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Litecoincasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });

    it('Bitcoincash crypto page', () => {
        cy.visit('https://rocketpot.io');
        // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        // cy.get('nav .logo').click();
        cy.get('.searchBar-wrapper .cryptos a[href="/bitcoincashcasino/"] img', {timeout: 20000}).should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .cryptos a[href="/bitcoincashcasino/"] img').click();
        cy.get('.searchBar-wrapper .left .row img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.searchBar-wrapper .left .row .price').should('be.visible');
        cy.get('.searchBar-wrapper .left .row .changes').should('be.visible');
        cy.get('.content .title span').should('be.visible').and('have.text', 'Top Games Plays with BCH');
        cy.get('.content .splide__list > a img').should('be.visible').should('have.attr', 'src').should('not.be.empty');
        cy.get('.content .crypto-summary .col .name').should('be.visible').and('have.text', 'Bitcoin cash');
        cy.get('.content .crypto-summary .col .shortname').should('be.visible').and('have.text', 'Shortname: BCH');
        cy.get('.content .crypto-summary .col > div ul li').should('be.visible');
        cy.get('.content .crypto-summary .col .wiki').should('be.visible').and('have.text', 'Bitcoin cash On Wikipedia: Bitcoin cash Wiki');
        cy.get('.content .crypto-summary .col .wiki a').should('be.visible').should('have.attr', 'href').and('not.be.empty');
        cy.get('.content .crypto-summary .col .chart-title').should('be.visible').and('have.text', 'One Year History - Bitcoin cash(BCH)');
        cy.get('.content .crypto-summary .col .crypto-sidebar-graph canvas').should('be.visible');
        cy.get('.content .html > h2').should('be.visible');
        cy.get('.content .html > p').should('be.visible');
        cy.get('.content .winner .winner-title').should('be.visible').and('have.text', 'Recent Bitcoincashcasino winners');
        cy.scrollTo(0, 6000);
        // cy.get('.content .winner .table .table-header tr > th').should('be.visible').and('have.length', 6);
        cy.get('.content .winner .table tbody > :nth-child(1) .time').invoke('text').then((text) => {
            let time = text.split(' ')[1];
            expect(time).not.eq('day');
            expect(time).not.eq('days');
            expect(time).not.eq('week');
            expect(time).not.eq('weeks');
            expect(time).not.eq('month');
            expect(time).not.eq('months');
            expect(time).not.eq('year');
            expect(time).not.eq('years');
        });
    });
    

    it('Providers count', () => {
        cy.get('.sidemenu-main .providers').click();

        let providersArr = ['/providers/exclusive-games/', '/providers/pragmatic-play/', '/providers/play-n-go/', '/providers/gamomat/', '/providers/onetouch/', 
        '/providers/kagaming/', '/providers/playtech/', '/providers/spinomenal/', 
        // '/providers/habanero/', 
        '/providers/evoplay-entertainment/', '/providers/amusnet/', 
        '/providers/wazdan/', '/providers/isoftbet/', '/providers/nucleus/', '/providers/amatic/', '/providers/betsoft/', '/providers/booming-games/', '/providers/gameart/', 
        '/providers/endorphina/', '/providers/fazi/', '/providers/bgaming/', '/providers/1x2gaming/', '/providers/belatra/', '/providers/quickspin/', '/providers/platipus/', 
        '/providers/blueprint-gaming/', '/providers/kalamba-games/', '/providers/caleta-gaming/', '/providers/playson/', '/providers/pgsoft/', '/providers/spearhead/', 
        '/providers/swintt/', '/providers/elk/', '/providers/thunderkick/', '/providers/eagaming/', '/providers/goldenrace/', '/providers/mascot/', '/providers/booongo/', 
        '/providers/alg/', '/providers/mrslotty/', '/providers/tom-horn/', '/providers/smartsoft/', '/providers/mancala/', '/providers/big-time-gaming/', '/providers/reelplay/', '/providers/push-gaming/', 
        '/providers/truelab/', '/providers/gamesinc/', '/providers/revolver/', '/providers/arcadem/', '/providers/fantasma/', '/providers/bet2tech/', '/providers/merkur/', 
        '/providers/kiron/', '/providers/leap-gaming/', '/providers/petersons/', '/providers/4theplayer/', '/providers/candlebets/', '/providers/maxwingaming/', 
        '/providers/hacksaw-gaming/', '/providers/relax-gaming/', '/providers/gamzix/'];

        let providersOnThePage = [];
        // console.log(cy.get(".gameList > a"))
        cy.get(".gameList > a").then((array)=>{
            array.each((i,el)=>{
                providersOnThePage.push(el.getAttribute('href'));
            });
            cy.log(providersOnThePage, 'providersOnThePage');
            let notFoundProviders = [];
            for(let n = 0; n < providersArr.length; n += 1){
                let currentProvider = providersArr[n];
                // cy.log(currentProvider, n, 'currentProvider');
                let providerFound = false;
                for(let i = 0; i < providersOnThePage.length; i += 1){
                    let provider = providersOnThePage[i];
                    // cy.log(provider, i, 'provider');
                    if(currentProvider == provider){
                        providerFound = true;
                        // cy.log(provider);
                        break;
                    };

                };
                if(providerFound == false){
                    notFoundProviders.push(currentProvider);
                };
            };
            cy.log(notFoundProviders, 'notFoundProviders');

            if(notFoundProviders.length > 0){
                throw new Error("providers not found: " + notFoundProviders.toString());

            };
        });
    });
    if (new Date().getHours() > 10 && new Date().getHours() < 14) {
        // perform test
        it('test balance', () => {
            cy.get('nav.nav .header-deposit .cryptobalance-btn').invoke('attr', 'title').then((balance) => {
                let currentBalance = balance;
                cy.log('current balance ', currentBalance);
                cy.visit('https://rocketpot.io/exclusive-games/wheel/');
                // cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
                cy.wait(5000);
                cy.get('iframe.frame').its('0.contentDocument').its('body').click(50, 550);
                cy.wait(20000);
                cy.get('nav.nav .header-deposit .cryptobalance-btn').invoke('attr', 'title').then((balanceAfterBet) => {
                    cy.log('currentBalance: ' + currentBalance.toString());
                    cy.log('balanceAfterBet: ' + balanceAfterBet.toString());
                    if(currentBalance == balanceAfterBet){
                        throw new Error('balances match: ' + ' current balance ' + currentBalance.toString() + ' balance after bet ' + balanceAfterBet.toString());
                    };
                });
            });
        });
    };

    
        it('Menu',() => {
        //cy.visit('https://rocketpot.io');
        //cy.get('span[class="btn button-gray"]').click()
        //cy.get('input[id="email"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
        //cy.get('input[id="password"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
        //cy.get('button[id="auth-btn"]').should('be.visible').click();
        cy.get('.detail > .btn > .btn-text').should('be.visible').click()
        function User (menu){
          return cy.get('div[class="dropdown gray arrow arrow-right"]').contains(menu).should('be.visible')
        }
        User('Deposit')
        User('Withdraw')
        User('Transactions')
        User('Buy Crypto')
        User('Send a Tip')
        User('Bonus')
        User('Sportsbook')//<iframe> 
        User('Poker')//<iframe> 
        User('Race')
        User('Vip')
        User('Notifications')
        User('Live Chat')//<iframe> 
        User('Change Password')
        User('Autentification')
        User('Logout')
     })//.should('be.visible').and('have.text', '')
     it('Deposit',() => {
       cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Deposit').click()//cy.get('.deposit > .item-text').click()
       cy.get('input[class="input-controler"]').should('be.visible')
       cy.get('i[class="r-copy r btn-icon"]').should('be.visible')
       cy.get('button[class="btn small flatblack hSmall cryptobalance-btn"]').should('be.visible')
       cy.get('span[class="header-text"]').should('be.visible').and('have.text', 'Wallet')
       cy.get('canvas[class="qrcode"]').should('be.visible')
       cy.contains('0.0002 BTC').should('be.visible').and('have.text', '0.0002 BTC')
       cy.get('div[class="crypto-title"]').should('be.visible').and('have.text', 'We support the following cryptocurrencies:')
       cy.get('.wrapper > .text').should('be.visible').and('have.text', 'Send any amount more than 0.0002 BTC to the following address. In the case of a non-instant deposit, 1 confirmation is required for completion. For transactions we are using Bitcoin standard. ')
       cy.contains('Withdraw').should('be.visible').click()
       cy.contains('Your Bonus balance will be lost if you withdraw before wagering requirements have been met').should('be.visible').and('have.text', 'Your Bonus balance will be lost if you withdraw before wagering requirements have been met')
       cy.get('label[class="labelText"]').should('be.visible')
       cy.get('input[class="input-controler"]').should('be.visible')
       cy.get('button[class="btn small hMedium round max"]').should('be.visible')
       cy.contains('Select Crypto(real balance)').should('be.visible')
       cy.get('.newCat > .item-text').should('be.visible').click()          
       cy.contains('The destination address you will see in the iframe can differ from the one you have on Rockelpot. The funds will be transferred to your Rocketpot accounts upon successful completion.').should('be.visible')
       cy.get('button[class="btn small orange hMedium fullwidth buy-btn"]').should('be.visible')
       cy.get('button[class="btn small hMedium"]').should('be.visible')
       cy.get(':nth-child(4) > .item-text').should('be.visible').click()
       cy.get('div[class="btn-text"]').should('be.visible')
       cy.get('button[class="btn small hMedium round min"]').should('be.visible')
       cy.get('input[class="input-controler"]').should('be.visible')
       cy.get('.header > .r-close').click()
     })
     it('Withdraw', () => {
        cy.get('body').then($body => {
            if($body.find('div.header .close-icon') == true){
                cy.get('div.header .close-icon').click();
            }else{
                cy.log('phone bonus not found');
            }
        });
       cy.get('.detail > .btn > .btn-text').should('be.visible').click()
       cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Withdraw').click()
       cy.get('div[class="text first"]').should('be.visible')
       cy.contains('5-30 minutes').should('be.visible').and('have.text', '5-30 minutes')
       cy.get('.first').should('be.visible').and('have.text', 'Your withdrawal will have 0.00006 subtracted from your remaining balance to cover the fee required to process the transaction')
       cy.get('.text.small').should('be.visible').and('have.text', '* Transactions are usually sent by us immediately and are confirmed in the blockchain within 5-30 minutes')
       cy.get('button[class="btn small orange hMedium withdraw-btn"]').should('be.visible')
       cy.get('label[class="labelText"]').should('be.visible')
       cy.get('.header > .r-close').click()
     })
     it('Buy Crypto',() => {
        cy.get('body').then($body => {
            if($body.find('div.header .close-icon') == true){
                cy.get('div.header .close-icon').click();
            }else{
                cy.log('phone bonus not found');
            }
        });
       cy.get('.detail > .btn > .btn-text').should('be.visible').click();
       cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Buy Crypto').click()
       cy.contains('The destination address you will see in the iframe can differ from the one you have on Rockelpot. The funds will be transferred to your Rocketpot accounts upon successful completion.').should('be.visible').and('have.text', 'The destination address you will see in the iframe can differ from the one you have on Rockelpot. The funds will be transferred to your Rocketpot accounts upon successful completion.')
       cy.get('button[class="btn small orange hMedium fullwidth buy-btn"]').should('be.visible')
       cy.get('button[class="btn small hMedium"]').should('be.visible')
       cy.get('.header > .r-close').should('be.visible').click()
     })
     it('Send a Tip', () => {
        cy.get('body').then($body => {
            if($body.find('div.header .close-icon') == true){
                cy.get('div.header .close-icon').click();
            }else{
                cy.log('phone bonus not found');
            }
        });
       cy.get('.detail > .btn > .btn-text').should('be.visible').click();
       cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Send a Tip').click()
       cy.get('div[class="btn-text center"]').should('be.visible')
       cy.get('button[class="btn small orange hMedium uppercase fullwidth"]').should('be.visible')
       cy.get('button[class="btn small flatblack hSmall cryptobalance-btn"]').should('be.visible')
       cy.get('i[class="r r-arrow btn-arrow down"]').should('be.visible')
       cy.get('.header > .r-close').click()
     })
     it('Transactions', () => {
       cy.get('.detail > .btn > .btn-text').should('be.visible').click()
       cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Transactions').click()
       cy.scrollTo(0, 0);
       cy.get('.table-header > .table-row > :nth-child(1)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(2)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(3)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(4)').should('be.visible')
       cy.get(':nth-child(1) > .status > span').should('be.visible')
       cy.contains('Withdrawal History').should('be.visible').click();
       cy.get('.table-header > .table-row > :nth-child(1)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(2)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(3)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(4)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(5)').should('be.visible')
       cy.contains('Confirmed').should('be.visible')
       cy.contains('Game History').should('be.visible').click()
       cy.get('.table-header > .table-row > :nth-child(1)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(2)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(3)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(4)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(5)').should('be.visible')
       cy.get('.table-header > .table-row > :nth-child(6)').should('be.visible')
     })
     it('Bonus', () => {
        cy.get('body').then($body => {
            if($body.find('div.header .close-icon') == true){
                cy.get('div.header .close-icon').click();
            }else{
                cy.log('phone bonus not found');
            }
        });
       cy.get('.detail > .btn > .btn-text').should('be.visible').click();
       cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Bonus').click()
       //cy.get('.header > .r-close').click()
       cy.contains('Active Bonus').should('be.visible')
       cy.contains('Available Bonuses').should('be.visible')
       cy.contains('Bonus Code Activation').should('be.visible')
       cy.get('input[class="input-controler"]').should('be.visible')
       cy.contains('Bonus History').should('be.visible')
     })
     it('Sportsbook', () => {
        cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
       cy.get('.detail > .btn > .btn-text', {timeout: 20000}).should('be.visible').click();
       cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Sportsbook').click()
       cy.get('div[class="fullscreen"]').should('be.visible')
     })
     it('Poker' , () => {
       cy.get('.detail > .btn > .btn-text', {timeout: 20000}).should('be.visible').click();
       cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Poker').click()
       cy.wait(10000)
       cy.get('.frame').should('be.visible')
     })
    it('Race' , () => {
      cy.get('.detail > .btn > .btn-text', {timeout: 20000}).should('be.visible').click()
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Race').click()
      cy.get('h3[class="section"]').should('be.visible').and('have.text', 'How does it work?Terms and Conditions')
      cy.get('h3[class="section leader"]').should('be.visible').and('have.text', 'Leaderboard ')
      cy.scrollTo(0, 1200)
      cy.get('.points > :nth-child(1)').should('be.visible').and('have.text', 'Every wager  you make counts  towards the leaderboard.')
      cy.get('.points > :nth-child(2)').should('be.visible').and('have.text', 'Every wager counts as 1 Pointand Equals $1 on the Leaderboard.')
      cy.get('.points > :nth-child(3)').should('be.visible').and('have.text', 'All Prizes will be Paid out in Bitcoin.')
      cy.scrollTo(0, 3000)
      cy.get('.terms').should('be.visible').and('have.text', 'You must have an account in good standing on RocketPot.Giveaway includes both Casino and Sports wager.You must have an account not in violation of our Terms of Service.RocketPot reserves the right to hold void, suspend, cancel, or amend this promotion where it becomes necessary to do so.Entries will be declared void if the entrant is found engaging in fraud, misrepresentation, hacking or exploitation.RocketPot reserves the right to perform additional KYC/AML checks as a condition of receiving prize.No RocketPot partners or employees are eligible for prizes.')
      //cy.get('img[src="https://static.rocketpot.io/static-content/live/tournamentPictures/rocketpot_race_banner_1-31_august_monthly_1500x500.jCTX44nqbKKW7kVDVbDRRA.jpg"]').should('be.visible')
      cy.get('h2[class="promo-title"]').should('be.visible')
      cy.get('button[class="btn large orange hMedium with-icons accept_round participate-btn"]').should('be.visible')
    })
    it('Vip', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click();
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Vip').click()
      cy.get('img[src="https://rocketpot.io/assets/vip_1.628fb30b.png"]').should('be.visible')
      cy.get('.list > :nth-child(1) > .title').should('be.visible').and('have.text', 'VIP Personal Account Manager')
      cy.get(':nth-child(1) > .description').should('be.visible').and('have.text', 'Our dedicated VIP account managers possess a wealth of industry experience and can assist you with all aspects of your account.')
      cy.get('img[src="https://rocketpot.io/assets/vip_2.8bd70830.png"]').should('be.visible')
      cy.contains('Exclusive Bonuses').should('be.visible').and('have.text', 'Exclusive Bonuses')
      cy.contains('Rocketpot believes that variety is the spice of life! As a VIP, you can benefit from rewards that suit your style of play. That`s why your VIP manager is always listening!').should('be.visible').and('have.text', 'Rocketpot believes that variety is the spice of life! As a VIP, you can benefit from rewards that suit your style of play. That`s why your VIP manager is always listening!')
      cy.get('img[src="https://rocketpot.io/assets/vip_3.5e6c52f7.png"]').should('be.visible')
      cy.contains('VIP Events and Hospitality').should('be.visible').and('have.text', 'VIP Events and Hospitality')
      cy.get(':nth-child(3) > .description').should('be.visible').and('have.text', 'With so many world-class events all year round, there is something for everyone! \n Let your account manager know about your lifestyle and preferences — you won`t be \n disappointed!')
      cy.scrollTo(0, 1000)
      cy.get('img[src="https://rocketpot.io/assets/vip_4.1b66cb11.png"]').should('be.visible')
      cy.contains('VIP Special Promotions').should('be.visible').and('have.text', 'VIP Special Promotions')
      cy.contains('That is why Rocketpot VIP players can enjoy enhanced bonuses, VIP newsletters, and exclusive promotions with Rocketpot prizes.').should('be.visible').and('have.text', 'That is why Rocketpot VIP players can enjoy enhanced \n bonuses, VIP newsletters, and exclusive promotions with Rocketpot prizes.')
      cy.get('img[src="https://rocketpot.io/assets/vip_5.f4aeb78a.png"]').should('be.visible')
      cy.contains('Priority Responses to Feedback').should('be.visible').and('have.text', 'Priority Responses to Feedback')
      cy.contains('Customer experience is at the heart of our operations, and we take great pride in listening to our most loyal VIPs and acting upon feedback, please let your VIP manager know! We are always listening.').should('be.visible').and('have.text', 'Customer experience is at the heart of our operations, \n and we take great pride in listening to our most loyal VIPs and acting upon feedback, \n please let your VIP manager know! We are always listening.')
      cy.get('img[src="https://rocketpot.io/assets/vip_6.325d7908.png"]').should('be.visible')
      cy.contains('VIP Gifts').should('be.visible').and('have.text', 'VIP Gifts')
      cy.contains('Everyone loves surprises! That`s why we send our VIP players a mystery parcel from time to time!').should('be.visible').and('have.text', 'Everyone loves surprises! \n That`s why we send our VIP players a mystery parcel from time to time!')
      cy.get('div[class="rules"]').should('be.visible').and('have.text', 'To retain exclusivity, the Rocketpot VIP Program is strictly invitation - only, but the criteria below will give you an idea of what we take into consideration when reviewing accounts for VIP. When your account meets our requirements, a VIP manager will reach out to you.Loyalty - If you have other Casino Accounts, consider making Rocketpot your primary destination. Loyalty is appreciated above all, and will increase your chances of becoming a VIP.Product - Whether you are passionate about Slots, Live Casino or Crash, using a variety of our products can increase your chances.Activity - Players who frequent Rocketpot regularly, and enjoy our services responsibly, are in with a better chance of being spotted.')
    })
    it('Notifications', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click();
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Notifications').click()
      cy.contains('Notifications').should('be.visible')
      cy.get('div[class="notifications-list empty"]').should('be.visible')
    })
    it('Change Password', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click()
      //cy.wait(7000)
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Change Password').click()
      cy.get('input[name="old-password"]').should('be.visible')
      cy.get('input[name="new-password"]').should('be.visible')
      cy.get('input[name="new-password-confirm"]').should('be.visible')
      cy.get('button[class="btn small orange hMedium fullwidth changepass-button"]').should('be.visible')
      cy.get('.header > .r-close').should('be.visible').click()
    })
    it('Autentification', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click();
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Autentification').click()
      cy.get('.main > .wrapper > :nth-child(1)').should('be.visible').and('have.text', 'To improve your account security we have implemented optional Two Factor Authentication. Use an application like Google Authenticator in order to activate this feature. Scan the QR code with your authenticator app and enter the code you will get below.')
      cy.get('.main > .wrapper > :nth-child(2)').should('be.visible').and('have.text', 'You can backup secret code to restore access in case device lost:')
      cy.get('img[class="qrcode"]').should('be.visible')
      cy.get('input[class="input-controler"]').should('be.visible')
      cy.get('i[class="r-copy r btn-icon"]').should('be.visible')
      cy.get('.header > .r-close').should('be.visible').click()
    })
    it('Logout', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click();
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Logout').click()
      cy.get('div[class="main"]').should('be.visible')
      cy.get('button[class="btn small orange hMedium allowHover"]').should('be.visible')
      cy.get('button[class="btn small hMedium allowHover"]').should('be.visible').click()
    });
    // it('Change password', () => {

    //     cy.get('.header-usermenu button').click();
    //     cy.get('.dropdown .dropdown-wrapper .changepass .item-text').click();
    //     cy.get('.main form.center > :nth-child(1) input').type('vsemeniuk@devforth.io');
    //     cy.get('.main form.center > :nth-child(2) input').type('vsemeniuk+1@devforth.io');
    //     cy.get('.main form.center > :nth-child(3) input').type('vsemeniuk+1@devforth.io');
    //     cy.get('.main form.center button').click();
    //     cy.wait(2000);
    //     cy.get('div.main button').click();
    //     cy.get('.header-usermenu button').click();
    //     cy.get('.dropdown-wrapper .exit').click();
    //     cy.get('div.main button.orange').click();
    //     cy.get('div.end span.button-gray').click();
    //     cy.get('input#email').type('vsemeniuk@devforth.io');
    //     cy.get('input#password').type('vsemeniuk+1@devforth.io');
    //     cy.get('button#auth-btn').click();

    //     cy.get('.header-usermenu button').click();
    //     cy.get('.dropdown .dropdown-wrapper .changepass .item-text').click();
    //     cy.get('.main form.center > :nth-child(1) input').type('vsemeniuk+1@devforth.io');
    //     cy.get('.main form.center > :nth-child(2) input').type('vsemeniuk@devforth.io');
    //     cy.get('.main form.center > :nth-child(3) input').type('vsemeniuk@devforth.io');
    //     cy.get('.main form.center button').click();
    //     cy.wait(2000);
    //     cy.get('div.main button').click();
    // });
//     it('Live Chat', () => {
//      cy.get('.detail > .btn > .btn-text').should('be.visible').click()
//      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Live Chat').click()
//      //getIframeBody().find('div[data-testid="page-header-container"]').should('be.visible')
//      //getIframeBody().find('button[aria-label="Minimize widget"]').click()
//      cy.get('#webWidget').should('be.visible')
//     //cy.get('#webWidget', {timeout: 100000}).its('0.contentDocument').then(cy.wrap).find('').click()
//          //const getIframeDocument = () => {
//      //return cy.get('iframe[id="webWidget"]').its('0.contentDocument').should('exist')
//    //const getIframeBody = () => {
//      //return getIframeDocument().its('header').should('not.be.undefined').then(cy.wrap)
//    });


    // it.only('Check games', () => {

    //     cy.visit('https://rocketpot.io/');
    //     // cy.waitForNetworkIdle(1000);
    //     cy.get('div.end span.button-gray').click();
    //     cy.get('input#email').type('vsemeniuk@devforth.io');
    //     cy.get('input#password').type('vsemeniuk@devforth.io');
    //     cy.get('button#auth-btn').click();
    //     cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
    //     cy.wait(5_000);

    //     // cy.get('nav.nav .header-deposit .cryptobalance-btn').invoke('title').then((currentBalance) => {
    //     //     let balance = currentBalance
    //     // });
    //     let currentBalance = cy.get('nav.nav .header-deposit .cryptobalance-btn').invoke('attr', 'title');
    //     cy.log('current balance ', currentBalance);

    //     cy.visit('https://rocketpot.io/spinomenal/summer-ways/?auth=login')
    //     cy.wait(38_000);
    //     cy.get("iframe.frame").its('0.contentDocument').its('body').find('canvas').click(10, 10);
    //     cy.wait(2000);
    //     cy.get("iframe.frame").its('0.contentDocument').its('body').trigger('keydown', { keyCode: 32, });
    //     cy.wait(500);
    //     cy.get("iframe.frame").its('0.contentDocument').its('body').trigger('keyup', { keyCode: 32});
    //     cy.wait(5000);
        
    //     let balanceAfterBet = cy.get('nav.nav .header-deposit .cryptobalance-btn').invoke('attr', 'title');
    //     cy.log('balance after bet ', balanceAfterBet);

    //     if(currentBalance == balanceAfterBet){
    //         throw new Error('balances match: ' + 'current balance ' + currentBalance.toString() + 'balance after bet ' + balanceAfterBet.toString());
    //     };

    //     // cy.wait(8_000);
    //     // cy.get('iframe.frafasfsafsaafssfame').click();

    //     // getIframeBody().find('canvas').click(850, 520, {force: true});
    //     // cy.wait(5000);
    //     // cy.get('iframe.frame').focus().type('{keyCode: 32}');
    //     // getIframeBody().find('canvas').click(1182, 690, {force: true});

    // });
});

//git test

