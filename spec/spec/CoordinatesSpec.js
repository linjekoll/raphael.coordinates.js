describe("Album", function () {
  beforeEach(function () {
    paper = Raphael(10, 50, 320, 200);
    path = paper.path("M10 10 L90 90 L21 18 L19 31");
    path.hide();
  });
  
  it("should be able to calculate length between two cords", function() {
    var length = path.getSubLengthByCord({
      y: 10,
      x: 10 
    }, {
      x: 21,
      y: 18
    });
    
    expect(length).toEqual(212.86170582141557);
  });
});
