import 'cypress-network-idle';
import { it } from 'mocha';

describe('check SEO pages', () => {
    
    it('Main page', () => {

        cy.visit('https://rocketpot.io/?fdgerg', {failOnStatusCode: false});
        // cy.intercept('https://betcare.zendesk.com/embeddable_blip?type=userAction&data=eyJjaGFubmVsIjoid2ViX3dpZGdldCIsInVzZXJBY3Rpb24iOnsiY2F0ZWdvcnkiOiJsYXVuY2hlciIsImFjdGlvbiI6ImNsaWNrIiwibGFiZWwiOiJsYXVuY2hlciIsInZhbHVlIjp7ImVtYmVkT3BlbiI6ImNoYXQifX0sImJ1aWQiOiJlMGFhZDVlZTRjZWU0ZmFhYWQ5ODdmYTZkZjNjNjgzZiIsInN1aWQiOiI1N2EyZWJiY2ZlMTE0ZDg1ODMzYTI1MTIwMTdmZmNlYiIsInZlcnNpb24iOiIxNTkzYmU5IiwidGltZXN0YW1wIjoiMjAyMi0wOS0wMVQxMzoyOToyMi4zNjNaIiwidXJsIjoiaHR0cHM6Ly9yb2NrZXRwb3QuaW8vP2ZkZ2VyZyJ9', (req) => {
        //     cy.log(req);
        //     req.continue((response) => {
        //         expect(response).to.have.property('statusCode', 300);
        //     });
        // });
        // cy.waitForNetworkIdle(1000);
        cy.get('div.menu-opener').click({force:true});
        cy.get('input[class*="search-text"]').should('be.visible');
        cy.get('span[class*="btn button-gray"]').should('be.visible');
        cy.get('span[class*="btn button-orange"]').should('be.visible');
        cy.get('div[class*="buycrypto-text buycrypto"]', {timeout: 10000}).should('be.visible');
        cy.get('.promo div.splide__track', {timeout: 10000}).should('be.visible');
        // cy.get('[href="/top-games/"]', {timeout: 10000}).parent().find('li').should('not.be.gt', 6);
        cy.get('div[class*="buycrypto-list buycrypto"]').find('a').its('length').should('be.gt', 6);
        cy.get('[href="/newest-games/"]', {timeout: 10000}).parent().find('li').its('length').should('be.gt', 6);
        cy.get('[href="/providers/"]', {timeout: 10000}).parent().find('li').its('length').should('be.gt', 6); 
        cy.get('[href="/slotsbitcoin/"]', {timeout: 10000}).parent().find('li').its('length').should('be.gt', 6);
        cy.get('div.wrapper div.pagePadding > :nth-child(6)', {timeout: 10000}).find('li').its('length').should('be.gt', 6);
        cy.get('[href="/blackjackbitcoin/"]', {timeout: 10000}).parent().find('li').its('length').should('be.gt', 6);
        cy.get('[href="/roulettebitcoin/"]', {timeout: 10000}).parent().find('li').should('have.length.gt', 6);
        cy.get('[href="/popular/"]', {timeout: 20000}).parent().find('li').should('have.length.gt', 6, {timeout: 20000});
        cy.get('[href="/baccaratwithbitcoin/"]').parent().find("li").its('length').should('be.gt', 1);
        cy.get('[href="/jackpotbitcoin/"]').parent().find('li').its('length').should('be.gt', 0);
        cy.get('div.pagePadding .winners__wrapper table thead tr').find('th').its('length').should('eq', 6);
        cy.get('div.pagePadding .winners__wrapper table tbody >:nth-child(1) > :nth-child(3) .table__item')
            .invoke('text').then((text) => {
            var splitText = text.split(' ')[1];
            expect(splitText).not.equal('days');
            expect(splitText).not.equal('day');
            expect(splitText).not.equal('weeks');
            expect(splitText).not.equal('week');
            expect(splitText).not.equal('month');
            expect(splitText).not.equal('months');
            expect(splitText).not.equal('year');
            expect(splitText).not.equal('years');
            });
        cy.get('.sidebar-crypto-list ul').find('li').its('length').should('eq', 6);
        cy.get('div[class*="flex flex-column bodytext-top"]').should('be.visible');
        cy.get('section[class*="footer-top flex centerH"]').find('a').its('length').should('eq', 5);
        cy.get('section[class*="footer-crypto flex centerH centerV"]').should('be.visible');
        cy.get('#footer-certificates').should('be.visible');
        cy.get('.side-menu .menu-header .menu-header-text', {timeout: 20000}).should('be.visible');
        cy.get('.scrollable section.menu-main > a').its('length').should('eq', 15);
        cy.get('.scrollable section.menu-main div.detail .detail-button').should('be.visible');
        cy.get('.scrollable section.menu-main div.language .selected').should('be.visible');
        cy.get('.scrollable section.menu-main div.language .selected').click();
        cy.get('.scrollable section.menu-main div.language .items .items-list > a').should('have.attr', 'href').and('not.be.empty');
        cy.get('.scrollable section.menu-main div.language .selected').click();
        cy.get('.scrollable .menu-footer').find('a').its('length').should('eq', 5);
    });
    it('Check banners images', () => {
        cy.get('div.is-initialized div.splide__list .splide__slide picture img[alt="1 BTC welcome bonus"]').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.is-initialized div.splide__list a[href="/sportsbetting/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.is-initialized div.splide__list a[href="/vip/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.is-initialized div.splide__list a[href="/poker/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.is-initialized div.splide__list a[href="/crashgame/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.is-initialized div.splide__list a[href="/livecasinobitcoin/"] img').should('have.attr', 'src').should('not.be.empty');
        cy.get('div.is-initialized div.splide__list a[href*="/race/"] picture img').should('have.attr', 'src').should('not.be.empty');
    });
        // ethereumcasino page
    it('Ethereum casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/ethereumcasino/"]').click();
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
        // binancecasino page
    it('Binance casino page', () => {
        cy.waitForNetworkIdle(2000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/binancecasino/"]').click();
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
        // cardanocasino page
    it('Cardano casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/cardanocasino/"]').click();
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.waitForNetworkIdle(1000);
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
        //Tether casino page
    it('Tether casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/tethercasino/"]').click();
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
        // ripplecasino page
    it('Ripple casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/ripplecasino/"]').click();
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
        // dogecasino page
    it('Doge casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/dogecasino/"]').click();
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
        // litecoincasino page
    it('Litecoin casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/litecoincasino/"]').click({force: true});
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
        // bitcoincashcasino page
    it('Bitcoin cash casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/bitcoincashcasino/"]').click({force: true});
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
        // troncasino page
    it('Tron casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/troncasino/"]').click({force: true});
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });
    it('neo casino page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.pagePadding .container .buycrypto-list a[href="/neocasino/"]').click();
        cy.get('div[class*="container promo-container"]').should('be.visible');
        cy.get('div[class*="button-orange promo-text-btn"]').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('#splide01-list').find('li').its('length').should('be.gt', 6);
        cy.get('.pagePadding .winners__table tbody').should('be.visible');
        cy.get('.pagePadding div[class*="container crypto-bodytext"]').should('be.visible');
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    })
        // search
    it('Search page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('#search-form input').type('Fruit Party');
        cy.get('form .search-button').click('');
        cy.get('div .title h1').should('be.visible');
        cy.get('section[class*="games_section"] div[class*="list"]').should('be.visible');
        cy.get('#search-form input').type('randomwords');
        cy.get('form .search-button').click('');
        cy.get('section.container .empty-text-gamelist').invoke('text').should('eq', 'No games or providers available for your region.');
    });
        // game page
    it('Game page', () => {
        cy.visit('https://rocketpot.io/pragmatic-play/sweet-bonanza/');
        cy.waitForNetworkIdle(1000);
        cy.get('#desk-buttons .button-gray').should('be.visible');
        cy.get('#desk-buttons .button-orange').should('be.visible');
        cy.get('section.gameSearch .search-text').should('be.visible');
        cy.get('.providers ul > li').its('length').should('be.gt', 6);
        cy.get('[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
        cy.get('img[alt="Recomended Games"]').parent().parent().find('li').its('length').should('be.gt', 6);
        cy.get('section.winners .winners__wrapper').should('be.visible');
        cy.get('section.footer-top').find('a').its('length').should('eq', 5);
    });
        // sportsbetting page
    it('Sportsbetting page', () => {
        cy.visit('https://rocketpot.io/sportsbetting/');
        cy.waitForNetworkIdle(1000);
        cy.get('div.promo-text-title').should('be.visible');
        cy.get('div .promo-text-btns button').should('be.visible').click();
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div .promo-tabs').should('be.visible');
        cy.get('div .participate .participate-title').should('be.visible');
        cy.get('div .participate .participate-description').should('be.visible');
        cy.get('div .participate button').should('be.visible').click();
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div .features-list').should('be.visible');
        cy.get('section[class*="winners flex flex-column"]').should('be.visible');
        cy.get('div .mainblock div[class*="container section description"]').should('be.visible');
    });
        // poker page
    it('Poker page', () => {
        cy.visit('https://rocketpot.io/poker/');
        cy.waitForNetworkIdle(1000);
        cy.get('div.promo-text-title').should('be.visible');
        cy.get('div .promo-text-btns button').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div .promo-tabs').should('be.visible');
        cy.get('div .participate .participate-title').should('be.visible');
        cy.get('div .participate button').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('section[class*="winners flex flex-column"]').should('be.visible');
        cy.get('div[class*="container participate-container"] button').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div[class*="container section landing-bodytext"]').should('be.visible');
    });
        // crash game
    it('crash game page', () => {
        cy.visit('https://play.rocketpot.io/');
        cy.waitForNetworkIdle(1000);
        cy.get('div.promo-text-title').should('be.visible');
        // cy.get('div.promo-text-subtitle').should('be.visible');
        cy.get('div.promo-text-btns .button-orange').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div.promo-text-btns .button-gray').should('be.visible').click();
        cy.get('div.video-container').should('be.visible')
        cy.get('div.video-container video').should('be.visible');
        cy.get('div.video-container div.video-text').should('be.visible');
        cy.get('button.crashgame-modal-btn').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('section.buycrypto div.container').should('be.visible');
        cy.get('div.mainblock').should('be.visible');
        cy.get('div section.participate .participate-title').should('be.visible');
        cy.get('div section.participate .btn').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
    });
        // livecasinobitcoin
    it('Livecasino page', () => {
        cy.visit('https://rocketpot.io/livecasinobitcoin/');
        cy.waitForNetworkIdle(1000);
        cy.get('section[class*="games_section container"]').should('be.visible');
        cy.get('section.winners .winners__table').should('be.visible');
        cy.get('section.winners .winners__table tbody >:nth-child(1) >:nth-child(3) div')
            .invoke('text').then((text) => {
                var timeText = text.split(' ')[1]
                expect(timeText).not.equal('days');
                expect(timeText).not.equal('day');
                expect(timeText).not.equal('weeks');
                expect(timeText).not.equal('week');
                expect(timeText).not.equal('months');
                expect(timeText).not.equal('year');
                expect(timeText).not.equal('years');
            });
        cy.get('div[class*="flex flex-column bodytext-top startH"]').should('be.visible');
    });
        // race
    it('Race page', () => {
        cy.visit('https://rocketpot.io/race/');
        cy.waitForNetworkIdle(1000);
        cy.get('section.container h1.section').should('be.visible');
        cy.get('section.container img[alt*="race banner"]').should('be.visible');
        cy.get('div.promo .promo-title').should('be.visible');
        cy.get('div.promo .promo-subtitle').should('be.visible');
        cy.get('div.promo .participate button').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div.points').should('be.visible');
        cy.get('div.race-table').should('be.visible');
        cy.get('div[class*="flex flex-column bodytext-top startH"]').should('be.visible');
    });
        // vip
    it('VIP page', () => {

        cy.visit('https://rocketpot.io/vip/');
        cy.waitForNetworkIdle(1000);
        cy.get('div.container .list').find('.vipcard').its('length').should('be.gt', 4);
        cy.get('div.vipterms').should('be.visible');
        cy.get('div.vipterms .vipterms-title').should('be.visible');
        cy.get('div.vipterms .rules').should('be.visible');
        cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
        cy.get('.title-block a[href="https://rocketpot.io/"]').click();
    });

    // it('Top Games page button', () => {
    //     cy.waitForNetworkIdle(1000);
    //     cy.get('.menu-main [href="/top-games/"]').click();
    //     cy.get('h1.page-title').parent().find('div[gaid]').its('length').should('be.gt', 10);
    //     cy.get('.pages-information').should('be.visible');
    //     cy.get('.pages .button-gray').should('be.visible');
    //     cy.get('a[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
    //     cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
    //         .invoke('text').then((text) => {
    //         var resentText = text.split(' ')[1];
    //         expect(resentText).not.equal('days');
    //         expect(resentText).not.equal('day');
    //         expect(resentText).not.equal('weeks');
    //         expect(resentText).not.equal('week');
    //         expect(resentText).not.equal('month');
    //         expect(resentText).not.equal('months');
    //         expect(resentText).not.equal('year');
    //         expect(resentText).not.equal('years');
    //         });
    //     cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
    //     cy.get('section.footer-main').should('be.visible');

    // });

    it('New Games page button', () => {
        cy.get('[href="/newest-games/"] .detail-button-text').click();
        cy.waitForNetworkIdle(1000);
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('h1.page-title').parent().find('div[gaid]').its('length').should('be.gt', 10);
        cy.get('.pages').should('be.visible');
        cy.get('span.button-gray').should('be.visible');
        cy.get('a[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
        cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });

    it('Slots page button', () => {
        cy.get('[href="/slotsbitcoin/"] .detail-button-text').click();
        cy.waitForNetworkIdle(1000);
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('h1.page-title').parent().find('div[gaid]').its('length').should('be.gt', 10);
        cy.get('.pages').should('be.visible');
        cy.get('span.button-gray').should('be.visible');
        cy.get('a[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
        cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
        cy.get('div.container div[class="flex flex-column bodytext-top startH"]').should('be.visible');
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });

    it('Live casino', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/livecasinobitcoin/"] .detail-button .detail-button-text').click();
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('h1.page-title').parent().find('div[gaid]').its('length').should('be.gt', 10);
        cy.get('.pages').should('be.visible');
        cy.get('span.button-gray').should('be.visible');
        cy.get('a[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
        cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
        cy.get('div.container div[class="flex flex-column bodytext-top startH"]').should('be.visible');
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });
    it('Blckjack page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/blackjackbitcoin/"] .detail-button-text').click();
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('h1.page-title').parent().find('div[gaid]').its('length').should('be.gt', 10);
        cy.get('.pages').should('be.visible');
        cy.get('span.button-gray').should('be.visible');
        cy.get('a[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
        cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
        cy.get('div.container div[class="flex flex-column bodytext-top startH"]').should('be.visible');
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });
    it('Roulette page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/roulettebitcoin/"] .detail-button-text').click();
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('h1.page-title').parent().find('div[gaid]').its('length').should('be.gt', 10);
        cy.get('.pages').should('be.visible');
        cy.get('span.button-gray').should('be.visible');
        cy.get('a[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
        cy.get('section.winners .winners__table tbody >:nth-child(1) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
        cy.get('div.container div[class="flex flex-column bodytext-top startH"]').should('be.visible');
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });
    it('Baccarat page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/baccaratwithbitcoin/"] .detail-button-text').click();
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('h1.page-title').parent().find('div[gaid]').its('length').should('be.gt', 1);
        // cy.get('.pages').should('be.visible');
        cy.get('span.button-gray').should('be.visible');
        cy.get('a[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
        cy.get('section .winners__wrapper table tbody > :nth-child(1) > :nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
        cy.get('div.container div[class="flex flex-column bodytext-top startH"]').should('be.visible');
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });
    it('Popular page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/popular/"] .detail-button-text').click();
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('.pages').should('be.visible');
        cy.get('span.button-gray').should('be.visible');
        cy.get('a[href="/providers/"].title').parent().find('li').its('length').should('be.gt', 6);
        cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });
    it('Game Providers page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/providers/"] .detail-button-text').click();
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('section.buycrypto .container .button-orange').should('be.visible').click();
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('section.providers-list .list > div').its('length').should('be.gt', 20);
        cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });
            cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
            cy.get('section.footer-main').should('be.visible');

    });
    it('Crash Game page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/crashgame/"]  .detail-button-text').click();
        cy.get('div.promo-text-title').should('be.visible');
        // cy.get('div.promo-text-subtitle').should('be.visible');
        cy.get('div.promo-text-btns .button-orange').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div.promo-text-btns .button-gray').should('be.visible').click();
        cy.get('div.video-container').should('be.visible')
        cy.get('div.video-container video').should('be.visible');
        cy.get('div.video-container div.video-text').should('be.visible');
        cy.get('button.crashgame-modal-btn').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('section.buycrypto div.container').should('be.visible');
        cy.get('div.mainblock').should('be.visible');
        cy.get('div section.participate .participate-title').should('be.visible');
        cy.get('div section.participate .btn').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();

    });
    it('Sportsbook page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/sportsbetting/"] .detail-button-text').click();
        cy.get('div.promo-text-title').should('be.visible');
        cy.get('div .promo-text-btns button').should('be.visible').click();
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div .promo-tabs').should('be.visible');
        cy.get('div .participate .participate-title').should('be.visible');
        cy.get('div .participate .participate-description').should('be.visible');
        cy.get('div .participate button').should('be.visible').click();
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div .features-list').should('be.visible');
        cy.get('section[class*="winners flex flex-column"]').should('be.visible');
        cy.get('div .mainblock div[class*="container section description"]').should('be.visible');

    });
    it('Poker page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/poker/"] .detail-button-text').click();
        cy.get('div.promo-text-title').should('be.visible');
        cy.get('div .promo-text-btns button').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div .promo-tabs').should('be.visible');
        cy.get('div .participate .participate-title').should('be.visible');
        cy.get('div .participate button').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('section[class*="winners flex flex-column"]').should('be.visible');
        cy.get('div[class*="container participate-container"] button').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div[class*="container section landing-bodytext"]').should('be.visible');

    });
    it('Race page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/race/"] .detail-button-text').click();
        cy.get('section.container h1.section').should('be.visible');
        cy.get('section.container img[alt*="race banner"]').should('be.visible');
        cy.get('div.promo .promo-title').should('be.visible');
        cy.get('div.promo .promo-subtitle').should('be.visible');
        cy.get('div.promo .participate button').should('be.visible').click();
        cy.get('#main-auth-popup').should('be.visible');
        cy.get('#main-auth-popup .close-btn').click();
        cy.get('div.points').should('be.visible');
        cy.get('div.race-table').should('be.visible');
        cy.get('div[class*="flex flex-column bodytext-top startH"]').should('be.visible');
    });
    it('VIP page button', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/vip/"] .detail-button-text').click();
        cy.get('div.container .list').find('.vipcard').its('length').should('be.gt', 4);
        cy.get('div.vipterms').should('be.visible');
        cy.get('div.vipterms .vipterms-title').should('be.visible');
        cy.get('div.vipterms .rules').should('be.visible');
        cy.get('section.winners .winners__table tbody >:nth-child(3) >:nth-child(3)')
            .invoke('text').then((text) => {
            var resentText = text.split(' ')[1];
            expect(resentText).not.equal('days');
            expect(resentText).not.equal('day');
            expect(resentText).not.equal('weeks');
            expect(resentText).not.equal('week');
            expect(resentText).not.equal('month');
            expect(resentText).not.equal('months');
            expect(resentText).not.equal('year');
            expect(resentText).not.equal('years');
            });

    });
    it('Promotions page button', () => {
        cy.visit('https://rocketpot.io/');
        cy.waitForNetworkIdle(1000);
        cy.get('[href="/promotions/"] .detail-button-text').click();
        cy.get('.promotions-title .title').should('be.visible');
        cy.get('.promotions-list-container .promotions-list > a').its('length').should('be.gt', 4);
        cy.get('span[href="/promotions/rocketpot-discord/"]').click();
        cy.get('picture.banner img').should('be.visible');
        cy.get('.promotion .description').should('be.visible');
        cy.get('.promotion .promotion-button').should('be.visible');
        cy.get('[href="/promotions/"] .detail-button-text').click();
        cy.get('[href="/promotions/rocketpot-races/"] .btn').click();
        cy.get('picture.banner img').should('be.visible');
        cy.get('.promotion .description').should('be.visible');
        cy.get('.promotion .promotion-button').should('be.visible');
        cy.get('[href="/promotions/"] .detail-button-text').click();

    });
    it('FAQ page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('.menu-footer [href="/faq/"]').click();
        cy.get('.promo h1.promo-text').should('be.visible');
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('section.pagePadding .page-view > h2').its('length').should('be.gt', 5);
        cy.get('section.pagePadding .page-view > table').its('length').should('be.gt', 5);
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });
    it('Affiliate page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('section.menu-footer [href="https://rocketpotaffiliates.io"]').click();
        cy.get('#main-header > div').its('length').should('be.eq', 3);
        cy.get('.welcome-block-container a button').should('be.visible');
        cy.visit('https://rocketpot.io/');

    });
    it('Contact page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('section.menu-footer [href="/contacts/"]').click();
        cy.get('h1.promo-text').should('be.visible');
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('div.page-view [href="mailto:support@rocketpot.io"]').should('be.visible');
        cy.get('div.page-view [href="../../../../../faq/"]').should('be.visible');
        cy.get('section.footer-top').find('a').its('length').should('be.gt', 4);
        cy.get('section.footer-main').should('be.visible');

    });
    it('Privacy Policy page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('section.menu-footer [href="/privacy/"]').click();
        cy.get('h1.promo-text').should('be.visible');
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('div.container .page-view h3').should('be.visible');
        cy.get('div.container .page-view > h2').its('length').should('be.gt', 5);
        cy.get('div.container .page-view > p').its('length').should('be.gt', 20);

    });
    it('Terms and Conditions page', () => {
        cy.waitForNetworkIdle(1000);
        cy.get('section.menu-footer [href="/terms/"]').click();
        cy.get('h1.promo-text').should('be.visible');
        cy.get('section.buycrypto .container > div').its('length').should('be.eq', 3);
        cy.get('div.container .page-view h3').should('be.visible');
        cy.get('div.page-view > div').its('length').should('be.gt', 20);

    });
    it('License', () => {
        cy.visit('https://rocketpot.io/');
        cy.get('.title-block [href="https://rocketpot.io/"]').click();
        cy.waitForNetworkIdle(1000);
        cy.get('#footer-certificates a').should('have.attr', 'href');
        cy.get('.copyright').should('be.visible');
        cy.get('.footer-bottom .links [href="/privacy/"]').click();
        cy.get('div.container .page-view > h2').its('length').should('be.gt', 5);
        cy.get('div.container .page-view > p').its('length').should('be.gt', 20);
        cy.get('.title-block [href="https://rocketpot.io/"]').click();
        cy.get('.footer-bottom .links [href="/terms/"]').click();
        cy.get('div.container .page-view h3').should('be.visible');
        cy.get('div.page-view > div').its('length').should('be.gt', 20);

    });
    it('Register', () => {
        const email=`dmykolaichuk + ${Date.now().toString(32)}@devforth.io`
        cy.visit('https://rocketpot.io/register/')
        cy.get('div[id="main-auth-popup"]').should('be.visible')
        cy.get('input[id="email"]').type(email)
        cy.get('input[id="day"]').type('26')
        cy.get('input[id="month"]').type('7')
        cy.get('input[id="year"]').type('1994')
        //cy.get('input[id="password"]').type(email)
        cy.get('div[class="checkbox"]').click()
        cy.get('button[id="auth-btn"]').click()
    });
})
