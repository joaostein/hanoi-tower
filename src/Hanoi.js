var Hanoi = function (disks) {
    
    this.disks = disks;
    this.rods = [[], [], []];
    
    this.init = function () {
        for (var i = disks; i > 0; i--) {
            this.rods[0].unshift(i);
        }

        this.updateRodText(0);
    }

    this.move = function (from, to) {
        var from = from - 1;
            to = to - 1;

        if (this.rods[from][0] < this.rods[to][0] || this.rods[to][0] == undefined) {
            var disk = this.rods[from].shift();
            this.rods[to].unshift(disk);
            
            this.updateRodText(from);
            this.updateRodText(to);
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

    this.updateRodText = function (position) {
        var rod = document.querySelectorAll('.rod' + (position + 1))[0];
        rod.innerHTML = '';

        for (var i = 0, disksLength = hanoi.rods[position].length; i < disksLength; i++) {
            rod.appendChild(document.createTextNode(hanoi.rods[position][i] + ' '));
        }
    }

















}