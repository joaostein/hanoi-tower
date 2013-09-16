
beforeEach(function () {
    rod1 = $('<div class="rod1"></div>').appendTo('body');
    rod2 = $('<div class="rod2"></div>').appendTo('body');
    rod3 = $('<div class="rod3"></div>').appendTo('body');

    hanoi = new Hanoi(3);
    hanoi.init();
});

afterEach(function () {
    $('.rod1').remove();
    $('.rod2').remove();
    $('.rod3').remove();
});

describe('Hanoi Tower', function () {

    it('starts with three rods', function () {
        expect(hanoi.rods.length).toBe(3);
    });

    it('starts with three disks', function () {
        expect(hanoi.disks).toBe(3);
    });

    it('starts with N disks', function () {
        var hanoi = new Hanoi(4);
        hanoi.init();
        expect(hanoi.disks).toBe(4);
        expect(hanoi.rods).toEqual([[1, 2, 3, 4], [], []]);

        var hanoi_1 = new Hanoi(10);
        hanoi_1.init();
        expect(hanoi_1.disks).toBe(10);
        expect(hanoi_1.rods).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [], []]);
    });

});


describe('Rods', function () {

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

describe('Hanoi View Gameplay', function () {

    it('should render all disks when starts', function () {
        expect(hanoi.rods[0]).toEqual([1, 2, 3]);
        expect(rod1.text()).toBe('123');
    });

    it('should auto-play', function () {
        hanoi.autoPlay();
        expect(hanoi.rods[0]).toEqual([]);
        expect(hanoi.rods[1]).toEqual([]);
        expect(hanoi.rods[2]).toEqual([1, 2, 3]);
    });

    it('should update view on each movement', function () {
        
        hanoi.move(1, 3);
        expect($('.rod1').text()).toBe('23');
        expect($('.rod2').text()).toBe('');
        expect($('.rod3').text()).toBe('1');

        hanoi.move(1, 2);
        expect($('.rod1').text()).toBe('3');
        expect($('.rod2').text()).toBe('2');
        expect($('.rod3').text()).toBe('1');

        hanoi.move(3, 2);
        expect($('.rod1').text()).toBe('3');
        expect($('.rod2').text()).toBe('12');
        expect($('.rod3').text()).toBe('');
    });
});

























