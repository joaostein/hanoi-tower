describe('Hanoi Tower', function () {

    beforeEach(function () {
        hanoi = new Hanoi(3);
    });

    it('starts with three rods', function () {
        expect(hanoi.rods).toBe(3);
    });

    it('starts with four rods', function () {
        hanoi = new Hanoi(4);
        expect(hanoi.rods).toBe(4);
    });
});