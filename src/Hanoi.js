var Hanoi = function (disks) {
    
    this.rods = [[], [], []];
    this.disks = disks;

    for (var i = disks; i > 0; i--) {
        this.rods[0].unshift(i);
    }


    this.move = function (origin, destination) {
        var origin = origin - 1;
            destination = destination - 1;

        if (this.rods[origin][0] < this.rods[destination][0] || this.rods[destination][0] == undefined) {
            var disk = this.rods[origin].shift();
            this.rods[destination].unshift(disk);
        }

    }

}