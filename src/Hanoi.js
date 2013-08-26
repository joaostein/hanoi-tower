var Hanoi = function (disks) {
    
    this.disks = disks;
    this.rods = [[], [], []];
    
    this.init = function () {
        for (var i = disks; i > 0; i--) {
            this.rods[0].unshift(i);
        }
    }

    this.move = function (origin, destination) {
        var origin = origin - 1;
            destination = destination - 1;

        if (this.rods[origin][0] < this.rods[destination][0] || this.rods[destination][0] == undefined) {
            var disk = this.rods[origin].shift();
            this.rods[destination].unshift(disk);
        }
    }

    this.autoPlay = function () {
        this.executeAllMoviments(this.disks, 1, 2, 3);
    }

    this.executeAllMoviments = function (numberDisks, fromRod, tempRod, toRod) {
        if (numberDisks === 0) return;
        this.executeAllMoviments(numberDisks - 1, fromRod, toRod, tempRod);
        this.move(fromRod, toRod);
        this.executeAllMoviments(numberDisks - 1, tempRod, fromRod, toRod);
    }
}