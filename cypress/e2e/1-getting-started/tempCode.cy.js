import 'cypress-network-idle';


describe('rpdev test', () => {
    beforeEach(() => {
        // before each test, we can automatically preserve the
        // 'session_id' and 'remember_token' cookies. this means they
        // will not be cleared before the NEXT test starts.
        //
        // the name of your cookies will likely be different
        // this is an example
        Cypress.Cookies.preserveOnce('loggedin', 'registered', 'PHPSESSID');
      });
    
    it('Login', () => {
        cy.visit('https://rocketpot.io');
        // cy.waitForNetworkIdle(1_000);
        cy.get('div.end span.button-gray').click();
        cy.get('input#email').type('vsemeniuk@devforth.io');
        cy.get('input#password').type('vsemeniuk@devforth.io');
        cy.get('button#auth-btn').click();
        cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
    });

    it('Providers count', () => {
        cy.get('.sidemenu-main .providers').click();

        let providersArr = ['/providers/exclusive-games/', '/providers/pragmatic-play/', '/providers/play-n-go/', '/providers/gamomat/', '/providers/onetouch/', 
        '/providers/kagaming/', '/providers/playtech/', '/providers/spinomenal/', '/providers/habanero/', '/providers/evoplay-entertainment/', '/providers/amusnet/', 
        '/providers/wazdan/', '/providers/isoftbet/', '/providers/nucleus/', '/providers/amatic/', '/providers/betsoft/', '/providers/booming-games/', '/providers/gameart/', 
        '/providers/endorphina/', '/providers/fazi/', '/providers/bgaming/', '/providers/1x2gaming/', '/providers/belatra/', '/providers/quickspin/', '/providers/platipus/', 
        '/providers/blueprint-gaming/', '/providers/kalamba-games/', '/providers/caleta-gaming/', '/providers/playson/', '/providers/pgsoft/', '/providers/spearhead/', 
        '/providers/swintt/', '/providers/elk/', '/providers/thunderkick/', '/providers/eagaming/', '/providers/goldenrace/', '/providers/mascot/', '/providers/booongo/', 
        '/providers/alg/', '/providers/mrslotty/', '/providers/tom-horn/', '/providers/smartsoft/', '/providers/mancala/', '/providers/big-time-gaming/', '/providers/reelplay/', '/providers/push-gaming/', 
        '/providers/truelab/', '/providers/gamesinc/', '/providers/revolver/', '/providers/arcadem/', '/providers/fantasma/', '/providers/bet2tech/', '/providers/merkur/', 
        '/providers/kiron/', '/providers/leap-gaming/', '/providers/petersons/', '/providers/4theplayer/', '/providers/candlebets/', '/providers/maxwingaming/', '/providers/yggdrasil/', 
        '/providers/hacksaw-gaming/', '/providers/relax-gaming/', '/providers/gamzix/', '1'];

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
                }
            }
            cy.log(notFoundProviders, 'notFoundProviders');

            if(notFoundProviders.length > 1){
                throw new Error("test fails here" + notFoundProviders.toString());
            }
        })
        
        
    })

});