describe("get length", function () {
  beforeEach(function () {
    paper = Raphael(10, 50, 320, 200);
    path = paper.path("M10 10 L90 90 L21 18 L19 31");
    path.hide();
  });
  
  it("should be able to calculate length between two cords", function() {
    var length = path.getLengthBetweenCoordinates({
      y: 10,
      x: 10 
    }, {
      x: 21,
      y: 18
    });
    
    expect(length).toEqual(212.86170582141557);
  });
  
  it("should be able to start the calculation from the first point", function() {
    expect(path.getLengthFromStartTo(21, 18)).toEqual(212.86170582141557)
  });
  
  it("should be able to start the calculation from the first point", function() {
    expect(path.getLengthFromEndTo(90, 90)).toEqual(112.87756726953388)
  });
  
  it("should return null if cords doesn't exists", function() {
    expect(path.getLengthFromEndTo(90, 100)).toBeNull();
    expect(path.getLengthFromStartTo(100, 90)).toBeNull();    
    var length = path.getLengthBetweenCoordinates({
      y: 10,
      x: 10 
    }, {
      x: 21,
      y: 100
    });
    
    expect(length).toBeNull();
  });
  
  it("should return 0 if trying to calculate length between the same coordinate", function() {
    var length = path.getLengthBetweenCoordinates({
      y: 10,
      x: 10 
    }, {
      x: 10,
      y: 10
    });
    
    expect(length).toEqual(0);
  });
});
