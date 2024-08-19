import inquirer from "inquirer";
async function Play_Game() {
    console.log("Welcome to Adventure Game");
    let question1 = await inquirer.prompt([
        {
            name: "hero",
            message: "WHAT IS YOUR HERO NAME ?",
            type: "input"
        },
        {
            name: "enemy",
            message: "WHAT IS YOUR ENEMY NAME ?",
            type: "input"
        }
    ]);
    // Hero Information
    console.log('***********************************************************************************************');
    let hero_name = question1.hero;
    let hero_power = 100;
    let hero_health = 100;
    console.log(`
       HERO NAME:    ${hero_name}
       HERO POWER:   ${hero_power}
       HERO HEALTH:  ${hero_health} 
    `);
    console.log('***********************************************************************************************');
    // Enemy Information
    let enemy_name = question1.enemy;
    let enemy_power = 100;
    let enemy_health = 100;
    console.log(`
       ENEMY NAME:   ${question1.enemy}
       ENEMY POWER:  ${enemy_power}
       ENEMY HEALTH: ${enemy_health}
    `);
    console.log('***********************************************************************************************');
    // Random veriables
    let Random_hero_power = Math.floor(Math.random() * hero_power + 1);
    let Random_enemy_power = Math.floor(Math.random() * enemy_power + 1);
    // Veriable
    let Incriment = 2;
    // Loop
    while (enemy_health > 0 && hero_health > 0) {
        let question2 = await inquirer.prompt({
            name: "attack",
            message: "PLEASE CHOOSE ANY ONE ?",
            type: "list",
            choices: ["1 : ATTACK", "2 : INCRESAE_HEALTH"]
        });
        // <------------------------------------------------END---------------------------------------------------->
        // Question choice Option 1 Attack
        if (question2.attack == "1 : ATTACK") {
            enemy_health = enemy_health - Random_hero_power;
            hero_health = hero_health - Random_enemy_power;
            --hero_power;
            --enemy_power;
            // apace for function call in future
            if (enemy_health <= 0) {
                console.log("YOU KILLED ENEMY");
                console.log("YOU WIN THE GAME");
            }
            else if (hero_health <= 0) {
                console.log("YOU LOSS THE GAME");
                console.log("ENEMY WIN THE GAME");
            }
        }
        // <------------------------------------------------END---------------------------------------------------->
        // Question choice Option 2 Increase Health
        if (question2.attack == "2 : INCRESAE_HEALTH") {
            if (Incriment > 0) {
                hero_health = hero_health + 50;
                --Incriment;
                // apace for function call in future
            }
            else {
                console.log("INCREASE HEALTH OPTION IS NOT AVELIBLE BECAUSE YOU ALREADY USE TWO TIMES");
            }
        }
    }
    // Confirm message for run loop again
    let confirm = await inquirer.prompt({
        name: "con",
        message: "DO YOU WANT TO PLAY AGAIN ?",
        type: "confirm",
    });
    if (confirm.con == true) {
        Play_Game();
    }
    else {
        console.log("THANK YOU FOR PLAYING THIS GAME!");
    }
    // <------------------------------------------------END---------------------------------------------------->
    // Function
    function then() {
        if (enemy_health <= 0 && hero_health <= 0) {
            hero_health = 1;
            if (hero_health < 0) {
                hero_health = 0;
            }
            if (enemy_health < 0) {
                enemy_health = 0;
            }
            console.log('***********************************************************************************************');
            console.log(`
            NOW ENEMY POWER:   ${enemy_power}
            NOW ENEMY HEALTH:  ${enemy_health}
        `);
            console.log('***********************************************************************************************');
            console.log(`
            NOW HERO POWER:  ${hero_power}
            NOW HERO HEALTH:  ${hero_health}
        `);
            console.log('***********************************************************************************************');
        }
    }
}
;
Play_Game();
