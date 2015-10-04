var convert = require('./roman-numerals.js')
var assert = require('assert');

describe('toRoman (converts numbers to Roman Numerals)', function(){
  it('should convert 0 to ', function(){
    assert.equal('', convert.toRoman(0));
  });
  it('should convert 1 to I', function(){
    assert.equal('I', convert.toRoman(1));
  });
  it('should convert 2 to II', function(){
    assert.equal('II', convert.toRoman(2));
  });
  it('should convert 3 to III', function(){
    assert.equal('III', convert.toRoman(3));
  });
  it('should convert 4 to IV', function(){
    assert.equal('IV', convert.toRoman(4));
  });
  it('should convert 5 to V', function(){
    assert.equal('V', convert.toRoman(5));
  });
  it('should convert 7 to VII', function(){
    assert.equal('VII', convert.toRoman(7));
  });
  it('should convert 9 to IX', function(){
    assert.equal('IX', convert.toRoman(9));
  });
  it('should convert 10 to X', function(){
    assert.equal('X', convert.toRoman(10));
  });
  it('should convert 13 to XIII', function(){
    assert.equal('XIII', convert.toRoman(13));
  });
  it('should convert 14 to XIV', function(){
    assert.equal('XIV', convert.toRoman(14));
  });
  it('should convert 15 to XV', function(){
    assert.equal('XV', convert.toRoman(15));
  });
  it('should convert 17 to XVII', function(){
    assert.equal('XVII', convert.toRoman(17));
  });
  it('should convert 19 to XIX', function(){
    assert.equal('XIX', convert.toRoman(19));
  });
  it('should convert 20 to XX', function(){
    assert.equal('XX', convert.toRoman(20));
  });
  it('should convert 25 to XXV', function(){
    assert.equal('XXV', convert.toRoman(25));
  });
  it('should convert 29 to XXIX', function(){
    assert.equal('XXIX', convert.toRoman(29));
  });
  it('should convert 31 to XXXI', function(){
    assert.equal('XXXI', convert.toRoman(31));
  });
  it('should convert 39 to XXXIX', function(){
    assert.equal('XXXIX', convert.toRoman(39));
  });
  it('should convert 40 to XL', function(){
    assert.equal('XL', convert.toRoman(40));
  });
  it('should convert 50 to L', function(){
    assert.equal('L', convert.toRoman(50));
  });
  it('should convert 60 to LX', function(){
    assert.equal('LX', convert.toRoman(60));
  });
  it('should convert 70 to LXX', function(){
    assert.equal('LXX', convert.toRoman(70));
  });
  it('should convert 80 to LXXX', function(){
    assert.equal('LXXX', convert.toRoman(80));
  });
  it('should convert 90 to XC', function(){
    assert.equal('XC', convert.toRoman((90)));
  });
  it('should convert 99 to XCIX', function(){
    assert.equal('XCIX', convert.toRoman((99)));
  });
  it('should convert 100 to C', function(){
    assert.equal('C', convert.toRoman((100)));
  });
  it('should convert 101 to CI', function(){
    assert.equal('CI', convert.toRoman((101)));
  });
  it('should convert 113 to CXIII', function(){
    assert.equal('CXIII', convert.toRoman((113)));
  });
  it('should convert 200 to CC', function(){
    assert.equal('CC', convert.toRoman((200)));
  });
  it('should convert 300 to CCC', function(){
    assert.equal('CCC', convert.toRoman((300)));
  });
  it('should convert 400 to CD', function(){
    assert.equal('CD', convert.toRoman((400)));
  });
  it('should convert 404 to CDIV', function(){
    assert.equal('CDIV', convert.toRoman((404)));
  });
  it('should convert 500 to D', function(){
    assert.equal('D', convert.toRoman((500)));
  });
  it('should convert 573 to DLXXIII', function(){
    assert.equal('DLXXIII', convert.toRoman((573)));
  });
  it('should convert 600 to DC', function(){
    assert.equal('DC', convert.toRoman((600)));
  });
  it('should convert 700 to DCC', function(){
    assert.equal('DCC', convert.toRoman((700)));
  });
  it('should convert 777 to DCCLXXVII', function(){
    assert.equal('DCCLXXVII', convert.toRoman((777)));
  });
  it('should convert 800 to DCCC', function(){
    assert.equal('DCCC', convert.toRoman((800)));
  });
  it('should convert 900 to CM', function(){
    assert.equal('CM', convert.toRoman((900)));
  });
  it('should convert (999) to CM', function(){
    assert.equal('CMXCIX', convert.toRoman((999)));
  });
})
