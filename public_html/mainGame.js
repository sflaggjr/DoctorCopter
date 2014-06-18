//Doctor-Copter

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.spritesheet('player', 'assets/helicopter.png', 16, 16, 6);
    game.load.image('building', 'assets/building.png');
    
}

function create() {
    //Initiating physics and graphics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    player = game.add.sprite(10, 10, 'player');
    building = game.add.sprite('building');
    player.anchor.setTo(0.5, 0.5);
    game.stage.backgroundColor = '#FFFFFF';
    game.physics.enable(player, Phaser.Physics.ARCADE);
    
    buildings = game.add.group();
    buildings.enableBody = true;
    //Copter's animation
    player.animations.add('right', [0,1,2], 10, true);
    player.animations.play('right', 15, true);
    
    //Enabling Input
    controls = game.input.keyboard.createCursorKeys();
    // placing buildings in the world
for (var i = 0; i < 10; i++)
    {
     var s = buildings.create(game.world.randomX, game.world.randomY, 'building');
     game.physics.enable(s, Phaser.Physics.ARCADE);
     //Check to see if the created building collides with another building or the helicopter and move it.
     if (game.physics.arcade.collide(s) || game.physics.arcade.collide(player))
        {
            buildings.set(i, x, game.world.randomX);
            buildings.set(i, y, game.world.randomX);
        }
    }
}

function update() {
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    player.body.collideWorldBounds = true;
    
    if (controls.right.isDown)
    {
        player.body.velocity.x = 150;
        player.angle = 15;
    }
    else if (controls.left.isDown)
    {
        player.body.velocity.x = -150;
        player.angle = -15;
    }
    else if (controls.up.isDown)
    {
        player.body.velocity.y = -150;
    }
    else if (controls.down.isDown)
    {
        player.body.velocity.y = 150;
    }
    else
    {
        player.angle = 0;
    }
       
}

function render() {
}


