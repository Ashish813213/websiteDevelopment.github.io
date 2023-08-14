
        let gamecells = document.querySelectorAll(".boxes");
        let startB = document.getElementById('play');
        let restartBN = document.getElementById('reset')
        let alert = document.querySelector('.alertb')
        let player1 = "X"
        let player2 = "O"
        let xclass = "Xclass";
        let oclass = "Oclass"
        let currentP = player1;
        let currentC = xclass;
        let play = () => {
            gamecells.forEach(cell => {
                cell.addEventListener('click', handleClick)
            })
        }
        let handleClick = (e) => {
            if (e.target.textContent == "") {
                e.target.textContent = currentP;
                e.target.classList.add(currentC);
                if (check()) {
                    console.log(currentP + "win");
                    cellD();
                    Alert(currentP + " wins")
                }
                else if (checktie()) {
                    console.log("its tie");
                    cellD();
                    Alert("its a tie")
                }
                else {
                    changeplayer();
                }
            }
        }
        let changeplayer = () => {
            if (currentP == player1) {
                currentP = player2;
                currentC = oclass;
            }
            else {
                currentP = player1;
                currentC = xclass;
            }
        }
        const check = () => {
            let checkwin =
                [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6],
                ];

            for (let i = 0; i < checkwin.length; i++) {
                const [pos1, pos2, pos3] = checkwin[i];
                if (gamecells[pos1].textContent !== '' &&
                    gamecells[pos1].textContent === gamecells[pos2].textContent &&
                    gamecells[pos2].textContent === gamecells[pos3].textContent) {
                    return true;
                }

            }
            return false;
            console.log("haa  chala");
        }
        const checktie = () => {
            let emptycells = 0;
            gamecells.forEach(cell => {
                if (cell.textContent === '') {
                    emptycells++;
                }
            })
            return emptycells === 0 && !check()
        }
        const cellD = () => {
            gamecells.forEach(cell => {
                cell.removeEventListener('click', handleClick)
                cell.classList.add('disabled')
            })
        }
        let restart = () => {
            gamecells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove("Xclass");
                cell.classList.remove("Oclass");
            });
            play()
        }
        restartBN.addEventListener('click', restart)


        let Alert = (text) => {
            alert.style.display = "flex"
            alert.innerHTML = text;
            restart();
            setTimeout(removeAlert, 3000);
        }
        let removeAlert = () => {
            alert.style.display = " none";
        }
