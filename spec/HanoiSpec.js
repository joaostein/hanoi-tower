describe('Hanoi Tower', function () {

    beforeEach(function () {
        hanoi = new Hanoi(3);
    });

    it('starts with three rods', function () {
        expect(hanoi.rods.length).toBe(3);
    });

    it('starts with three disks', function () {
        expect(hanoi.disks).toBe(3);
    });

    it('starts with N disks', function () {
        hanoi = new Hanoi(4);
        expect(hanoi.disks).toBe(4);
        expect(hanoi.rods).toEqual([[1, 2, 3, 4], [], []]);

        hanoi_1 = new Hanoi(10);
        expect(hanoi_1.disks).toBe(10);
        expect(hanoi_1.rods).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [], []]);
    });

});


describe('Rods', function () {
    
    beforeEach(function () {
        hanoi = new Hanoi(3);
    });

    it('should be able to have disks', function () {
        var rod = [1, 2, 3];
        expect(hanoi.rods[0]).toEqual(rod);
    });

    it('should be able to move the first disk to another rod', function () {
        
        hanoi.move(1, 2);
        expect(hanoi.rods[0]).toEqual([2, 3]);
        expect(hanoi.rods[1]).toEqual([1]);
        expect(hanoi.rods[2]).toEqual([]);

        hanoi.move(1, 3);
        expect(hanoi.rods[0]).toEqual([3]);
        expect(hanoi.rods[2]).toEqual([2]);

        hanoi.move(2, 3);
        expect(hanoi.rods[0]).toEqual([3]);
        expect(hanoi.rods[1]).toEqual([]);
        expect(hanoi.rods[2]).toEqual([1, 2]);

    });

    it('should not be able to move a disk on a rod that has a small disk on top', function () {
        
        hanoi.move(1, 2);
        hanoi.move(1, 2);
        expect(hanoi.rods[0]).toEqual([2, 3]);
        expect(hanoi.rods[1]).toEqual([1]);
        expect(hanoi.rods[2]).toEqual([]);

        hanoi.move(1, 3);
        expect(hanoi.rods[0]).toEqual([3]);
        expect(hanoi.rods[1]).toEqual([1]);
        expect(hanoi.rods[2]).toEqual([2]);

        hanoi.move(3, 2);
        expect(hanoi.rods[0]).toEqual([3]);
        expect(hanoi.rods[1]).toEqual([1]);
        expect(hanoi.rods[2]).toEqual([2]);

        hanoi.move(2, 1);
        expect(hanoi.rods[0]).toEqual([1, 3]);
        expect(hanoi.rods[1]).toEqual([]);
        expect(hanoi.rods[2]).toEqual([2]);

        hanoi.move(3, 1);
        expect(hanoi.rods[0]).toEqual([1, 3]);
        expect(hanoi.rods[1]).toEqual([]);
        expect(hanoi.rods[2]).toEqual([2]);

        hanoi.move(3, 2);
        expect(hanoi.rods[0]).toEqual([1, 3]);
        expect(hanoi.rods[1]).toEqual([2]);
        expect(hanoi.rods[2]).toEqual([]);

    });





































});