// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendDriver(name) {
      drivers.push(name);
      return drivers;
}
function destructivelyPrependDriver(name) {
      drivers.unshift(name);
      drivers;
}

  function destructivelyRemoveLastDriver() {
      drivers.pop(name);
      drivers;
      }
    
    function destructivelyRemoveFirstDriver() {
      drivers.shift(name);
      drivers;
    }
    
     function appendDriver(name) {
       const drivers = ["Milo", "Otis", "Garfield"];
       const copyOfDrivers = drivers.slice();
       copyOfDrivers.push(name);
       copyOfDrivers;
     }
     
//       it('appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', function () {
//         expect(appendDriver("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

//         expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });

//     describe('prependDriver(name)', function () {
//       it('prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', function () {
//         expect(prependDriver("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

//         expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });

//     describe('removeLastDriver()', function () {
//       it('removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged', function () {
//         expect(removeLastDriver()).to.have.ordered.members(["Milo", "Otis"]);

//         expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });

//     describe('removeFirstDriver()', function () {
//       it('removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged', function () {
//         expect(removeFirstDriver()).to.have.ordered.members(["Otis", "Garfield"]);

//         expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });
//   });
// });