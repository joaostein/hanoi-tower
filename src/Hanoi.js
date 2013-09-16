var Hanoi = function (disks) {
    
    this.disks = disks;
    this.rods = [[], [], []];
    
    this.init = function () {
        for (var i = disks; i > 0; i--) {
            this.rods[0].unshift(i);
            this.addRodText(0, i);
        }
    },

    this.move = function (from, to) {
        var from = from - 1,
            to = to - 1,
            value = this.rods[from][0];

        if (this.rods[from][0] < this.rods[to][0] || this.rods[to][0] == undefined) {
            var disk = this.rods[from].shift();
            this.rods[to].unshift(disk);
            
            this.removeRodText(from);
            this.addRodText(to, value);
        }
    },

    this.autoPlay = function () {
        this.executeAllMoviments(this.disks, 1, 2, 3);
    },

    this.executeAllMoviments = function (numberDisks, fromRod, tempRod, toRod) {
        if (numberDisks === 0) return;
        this.executeAllMoviments(numberDisks - 1, fromRod, toRod, tempRod);
        this.move(fromRod, toRod);
        this.executeAllMoviments(numberDisks - 1, tempRod, fromRod, toRod);
    },

    this.addRodText = function (position, value) {
        $('.rod' + (position + 1)).prepend("<span>" + value + "</span>");
    },

    this.removeRodText = function (position) {
        $('.rod' + (position + 1)).find('span:first').remove();
    };
}