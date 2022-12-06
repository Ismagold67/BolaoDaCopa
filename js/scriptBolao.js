        let Time01 = document.getElementById('Time01')
        let Time02 = document.getElementById('Time02')
        let plac01 = document.getElementById('plac01')
        let plac02 = document.getElementById('plac02')
        var TimeUm = window.prompt('Informe Seu Time: ')
        var TimeDois = window.prompt('Informe o Time Adversário: ')

        if(TimeUm.length > 0) {
        Time01.innerHTML = `${TimeUm}`
        Time02.innerHTML = `${TimeDois}`
        plac01.innerHTML = `${TimeUm}`
        plac02.innerHTML = `${TimeDois}`
        plac01.style.color = `red`
        
        }

        let Score = document.getElementById('score')
        let BRA = document.getElementById('BRA')
        let CAM = document.getElementById('CAM')
        

        
        let Nome = document.getElementById('nome')
        let Br = document.getElementById('Br')
        let Cam = document.getElementById('Cam')

        let Nome1 = document.getElementById('nome1')
        let Br1 = document.getElementById('Br1')
        let Cam1 = document.getElementById('Cam1')

        let Nome2 = document.getElementById('nome2')
        let Br2 = document.getElementById('Br2')
        let Cam2 = document.getElementById('Cam2')

        let Nome3 = document.getElementById('nome3')
        let Br3 = document.getElementById('Br3')
        let Cam3 = document.getElementById('Cam3')

        let Nome4 = document.getElementById('nome4')
        let Br4 = document.getElementById('Br4')
        let Cam4 = document.getElementById('Cam4')

        let Nome5 = document.getElementById('nome5')
        let Br5 = document.getElementById('Br5')
        let Cam5 = document.getElementById('Cam5')

        let Nome6 = document.getElementById('nome6')
        let Br6 = document.getElementById('Br6')
        let Cam6 = document.getElementById('Cam6')

        let Nome7 = document.getElementById('nome7')
        let Br7 = document.getElementById('Br7')
        let Cam7 = document.getElementById('Cam7')

        let Nome8 = document.getElementById('nome8')
        let Br8 = document.getElementById('Br8')
        let Cam8 = document.getElementById('Cam8')

        let Nome9 = document.getElementById('nome9')
        let Br9 = document.getElementById('Br9')
        let Cam9 = document.getElementById('Cam9')

        let Nome10 = document.getElementById('nome10')
        let Br10 = document.getElementById('Br10')
        let Cam10 = document.getElementById('Cam10')

        let ArNome = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
        let ArTeamOne = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
        let ArTeamTwo = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
        var Nom = Score
        var Braza = BRA
        var CAMA = CAM

        function start() {
            readLocalStorage()
        }
        function SaveGame() {
            writeToLocalStorage();
            
        }
        function writeToLocalStorage() {
            window.localStorage.setItem('saved-games', JSON.stringify(ArNome));
            window.localStorage.setItem('saved-games01', JSON.stringify(ArTeamOne));
            window.localStorage.setItem('saved-games02', JSON.stringify(ArTeamTwo));
        }
        function readLocalStorage() {
            if(!window.localStorage) {
                return
            }

            var savedGamesFromLocalStorage = window.localStorage.getItem('saved-games');
            var savedGamesFromLocalStorage01 = window.localStorage.getItem('saved-games01');
            var savedGamesFromLocalStorage02 = window.localStorage.getItem('saved-games02');

            if(savedGamesFromLocalStorage) {
                ArNome = JSON.parse(savedGamesFromLocalStorage)
            }
            if(savedGamesFromLocalStorage) {
                ArTeamOne = JSON.parse(savedGamesFromLocalStorage01)
            }
            if(savedGamesFromLocalStorage) {
                ArTeamTwo = JSON.parse(savedGamesFromLocalStorage02)
            }

        }
        

        function Dados() {
            ArNome.unshift(Nom.value)
            ArTeamOne.unshift(Braza.value)
            ArTeamTwo.unshift(CAMA.value)
            
            Nome.innerHTML = `${ArNome[0]}`
            Br.innerHTML = `${ArTeamOne[0]}`
            Cam.innerHTML = `${ArTeamTwo[0]}`
            
            Nome1.innerHTML = `${ArNome[1]}`
            Br1.innerHTML = `${ArTeamOne[1]}`
            Cam1.innerHTML = `${ArTeamTwo[1]}`

            Nome2.innerHTML = `${ArNome[2]}`
            Br2.innerHTML = `${ArTeamOne[2]}`
            Cam2.innerHTML = `${ArTeamTwo[2]}`

            Nome3.innerHTML = `${ArNome[3]}`
            Br3.innerHTML = `${ArTeamOne[3]}`
            Cam3.innerHTML = `${ArTeamTwo[3]}`

            Nome4.innerHTML = `${ArNome[4]}`
            Br4.innerHTML = `${ArTeamOne[4]}`
            Cam4.innerHTML = `${ArTeamTwo[4]}`

            Nome5.innerHTML = `${ArNome[5]}`
            Br5.innerHTML = `${ArTeamOne[5]}`
            Cam5.innerHTML = `${ArTeamTwo[5]}`

            Nome6.innerHTML = `${ArNome[6]}`
            Br6.innerHTML = `${ArTeamOne[6]}`
            Cam6.innerHTML = `${ArTeamTwo[6]}`

            Nome7.innerHTML = `${ArNome[7]}`
            Br7.innerHTML = `${ArTeamOne[7]}`
            Cam7.innerHTML = `${ArTeamTwo[7]}`

            Nome8.innerHTML = `${ArNome[8]}`
            Br8.innerHTML = `${ArTeamOne[8]}`
            Cam8.innerHTML = `${ArTeamTwo[8]}`

            Nome9.innerHTML = `${ArNome[9]}`
            Br9.innerHTML = `${ArTeamOne[9]}`
            Cam9.innerHTML = `${ArTeamTwo[9]}`

            Nome10.innerHTML = `${ArNome[10]}`
            Br10.innerHTML = `${ArTeamOne[10]}`
            Cam10.innerHTML = `${ArTeamTwo[10]}`
            
        } 
        function starte() {
            start()
        }
        /*function deleta() {
            ArNome.splice(0, 9)
            ArTeamOne.splice(0, 9)
            ArTeamTwo.splice(0, 9)
        }*/
        /*if(ArNome[0] == 0 && ArTeamOne[0] == 0 && ArTeamTwo[0] == 0) {
                window.alert('Insira os dados corretamente')
                ArNome.pop(Nom.value)
                Nome.remove(Nom.value)
                ArTeamOne.pop(Braza.value)
                Br.remove(Br.value)
                ArTeamTwo.pop(CAMA.VALUE)
                Cam.remove(Cam.value)
            } else {
               */
