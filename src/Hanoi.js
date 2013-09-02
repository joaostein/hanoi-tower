var Hanoi = function (disks) {
    
    this.disks = disks;
    this.rods = [[], [], []];
    
    this.init = function () {
        for (var i = disks; i > 0; i--) {
            this.rods[0].unshift(i);
        }
    }

    this.move = function (from, to) {
        var from = from - 1;
            to = to - 1;

        if (this.rods[from][0] < this.rods[to][0] || this.rods[to][0] == undefined) {
            var disk = this.rods[from].shift();
            this.rods[to].unshift(disk);
            
            // this.updateViewRods();
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

    // this.updateViewRods = function () {
    //     for (var i = 0, len = hanoi.rods.length; i < len; i++) {
    //         if (hanoi.rods[i].length != 0) {
    //             for (var j = 0, len = hanoi.rods[i].length; j < len; j++) {
    //                 var p = document.querySelectorAll('.rod' + (i + 1))[0];
    //                 p.appendChild(document.createTextNode(hanoi.rods[i][j] + ' '));
    //             }
    //         }
    //     }
    // }

}